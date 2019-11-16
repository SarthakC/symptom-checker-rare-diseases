import React from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header.jsx';
import Dashboard from './queries/Dashboard.jsx';

import { Provider } from 'react-redux';
import store from '../store';

export const App = () => {
  return (
    <Provider store={store}>
      <>
        <Header />
        <div className='container'>
          <Dashboard />
        </div>
      </>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
