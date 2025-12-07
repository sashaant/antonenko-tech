import React from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import DarkModeSwitch from '../components/ThemeSwitcher';
import Header from '../components/Header';



const MainPage = () => {
 
    return (
        <div>
            <Header/>
            <DarkModeSwitch />    
            <Card/>
            <Footer/>
        </div>
    );
    }

export default MainPage;
