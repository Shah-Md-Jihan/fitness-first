import React, { useEffect, useState } from 'react';
import Break from '../BreakTime/Break';
import Duration from '../Duration/Duration';
import Excercise from '../Excercise/Excercise';
import Profile from '../Profile/Profile';
import './Main.css';

const Main = () => {
    const [exercises, setExercise] = useState([]);
    const [profileInfos, setProfileInfos] = useState([]);
    const [times, setTimes] = useState([]);
    const [breaks, setBreaks] = useState([]);

    const selectHandler = (props) => {
        const newTimes = [...times, props];
        setTimes(newTimes);
    }
    const selectBreakHandler = (props) => {
        const newBreaks = [...breaks, props];
        setBreaks(newBreaks);
    }
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
                    exercises.map(exercise => <Excercise key={exercise.id} exercise={exercise} selectHandler={selectHandler}></Excercise>)
                }

            </div>
            <div className="sidebar">

                {
                    profileInfos.map(profileInfo => <Profile key={profileInfo.id} profileInfo={profileInfo}></Profile>)

                }

                <Break selectBreakHandler={selectBreakHandler}></Break>
                <Duration times={times} breaks={breaks}></Duration>
            </div>
        </div>
    );
};

export default Main;