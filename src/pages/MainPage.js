import React from 'react';
import Card from '../componets/Card';
import Footer from '../componets/Footer';
import Foto from '../componets/Foto';
import RunningLine from '../componets/RunningLine';



const MainPage = () => {
 
    return (
        <div>
        <RunningLine/>
        <Foto/>
        <Card/>
        <Footer/>
        </div>
    );
    }

export default MainPage;
