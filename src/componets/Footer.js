import React from 'react';

import './Footer.css';


const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="footer">
        <p>{`© Sasha Antonenko, Kyiv, Ukraine ${year}`}</p>
        </div>
    );
    };

export default Footer;