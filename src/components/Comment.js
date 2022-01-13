import React, { useState, useEffect } from 'react';
import { db, doc, getDoc } from 'fbase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Comment = ({ commentObj }) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        (async () => {
            const userDocSnap = await getDoc(doc(db, 'users', commentObj.creatorId));
            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                setUser({
                    userName: userData.userName,
                    userImage: userData.userImage,
                });
            }
        })();
    });
    
    return (
        <div className="comment">
            <div className="comment__thumbnail">
                <div className="comment__img">
                    {user.userImage ? (
                        <img src={user.userImage} alt="" />
                    ) : (
                        <FontAwesomeIcon icon={faUser} color="#000" />
                    )}
                </div>
                <div className="comment__user">{user.userName} : </div>
            </div>
            <div className="comment__text">{commentObj.text}</div>
        </div>
    );
};

export default Comment;