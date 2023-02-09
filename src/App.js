import React from 'react';
import ReactGA from 'react-ga';

import Card from './componets/Card';
import Footer from './componets/Footer';
import Foto from './componets/Foto';
import RunningLine from './componets/RunningLine';
import CookiePolicy from './componets/CookiePolicy';


const TRACKING_ID = "G-F8CE2RP8XW";
ReactGA.initialize(TRACKING_ID);


const App = () => {

  return (
    <div>
      <RunningLine/>
      <Foto/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;