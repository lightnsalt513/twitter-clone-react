import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { auth, getDownloadURL, ref, storage, updateProfile, uploadString, getDoc, deleteObject, doc, db } from 'fbase';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Profile = ({ userObj, refreshUser }) => {
    const history = useHistory();
    const [isEdit, setIsEdit] = useState(false);
    const [newDisplayName, setNewDisplayName] = useState((userObj.displayName || ''));
    const [profileImg, setProfileImg] = useState(null);
    const [newProfileImg, setNewProfileImg] = useState(null)
    const inpRef = useRef();

    useEffect(() => {
        (async () => {
            const userDocSnap = await getDoc(doc(db, 'users', userObj.uid));
            if (userDocSnap.exists()) {
                const { userImage } = userDocSnap.data();
                setProfileImg(userImage);
                setNewProfileImg(userImage);
            }
        })();
    }, [])

    useEffect(() => {
        if (isEdit) {
            inpRef.current.focus();
        }
    }, [isEdit])

    const onLogOutClick = () => {
        auth.signOut();
        history.push('/');
    };

    const onChange = (e) => {
        const {target: {value}} = e;
        setNewDisplayName(value);
    };

    const onFileChange = (e) => {
        const {target: {files}} = e;
        const file = files[0];
        const reader = new FileReader();
        const onLoadendReader = (finishedevent) => {
            const {currentTarget: {result}} = finishedevent;
            setNewProfileImg(result);
            reader.removeEventListener('loadend', onLoadendReader);
        };
        reader.addEventListener('loadend', onLoadendReader);
        
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const onDeleteImageClick = () => {
        if (newProfileImg !== '') {
            setNewProfileImg('');
        }
    };

    const onCancelClick = () => {
        setNewProfileImg(profileImg);
        setIsEdit(false);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        let newProfileObj = {};
        if (newProfileImg !== profileImg) {
            if (newProfileImg === '') {
                newProfileObj.photoURL = '';
            } else {
                const fileRef = ref(storage, `${userObj.uid}/profile/${uuidv4()}`);
                await uploadString(fileRef, newProfileImg, 'data_url');
                const responseUrl = await getDownloadURL(fileRef);
                newProfileObj.photoURL = responseUrl;
            }
            if (Boolean(profileImg)) {
                deleteObject(ref(storage, profileImg));
            }
            setProfileImg(newProfileObj.photoURL);
        }
        if (userObj.displayName !== newDisplayName) {
            newProfileObj.displayName = newDisplayName;
        }
        if (newProfileImg !== profileImg || userObj.displayName !== newDisplayName) {
            await updateProfile(userObj.user, newProfileObj);
            refreshUser();
        }
        setIsEdit(false);
    };

    return (
        <div className="profile">
            <div className="profile__info">
                <div className="profile__img">
                    <div className="profile__img-display">
                        {Boolean(newProfileImg) ? (
                            <img src={newProfileImg} alt="profile" />
                        ) : (
                            <FontAwesomeIcon icon={faUser} color="#000" />
                        )}
                    </div>
                    {isEdit && (
                        <div className="profile__img-edit">
                            <label htmlFor="profile__inp-imgupload"><span className="blind">Edit Profile Image</span></label>
                            <input onChange={onFileChange} type="file" accept="image/*" id="profile__inp-imgupload" className="blind" />
                            {newProfileImg && <button onClick={onDeleteImageClick}><FontAwesomeIcon icon={faTrashAlt} /><span className="blind">Remove Image</span></button>}
                        </div>
                    )}
                </div>
                {isEdit ? (
                    <input onChange={onChange} ref={inpRef} className="profile__input-name" type="text" placeholder="Display name" value={newDisplayName} />
                ) : (
                    <h2>{userObj.displayName}'s Profile</h2>
                )}
            </div>
            <div className="profile__control">
                {isEdit ? (
                    <>
                        <button onClick={onSubmit}>Done</button>
                        <button onClick={onCancelClick} type="button">Cancel</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => setIsEdit(true)} type="button">Edit Profile</button>
                        <button onClick={onLogOutClick} type="button">Log Out</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Profile;