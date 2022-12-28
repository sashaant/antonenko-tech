import React from "react";

// import "./Foto.css";

const Foto = () => {
    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '25vh',
        backgroundImage: "url(../images/foto.jpg)",

 
    };

    return (
        <div style={styles}>
        {/* // <div className="foto"> */}
            <h2>Some content here</h2>
        </div>
    );
}

export default Foto;