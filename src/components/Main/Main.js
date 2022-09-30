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
            <div className='question-container'>
                <h1>Some Answers of Questions About React.</h1>
                <div>
                    <h2>How Does React Work</h2>
                    <h4>Ans: React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. React has a few different kinds of components, but we'll start with React.Component subclasses: class ShoppingList extends React.</h4>
                </div>
                <div>
                    <h2>what is the difference between state and props</h2>
                    <h4>Ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</h4>
                </div>
                <div>
                    <h2>what are the reasons for the use effect without the reason of data load?</h2>
                    <h4>Ans:<br></br>
                        1.Running on state change: validating input field.<br></br>
                        2.Running on state change: live filtering.<br></br>
                        3.Running on state change: trigger animation on new array value.<br></br>
                        4.Running on props change: update paragraph list on fetched API data update.</h4>
                </div>
            </div>
        </div>
    );
};

export default Main;