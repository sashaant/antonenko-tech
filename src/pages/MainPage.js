import React from 'react';
import Card from '../componets/Card';
import Footer from '../componets/Footer';
import Foto from '../componets/Foto';
import RunningLine from '../componets/RunningLine';
import DarkModeSwitch from '../componets/DarkModeSwitch';
import Header from '../componets/Header';
import HeroComponent from '../componets/HeroComponent';


const MainPage = () => {
 
    return (
        <div>
        <Header/>
        <RunningLine/>
        <DarkModeSwitch />
        <HeroComponent/>
             
        <Card/>
        <Footer/>
        </div>
    );
    }

export default MainPage;
