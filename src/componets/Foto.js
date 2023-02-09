import "../styles/Foto.css";
import foto from "../images/foto.jpg";
import React from 'react';

const Foto = () => {
    return (
        <div className="foto">
            <img src={foto} alt="My foto" />
        </div>
    );
};

export default Foto;