import React, { useState } from "react";

import './HomePage.css'

import logo from '../assets/logoOrange.png';



const HomePage = ({onClickNextPage}: {onClickNextPage: () => void}) =>  {
  return (
    <>
    <div className='titleContainer'>
        <img 
        src={logo}
        alt='logo'
        className='titleImage'
        />
    </div>
    <h3 className='titleOnImage'>Name Generator</h3>
        <button onClick={onClickNextPage}>Default</button>
    </>
  );
}

export default HomePage;
