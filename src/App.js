import React from 'react';
import Card from './componets/Card';
import Footer from './componets/Footer';
import Navbar from './componets/Navbar';
import Foto from './componets/Foto';
import RunningLine from './componets/RunningLine';



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