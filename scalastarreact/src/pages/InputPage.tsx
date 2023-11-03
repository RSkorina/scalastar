// import React, { useState } from "react";

import './InputPage.css'

const InputPage = ({
  onClickSetPageHome,
  onClickSetPageResults,
  onInputFirstName,
  onInputLastName,
}: {
  onClickSetPageHome: () => void
  onClickSetPageResults: () => void
  onInputFirstName: (param: string) => void
  onInputLastName: (param: string) => void
}) =>  {
  
  return (
    <>
    <div className='spacingPage'>
      <label className='inputText'>
        First Name:
        <input type="text" className='inputBox' defaultValue={''} onChange={e => onInputFirstName(e.target.value)} />
      </label>
      <label className='inputText'>
        Last Name:
        <input type="text" className='inputBox' defaultValue={''} onChange={e => onInputLastName(e.target.value)} />
      </label>    
      <div className='buttonPosition'> 
        <button className='buttonMain' onClick={()=>onClickSetPageHome()}>Go Back</button>
        <button className='buttonMain' onClick={()=>onClickSetPageResults()}>GenerateName</button>
      </div>
      </div>      
    </>
  );
} 

export default InputPage;
