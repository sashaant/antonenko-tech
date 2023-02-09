import React, { useState, useEffect } from 'react';


const CookiePolicy = () => {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (cookieAccepted) {
      setAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    setAccepted(true);
    localStorage.setItem('cookieAccepted', true);
  };

  if (accepted) {
    return null;
  }

  return (
    <div>
      <p>
        This website uses cookies to enhance the user experience. By using our
        website, you agree to our use of cookies.
      </p>
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default CookiePolicy;