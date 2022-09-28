import React from 'react';
import Header from '../Header/Header';
import Info from '../Info/Info';
import './Main.css';

const Main = () => {
    return (
        <div className='main'>
            <div className="activities-container">
                <Header></Header>
            </div>
            <div className="details-container">
                <Info></Info>
            </div>
        </div>
    );
};

export default Main;