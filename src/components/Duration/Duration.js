import React from 'react';
import './Duration.css';
const Duration = (props) => {
    let totalTimes = 0;
    let currentBreak = 0;
    return (
        <div className='duration-section'>
            {
                props.times.map(i => {
                    totalTimes = totalTimes + parseInt(i.time);
                })
            }
            {
                props.breaks.map(breakTime => {
                    currentBreak = breakTime;
                })
            }
            <h2>Exercise Duration:</h2>
            <div>
                <div className='duration-flex'>
                    <div className='title-duration'>
                        <h4>Total Duration:</h4>
                    </div>
                    <div className='duration-time'>
                        <h4><span>{totalTimes} min.</span></h4>
                    </div>
                </div>
                <div className='duration-flex'>
                    <div className='title-duration'>
                        <h4>Break Duration:</h4>
                    </div>
                    <div className='duration-time'>
                        <h4><span>{currentBreak} min.</span></h4>
                    </div>
                </div>
            </div>
            <button>Complete Exercise</button>
        </div>
    );
};

export default Duration;