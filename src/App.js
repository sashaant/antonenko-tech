import React from 'react';
import ReactGA from 'react-ga';

import Card from './componets/Card';
import Footer from './componets/Footer';
import Navbar from './componets/Navbar';
import Foto from './componets/Foto';
import RunningLine from './componets/RunningLine';

const TRACKING_ID = "G-F8CE2RP8XW";
ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
    <div>
      <Navbar/>
      <RunningLine/>
      <Foto/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;