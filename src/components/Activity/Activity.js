import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleActivity from '../SingleActivity/SingleActivity';

const Activity = () => {
    const [activity, setActivity] = useState([]);
    // console.log(activity);

    useEffect(()=> {
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivity(data))
    }, [])

    return (
        <div>
            <h2>activity here</h2>
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