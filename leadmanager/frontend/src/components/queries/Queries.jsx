import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

const Queries = ({
  results: {
    queries: { symptoms_and_diseases, text },
  },
}) => {
  const { symptoms, diseases } = { ...symptoms_and_diseases };

  return (
    <>
      {text ? (
        <div>
          <h5>You entered:</h5>
          <blockquote>
            <em>"{text}"</em>
          </blockquote>
          <h5>
            We could find {symptoms.length}{' '}
            {symptoms.length === 1 ? 'symptom ' : 'symptoms '} here:
          </h5>
          <ol>
            {symptoms.map(symptom => (
              <li key={uuid.v4()}>{symptom}</li>
            ))}
          </ol>
          <h5>
            {' '}
            There
            {diseases.length === 1
              ? 'is 1 condition that matches'
              : `are ${diseases.length} conditions that match`}{' '}
            your symptoms:
          </h5>
          <ol>
            {diseases.map(disease => (
              <li key={uuid.v4()}>{disease}</li>
            ))}
          </ol>
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = state => ({
  results: state,
});

export default connect(mapStateToProps, null)(Queries);
