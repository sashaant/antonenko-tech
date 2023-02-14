import React from 'react';
import ReactGA from 'react-ga';
import MainPage from './pages/MainPage';


const TRACKING_ID = "G-F8CE2RP8XW";
ReactGA.initialize(TRACKING_ID);

const App = () => {
 
  return (
    <div>
     <MainPage/>
    </div>
  );
}

export default App;

