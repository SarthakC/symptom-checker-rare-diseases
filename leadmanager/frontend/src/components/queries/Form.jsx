import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addQuery } from '../../actions/queries';

const Form = ({ addQuery }) => {
  const [query, setQuery] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    try {
      const data = { text: query };
      addQuery(data);
    } catch (error) {
      console.log(error);
    }

    setQuery('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='query'>Please enter the symptoms:</label>
        <textarea
          autoFocus
          name='query'
          value={query}
          className='form-control rounded-0'
          placeholder='The patient has seizures and autism.'
          onChange={e => setQuery(e.target.value)}
        />
        <input type='submit' value='Submit' className='btn btn-primary' />
      </form>
    </div>
  );
};

export default connect(null, { addQuery })(Form);
