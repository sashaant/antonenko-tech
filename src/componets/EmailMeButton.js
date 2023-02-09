import React from "react";
import "../styles/EmailMeButton.css";

const EmailMeButton = () => {
  const handleClick = () => {
    window.location.href = "mailto:antonenko.qa@gmail.com";
  };

  return (
    <button className="button" onClick={handleClick}>
      {/* Email Me */}
      Contact me 
    </button>
  );
};

export default EmailMeButton;