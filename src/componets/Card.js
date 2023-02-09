import React from 'react';

import './Card.css';

const Card = () => {
  const data ={
    "name": "SASHA ANTONENKO",    
  }

  return(
    <div className="card" >
        <h1>{data.name}</h1>
            <p>JS evangelist in dev and testing apps| Making imposible at JABRA</p>
            <p>Support for Ukraine 🇺🇦 |  <a href="https://savelife.in.ua/en/donate-en/#donate-army-card-monthlyhools.com/"> DONATE TO SAVEINLIFE CHARITY FUND</a></p>
            <p>Contact me:</p>
        <a href="mailto:oantonenko.dev@gmail.com">oantonenko.dev@gmail.com</a>
    </div>
  )
};

export default Card;