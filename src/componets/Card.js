import React from 'react';

import './Card.css';

const Card = () => {
  const data ={
    name: "Sasha Antonenko",
    text1: "Welcome and thanks for stopping by. I'm happy Ukrainian SDET, in love JavaScript and technologys",
    text2:"I hope you enjoy exploring this site as much as I've enjoyed building it.",
    contact: "contact me: antonenko.qa@gmail.com"
  }

  return(
    <div className="card">
    <h2>Hi everyone!</h2>
    <h1>I'm {data.name}</h1>
    <p>{data.text1} </p>
    <p>{data.text2}</p>
    <p>{data.contact}</p>
  </div>
  )
};

export default Card;