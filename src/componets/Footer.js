import React from 'react';

import './Footer.css';


const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <p>Sasha Antonenko, Kyiv, Ukraine<br/>
            {`© 2022 - ${year}`} </p>
        </div>
    );
    };

export default Footer;