import React from 'react';
import Navbar from './Navbar';
import StartScreenBody from './StartScreenBody';
import './styles/StartScreen.css'

const StartScreen = () => {
    return (
        <div className='startScreen'>
            <Navbar/>
            <StartScreenBody/>
        </div>
    );
};

export default StartScreen;