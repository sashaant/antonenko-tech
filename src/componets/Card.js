import React from 'react';

import './Card.css';

const Card = () => {
  const data ={
    name: "SASHA ANTONENKO",
    text1: "Welcome and thanks for stopping by. I'm happy Ukrainian SDET, in love JavaScript and technologys.",
    text2:"I hope you enjoy exploring this site as much as I've enjoyed building it.",
    contact: "contact me here:",
    enail:"oantonenko.dev@gmail.com"
  }

  return(
    <div className="card" >

    <h1>{data.name}</h1>
    <p>{data.text1} </p>
    <p>{data.text2}</p>
    {/* <button onClick={clickHandler}>Testing button</button> */}
    <p>{data.contact}</p>

    <a href="mailto:oantonenko.dev@gmail.com">oantonenko.dev@gmail.com</a>
    {/* <a href="antonenko.qa@gmail.com">antonenko.qa@gmail.com</a> */}

    </div>
  )
};

export default Card;