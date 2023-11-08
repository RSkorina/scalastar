// import React, { useState } from "react";

import './HomePage.css'

import logo from '../assets/logoOrange.png';

const HomePage = ({
  onClickSetPageInput,
  toggleSwitch
}: {
  onClickSetPageInput: () => void
  toggleSwitch: JSX.Element
}) =>  {
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
    {toggleSwitch}
    </>
  );
} 

export default HomePage;
