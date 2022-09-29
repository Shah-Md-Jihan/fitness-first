import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import './Excercise.css';

const Excercise = (props) => {
    const { name, detail, img, rules, time } = props.exercise;

    return (
        <div className='single-excercise-container'>
            <img src={img} alt="" />
            <div className='details'>
                <h2>{name}</h2>
                <p>{detail.slice(0, 80)}...<a href='/'>more</a></p>
            </div>
            <div className='rules'>
                <h4><FontAwesomeIcon icon={faClock}></FontAwesomeIcon> {time}</h4>
                <h3>Rules:</h3>
                {
                    rules.map(rule => <h6>{rule}</h6>)
                }
            </div>
            <div className='ex-button-container'>
                <button className='ex-button' onClick={() => props.selectHandler(props.exercise)}>Add to Your List</button>
            </div>
        </div>
    );
};

export default Excercise;