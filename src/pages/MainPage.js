import React from 'react';
import Card from '../componets/Card';
import Footer from '../componets/Footer';
import DarkModeSwitch from '../componets/DarkModeSwitch';
import Header from '../componets/Header';



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
