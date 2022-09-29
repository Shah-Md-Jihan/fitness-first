import React from 'react';
import './Duration.css';
const Duration = () => {
    return (
        <div className='duration-section'>
            <h2>Exercise Duration:</h2>
            <div>
                <div className='duration-flex'>
                    <div className='title-duration'>
                        <h4>Total Duration:</h4>
                    </div>
                    <div className='duration-time'>
                        <h4><span>0 min.</span></h4>
                    </div>
                </div>
                <div className='duration-flex'>
                    <div className='title-duration'>
                        <h4>Total Break:</h4>
                    </div>
                    <div className='duration-time'>
                        <h4><span>0 min.</span></h4>
                    </div>
                </div>
            </div>
            <button>Complete Exercise</button>
        </div>
    );
};

export default Duration;