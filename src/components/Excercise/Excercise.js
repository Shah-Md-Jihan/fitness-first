import React from 'react';
import './Excercise.css';

const Excercise = (props) => {
    const { name, detail, img, rules } = props.exercise;

    return (
        <div className='single-excercise-container'>
            <img src={img} alt="" />
            <div className='details'>
                <h2>{name}</h2>
                <p>{detail.slice(0, 80)}...<a href='/'>more</a></p>
            </div>
            <div className='rules'>
                <h3>Rules:</h3>
                {
                    rules.map(rule => <h6>{rule}</h6>)
                }
            </div>
            <div className='ex-button-container'>
                <button className='ex-button'>Add to Your List</button>
            </div>
        </div>
    );
};

export default Excercise;