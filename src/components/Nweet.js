import React, { useState, useEffect } from "react";
import { db, storage, doc, deleteDoc, updateDoc, ref, deleteObject, getDoc, query, collection, getDocs, addDoc, setDoc, orderBy, onSnapshot } from 'fbase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faEdit, faThumbsUp, faTrashAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import Comment from 'components/Comment';
import CommentFactory from 'components/CommentFactory';

const Nweet = ({ nweetObj, userId }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const [user, setUser] = useState({ userName:'', userImage:'' });
    const [isOwner, setisOwner] = useState(false)
    const [likesCount, setLikesCount] = useState(0);
    const [ownerLike, setOwnerLike] = useState(false);
    const [comments, setComments] = useState([]);
    const [commentsCount, setCommentsCount] = useState(0);
    const [isCommentsActive, setIsCommentsActive] = useState(false);
    const [commentsInitialized, setCommentsInitialized] = useState(false);

    useEffect(() => {   
        if (nweetObj.creatorId === userId) setisOwner(true);

        const commentsRef = query(collection(db, `nweets/${nweetObj.id}/comments`), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(commentsRef, snapshot => {
            let commentArray = [];
            let commentCount = 0;
            snapshot.forEach(doc => {
                const commentObj = {
                    ...doc.data(),
                    id: doc.id
                }
                commentArray.push(commentObj);
                commentCount++;
            });
            setComments(commentArray);
            setCommentsCount(commentCount);
        });

        (async () => {
            const userDocSnap = await getDoc(doc(db, 'users', nweetObj.creatorId));
            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                setUser({
                    userName: userData.userName,
                    userImage: userData.userImage,
                });
            }
        })();
        
        (async () => {
            const likeQuery = query(collection(db, `nweets/${nweetObj.id}/likes`));
            const likeSnap = await getDocs(likeQuery);
            let count = 0;
            if (!likeSnap.empty) {
                likeSnap.forEach((doc) => {
                    if (doc.id === userId) setOwnerLike(true);
                    count++;
                });
            }
            setLikesCount(count);
        })();

        return () => {
            unsubscribe();
        };
    }, []);
    
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

    const onLikeClick = async () => {
        if (ownerLike) {
            await deleteDoc(doc(db, `nweets/${nweetObj.id}/likes`, userId));
            setOwnerLike(false);
            setLikesCount(prev => prev - 1);
        } else {
            await setDoc(doc(db, `nweets/${nweetObj.id}/likes`, userId), {});
            setOwnerLike(true);
            setLikesCount(prev => prev + 1);
        }
    };

    const onCommentClick = () => {
        if (!commentsInitialized) setCommentsInitialized(true);
        setIsCommentsActive(!isCommentsActive);
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
                        <div className="nweet__item-menu">
                            <button className={'nweet__item-menu-comments' + (isCommentsActive ? ' is-active' : '')} onClick={onCommentClick}><FontAwesomeIcon icon={faComment} />{commentsCount}<span className="blind">Comments</span></button>
                            <button className={'nweet__item-menu-likes' + (ownerLike ? ' is-active' : '')} onClick={onLikeClick}><FontAwesomeIcon icon={faThumbsUp} />{likesCount}<span className="blind">Likes</span></button>
                        </div>
                    </div>
                    {isOwner && (
                        <div className="nweet__item-btns">
                            <button onClick={toggleEditing}><FontAwesomeIcon icon={faEdit} /><span className="blind">Edit</span></button>
                            <button onClick={onDeleteClick}><FontAwesomeIcon icon={faTrashAlt} /><span className="blind">Delete</span></button>
                        </div>
                    )}
                    <div className={'nweet__item-comments' + (isCommentsActive ? ' is-open' : '')}>
                        <CommentFactory nweetDbPath={`nweets/${nweetObj.id}`} userId={userId} />
                        {commentsInitialized && comments.map(comment => {
                            return <Comment key={comment.id} commentObj={comment} />
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Nweet;