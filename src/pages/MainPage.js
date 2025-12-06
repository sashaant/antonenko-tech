import React from 'react';
import Card from '../componets/Card';
import Footer from '../componets/Footer';


import DarkModeSwitch from '../componets/ThemeSwitcher';
import Header from '../componets/Header';
import HeroComponent from '../componets/HeroComponent';


const MainPage = () => {
 
    return (
        <div>
        <Header/>

        <DarkModeSwitch />
        <HeroComponent/>
             
        <Card/>
        <Footer/>
        </div>
    );
    }

export default MainPage;
