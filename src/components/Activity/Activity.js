import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleActivity from '../SingleActivity/SingleActivity';
import './Activity.css';

const Activity = () => {
    const [activity, setActivity] = useState([]);
    // console.log(activity);

    useEffect(()=> {
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivity(data))
    }, [])

    return (
        <div className='activity-container'>
            {
                activity.map(pd => <SingleActivity 
                    key={pd.id}
                    data={pd}
                    ></SingleActivity>)
            }
        </div>
    );
};

export default Activity;