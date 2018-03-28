import React from 'react';
import './css/header.css';
import logol from './assets/images/logol.png';
import green from './assets/images/green.png';


const Header = () => (
  <header>

    <div className="container">
      <div class="row">
        <div class="col-md-3"><img className='logol' src={logol} alt='logol'></img></div>
        <div class="col-md-3 offset-md-6"><img className='green' src={green} alt='green'></img></div>
      </div>
    </div>
  </header >
);


export default Header;