import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Profile.css';

const Profile = (props) => {
    const { name, location, img, height, weight, Age } = props.profileInfo;

    return (
        <div className='profile-container'>
            <img className='profile-pic' src={img} alt="" />
            <h5>{name}</h5>
            <p><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
            <div className='body-measurement-container'>
                <div>
                    <p>{weight}</p>
                    <h4>Weight</h4>
                </div>
                <div>
                    <p>{height}</p>
                    <h4>Height</h4>
                </div>
                <div>
                    <p>{Age}</p>
                    <h4>Year of Age</h4>
                </div>
            </div>

        </div>
    );
};

export default Profile;