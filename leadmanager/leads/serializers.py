from rest_framework import serializers
from .models import Query
import spacy
import scispacy
import pymongo
import re
import os

# Lead Serializer


nlp = spacy.load('en_core_sci_lg')

# load orphanet database
client = pymongo.MongoClient(os.environ['MONGO_URL'])
db = client.test
collection = db['diseases']


known_symptoms = collection.distinct(
    "HPODisorderAssociationList.HPODisorderAssociation.HPO.HPOTerm")
known_symptoms = [s.lower() for s in known_symptoms]

# Query functions


def make_string_case_insensitive(str):
    return re.compile('^' + re.escape(str) + '$', re.IGNORECASE)


def make_query_string(symptoms):
    symptom_queries = []
    for symptom in symptoms:
        symptom_queries.append(
            {u"HPODisorderAssociationList.HPODisorderAssociation.HPO.HPOTerm": make_string_case_insensitive(symptom)})
    query_string = {}
    query_string["$and"] = symptom_queries
    return query_string


def retrieve_symptoms(text):
    try:
        docx = nlp(text)
        entities = [w.text for w in docx.ents]
        symptoms = [e.lower()
                    for e in entities if e.lower() in known_symptoms]
        return set(symptoms)
    except:
        return []


def retreive_diseases(symptoms):
    try:
        query_formatted = make_query_string(symptoms)
        cursor = collection.find(query_formatted)
        diseases = [doc['Name']['#text'] for doc in cursor]
        return diseases
    except:
        return []


class QuerySerializer(serializers.ModelSerializer):

    symptoms_and_diseases = serializers.SerializerMethodField()

    def get_symptoms_and_diseases(self, obj):
        if obj.text is not None:
            symptoms = retrieve_symptoms(obj.text)
            diseases = retreive_diseases(symptoms)
            return {'symptoms': symptoms, 'diseases': diseases}

        else:
            return None

    class Meta:
        model = Query
        fields = '__all__'
