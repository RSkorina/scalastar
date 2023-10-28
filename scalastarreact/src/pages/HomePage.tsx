import React from 'react';
import './HomePage.css'

import logo from '../assets/logoOrange.png';



function HomePage() {
  return (
    <>
    <div className='titleContainer'>
        <img 
        src={logo}
        className='titleImage'
        />
    </div>
    <div className='titleOnImage'>
        <h3> Name Generator</h3>
    </div>
    </>
  );
}

export default HomePage;
