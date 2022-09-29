import React from 'react';
import './Break.css';

const Break = () => {
    return (
        <div className='break-section'>
            <h2>Select Your Break Time</h2>
            <div className='break-container'>
                <div className='break'>
                    <span>05m.</span>
                </div>
                <div className='break'>
                    <span>10m.</span>
                </div>
                <div className='break'>
                    <span>15m.</span>
                </div>
                <div className='break'>
                    <span>20m.</span>
                </div>
                <div className='break'>
                    <span>30m.</span>
                </div>
            </div>
        </div>
    );
};

export default Break;