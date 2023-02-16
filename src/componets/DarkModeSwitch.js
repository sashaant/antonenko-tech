import React, { useState, useEffect } from 'react';
import "../styles/DarkModeSwitch.css"
// import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem('isDarkModeEnabled');
    if (isDarkModeEnabled) {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const handleToggle = () => {
    const updatedIsDarkMode = !isDarkMode;
    localStorage.setItem('isDarkModeEnabled', updatedIsDarkMode);
    setIsDarkMode(updatedIsDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className="dark-mode-switch">
      <span>{isDarkMode ? '' : ''}</span>
      <Switch 
        checked={isDarkMode}
        onChange={handleToggle}
        name="dark-mode-switch"
        color="default"
      />
    </div>
  );
};

export default DarkModeSwitch;

