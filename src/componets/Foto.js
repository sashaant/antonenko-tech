import React from 'react';
import "../styles/Foto.css";
import foto from "../images/foto.jpg";

const Foto = () => {
    return (
        <div className="foto">
            <img src={foto} alt="My Image" />
        </div>
    );
};

export default Foto;