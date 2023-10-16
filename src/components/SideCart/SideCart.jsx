import React, { useEffect, useState } from 'react';

const SideCart = ({watchTime}) => {
    const [time, setTime] = useState(watchTime);
    useEffect(() =>{
        const getWatchTime = localStorage.getItem("watchTime");
        setTime(getWatchTime)
    },[watchTime])
    return (
        <div>
            <h1 className='text-center text-4xl font-semibold'>My cart</h1>
            <div className='mt-5 text-center'>
                <p>total watch time</p>
                <input type="text" name='watch time' value={time} disabled />
            </div>
        </div>
    );
};

export default SideCart;