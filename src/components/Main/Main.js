import React from 'react';
import Header from '../Header/Header';
import './Main.css';

const Main = () => {
    return (
        <div className='main'>
            <div className="activities-container">
                <Header></Header>
            </div>
            <div className="details-container">
                <h2>this is details</h2>
            </div>
        </div>
    );
};

export default Main;