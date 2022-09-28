import React from 'react';
import './Info.css';
import image from '../../my-img.jpg';

const Info = () => {
    return (
        <div>
            <div className='info-data'>
                <img className='my-img' src={image} alt="" />
                <h2>Mohammad Sumon</h2>
            </div>
            <div className='info-container'>
                <div className='info-details'>
                    <h4>68 <small>kg</small></h4>
                    <h4>5.6</h4>
                    <h4>36 <small>yrs</small></h4>
                </div>
                <div className='info-details'>
                    <h3>Weight</h3>
                    <h3>Height</h3>
                    <h3>Age</h3>
                </div>
            </div>
        </div>
    );
};

export default Info;