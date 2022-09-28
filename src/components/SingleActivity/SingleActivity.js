import React from 'react';
import './SingleActivity.css';

const SingleActivity = ({data}) => {
    console.log(data.img);
    const {activity_name, img, time} = data;
    return (
        <div>
            <div className='card'>
            <img src={img} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{activity_name}</h5>
                <p className="card-text">Time: {time}</p>
                <button className='btn btn-primary'>Add To List</button>
            </div>
            </div>
        </div>
    );
};

export default SingleActivity;

//  style="width: 18rem;"