from .models import Query
from rest_framework import viewsets, permissions
from .serializers import QuerySerializer

# Lead Viewset


class QueryViewSet(viewsets.ModelViewSet):
    queryset = Query.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = QuerySerializer
