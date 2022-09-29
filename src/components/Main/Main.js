import React, { useEffect, useState } from 'react';
import Excercise from '../Excercise/Excercise';
import './Main.css';

const Main = () => {
    const [exercises, setExercise] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setExercise(data))
    }, [])
    return (
        <div className='main-container'>
            <div className="exercise-container">
                {
                    exercises.map(exercise => <Excercise key={exercise.id} exercise={exercise}></Excercise>)
                }

            </div>
            <div className="sidebar">
                <h1>This is sidebar</h1>
            </div>
        </div>
    );
};

export default Main;