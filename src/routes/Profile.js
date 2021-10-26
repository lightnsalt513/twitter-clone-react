import React, { useState } from 'react';
import { auth } from 'fbase';
import { useHistory } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

const Profile = ({ userObj, refreshUser }) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState((userObj.displayName || ''));

    const onLogOutClick = () => {
        auth.signOut();
        history.push('/');
    };

    const onChange = (e) => {
        const {target: {value}} = e;
        setNewDisplayName(value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (userObj.displayName !== newDisplayName) {
            await updateProfile(userObj.user, {
                displayName: newDisplayName
            });
            refreshUser();
        }
    };

    return (
        <div className="profile">
            <div className="profile__info">
                <h2>{userObj.displayName}'s Profile</h2>
            </div>
            <form onSubmit={onSubmit} className="profile__form">
                <input onChange={onChange} className="profile__form-input" type="text" placeholder="Display name" value={newDisplayName} />
                <button className="profile__form-submit" type="submit">Update Name</button>
            </form>
            <div className="profile__control">
                <button onClick={onLogOutClick}>Log Out</button>
            </div>
        </div>
    );
};

export default Profile;