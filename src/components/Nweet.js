import React, { useState } from "react";
import { db, storage, doc, deleteDoc, updateDoc, ref, deleteObject } from 'fbase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);

    const onDeleteClick = () => {
        const confirmed = window.confirm("Are you sure you want to delete this nweet?");
        if (confirmed) {
            deleteDoc(doc(db, 'nweets', nweetObj.id));
            if (nweetObj.attachmentUrl !== "") {
                deleteObject(ref(storage, nweetObj.attachmentUrl));
            }
        }
    };

    const toggleEditing = () => setEditing(prev => !prev);

    const onChange = (e) => {
        const {target: {value}} = e;
        setNewNweet(value);
    }

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
                <>
                    <form onSubmit={onSubmit} className="nweet__edit">
                        <input type="text" placeholder="Edit your nweet" value={newNweet} onChange={onChange} required />
                        <input type="submit" value="Update" className="nweet__edit-update" />
                        <button onClick={toggleEditing} className="nweet__edit-cancel">Cancel</button>
                    </form>
                </>
            ) : (
                <div className="nweet__item">
                    <div className="nweet__item-content">
                        <p className="nweet__item-text">{nweetObj.text}</p>
                        {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl} className="nweet__item-img" alt="" />}
                    </div>
                    {isOwner && <div className="nweet__item-btns">
                        <button onClick={onDeleteClick}><FontAwesomeIcon icon={faTrashAlt} /><span className="blind">Delete</span></button>
                        <button onClick={toggleEditing}><FontAwesomeIcon icon={faEdit} /><span className="blind">Edit</span></button>
                    </div>}
                </div>
            )}
        </div>
    );
};

export default Nweet;