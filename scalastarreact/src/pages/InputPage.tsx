// import React, { useState } from "react";

import './HomePage.css'

import logo from '../assets/logoOrange.png';





const InputPage = ({onClickNextPage}: {onClickNextPage: () => void}) =>  {
  console.log('inputPageLoaded')
  return (
    <>
    <div className='buttonPosition'> 
      <button className='buttonMain' onClick={onClickNextPage}>Enter</button>
    </div>
    </>
  );
} 

export default InputPage;
