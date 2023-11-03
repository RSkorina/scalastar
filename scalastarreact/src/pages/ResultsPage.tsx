// import React, { useState } from "react";

import './ResultsPage.css'

const ResultsPage = ({
  onClickSetPageHome,
  warriorName,
}: {
  onClickSetPageHome: () => void
  warriorName: string
}) =>  {
  return (
    <>
    <div className='spacingPage'>   
      <div className='buttonPosition'>
        <h3>WELCOME TO THE CLAN</h3>
        <h1>{warriorName}</h1>
        <button className='buttonMain' onClick={()=>onClickSetPageHome()}>Go Home</button>
      </div>
      </div>      
    </>
  );
} 

export default ResultsPage;
