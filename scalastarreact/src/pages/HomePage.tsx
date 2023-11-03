// import React, { useState } from "react";

import './HomePage.css'

import logo from '../assets/logoOrange.png';





const HomePage = ({onClickSetPageInput}: {onClickSetPageInput: () => void}) =>  {
  console.log(onClickSetPageInput);
  return (
    <>
    <div className='titleContainer'>
        <img 
        src={logo}
        alt='logo'
        className='titleImage'
        />
    </div>
    <div className='subtitlePosition'>
      <h3 className='titleOnImage'>Name Generator</h3>
    </div>
    <div className='buttonPosition'> 
      <button className='buttonMain' onClick={()=>onClickSetPageInput()}>Enter</button>
    </div>
    </>
  );
} 

export default HomePage;
