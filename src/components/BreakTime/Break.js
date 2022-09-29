import React from 'react';
import './Break.css';

const Break = (props) => {

    return (
        <div className='break-section'>

            <h2>Select Your Break Time</h2>
            <div className='break-container'>
                <div className='break'>
                    <button onClick={() => props.selectBreakHandler(5)}>05m.</button>
                </div>
                <div className='break'>
                    <button onClick={() => props.selectBreakHandler(10)}>10m.</button>
                </div>
                <div className='break'>
                    <button onClick={() => props.selectBreakHandler(15)}>15m.</button>
                </div>
                <div className='break'>
                    <button onClick={() => props.selectBreakHandler(20)}>20m.</button>
                </div>
                <div className='break'>
                    <button onClick={() => props.selectBreakHandler(30)}>30m.</button>
                </div>
            </div>
        </div>
    );
};

export default Break;