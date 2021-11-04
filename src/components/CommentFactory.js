import { addDoc, collection, db } from 'fbase';
import React, { useState } from 'react';

const CommentFactory = ({ nweetDbPath, userId }) => {
    const [comment, setComment] = useState('');
    
    const onChange = (e) => {
        const {target: {value}} = e;
        setComment(value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (comment !== '') {
            await addDoc(collection(db, `${nweetDbPath}/comments`), {
                text: comment,
                creatorId: userId,
                createdAt: Date.now()
            });
            setComment('');
        }
    };
    
    return (
        <div className="comment-maker">
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={comment} type="text" />
                <button>Add Comment</button>
            </form>
        </div>
    );
};

export default CommentFactory;