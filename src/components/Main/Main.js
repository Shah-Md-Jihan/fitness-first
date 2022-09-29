import React, { useEffect, useState } from 'react';
import Break from '../BreakTime/Break';
import Excercise from '../Excercise/Excercise';
import Profile from '../Profile/Profile';
import './Main.css';

const Main = () => {
    const [exercises, setExercise] = useState([]);
    const [profileInfos, setProfileInfos] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setExercise(data))
    }, []);

    useEffect(() => {
        fetch('fakeuser.json')
            .then(res => res.json())
            .then(data => setProfileInfos(data))
    }, []);

    return (
        <div className='main-container'>
            <div className="exercise-container">
                {
                    exercises.map(exercise => <Excercise key={exercise.id} exercise={exercise}></Excercise>)
                }

            </div>
            <div className="sidebar">
                {
                    profileInfos.map(profileInfo => <Profile key={profileInfo.id} profileInfo={profileInfo}></Profile>)

                }
                <Break></Break>
            </div>
        </div>
    );
};

export default Main;