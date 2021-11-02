import React, { useState, useEffect } from "react";
import { db, storage, doc, deleteDoc, updateDoc, ref, deleteObject, query, getDoc} from 'fbase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const [user, setUser] = useState({ userName:'', userImage:'' })

    useEffect(() => {   
        (async () => {
            const userDocSnap = await getDoc(doc(db, 'users', nweetObj.creatorId))
            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                setUser({
                    userName: userData.userName,
                    userImage: userData.userImage,
                });
            }
        })();
    }, [])
    
    const onDeleteClick = () => {
        const confirmed = window.confirm("Are you sure you want to delete this nweet?");
        if (confirmed) {
            deleteDoc(doc(db, 'nweets', nweetObj.id));
            if (nweetObj.attachmentUrl !== '') {
                deleteObject(ref(storage, nweetObj.attachmentUrl));
            }
        }
    };

    const toggleEditing = () => setEditing(prev => !prev);

    const onChange = (e) => {
        const {target: {value}} = e;
        setNewNweet(value);
    };

    const calcDate = () => {
        const createdDate = new Date(nweetObj.createdAt).toLocaleString();
        return createdDate;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await updateDoc(doc(db, 'nweets', nweetObj.id), {
            text: newNweet
        });
        setEditing(false);
    };

    return (
        <div className="nweet">
            {editing ? (
                <form onSubmit={onSubmit} className="nweet__edit">
                    <input type="text" placeholder="Edit your nweet" value={newNweet} onChange={onChange} required />
                    <input type="submit" value="Update" className="nweet__edit-update" />
                    <button onClick={toggleEditing} className="nweet__edit-cancel">Cancel</button>
                </form>
            ) : (
                <div className="nweet__item">
                    <div className="nweet__item-box">
                        <div className="nweet__item-profile">
                            <div className="nweet__item-profile-img">
                                {Boolean(user.userImage) ? (
                                    <img  src={user.userImage} alt="" />
                                ) : (
                                    <FontAwesomeIcon icon={faUser} color="#000" />
                                )}
                            </div>
                            <p className="nweet__item-profile-name">{user.userName}</p>
                            <p className="nweet__item-profile-date">{calcDate()}</p>
                        </div>
                        <div className="nweet__item-content">
                            <p className="nweet__item-text">{nweetObj.text}</p>
                            {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl} className="nweet__item-img" alt="" />}
                        </div>
                    </div>
                    {isOwner && (
                        <div className="nweet__item-btns">
                            <button onClick={toggleEditing}><FontAwesomeIcon icon={faEdit} /><span className="blind">Edit</span></button>
                            <button onClick={onDeleteClick}><FontAwesomeIcon icon={faTrashAlt} /><span className="blind">Delete</span></button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Nweet;