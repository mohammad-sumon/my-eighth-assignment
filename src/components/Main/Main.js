import React from 'react';
import Break from '../Break/Break';
import Exercise from '../Exercise/Exercise';
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
                <Break></Break>
                <Exercise></Exercise>
            </div>
        </div>
    );
};

export default Main;