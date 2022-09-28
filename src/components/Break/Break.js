import React from 'react';
import './Break.css';

const Break = () => {
    return (
        <div>
            <h2>Add a break</h2>
            <div className='break-content'>
                <p>10s</p>
                <p>20s</p>
                <p>30s</p>
                <p>40s</p>
            </div>
        </div>
    );
};

export default Break;