import React from 'react';
import Card from '../componets/Card';
import Footer from '../componets/Footer';
import Header from '../componets/Header';
import HeroComponent from '../componets/HeroComponent';

const MainPage = () => {
 
  return (
    <>
      <Header/>
      
      <main>
        <HeroComponent/>
        <Card/>
      </main>
      
      <Footer/>
    </>
  );
}

export default MainPage;