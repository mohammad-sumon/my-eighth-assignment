import React from 'react';
import './Exercise.css';

const Exercise = () => {
    return (
        <div>
            <h2>Exercise Details</h2>
            <h3 className='exercise'>Exercise Time: {} Seconds</h3>
            <h3 className='exercise'>Break Time: {} Seconds</h3>
        </div>
    );
};

export default Exercise;