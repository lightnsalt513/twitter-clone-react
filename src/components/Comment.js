import React from 'react';

const Comment = ({ commentObj }) => {
    return (
        <div className="comment">
            {commentObj.text}
        </div>
    );
};

export default Comment;