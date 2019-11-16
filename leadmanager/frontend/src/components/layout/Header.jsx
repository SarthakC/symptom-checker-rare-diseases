import React from 'react';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarTogglerDemo01'
        aria-controls='navbarTogglerDemo01'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
        <a className='navbar-brand' href='#'>
          Symptom Checker: Rare Diseases
        </a>
        <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
          <li className='nav-item active'>
            <a className='nav-link' href='#'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
