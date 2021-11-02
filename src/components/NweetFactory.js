import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { db, storage, collection, addDoc, setDoc, ref, uploadString, getDownloadURL, doc, getDoc } from 'fbase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const NweetFactory = ({ userObj }) => {
    const [nweet, setNweet] = useState('');
    const [attachment, setAttachment] = useState('');
    
    const onSubmit = async (e) => {
        e.preventDefault();

        let responseUrl = '';
        if (attachment !== '') {
            const fileRef = ref(storage, `${userObj.uid}/${uuidv4()}`);
            await uploadString(fileRef, attachment, 'data_url');
            responseUrl = await getDownloadURL(fileRef);
        }
        await addDoc(collection(db, 'nweets'), {
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl: responseUrl,
        });
        const userDocSnap = await getDoc(doc(db, 'users', userObj.uid));
        if (!userDocSnap.exists()) {
            await setDoc(doc(db, 'users', userObj.uid), {
                userName: userObj.displayName,
                userImage: userObj.user.photoURL,
            });
        }
        setNweet('');
        setAttachment('');       
    };

    const onChange = (e) => {
        const {target: {value}} = e;
        setNweet(value);
    };

    const onFileChange = (e) => {
        const {target: {files}} = e;
        const file = files[0];
        const reader = new FileReader();
        const onLoadendReader = (finishedevent) => {
            const {currentTarget: { result }} = finishedevent;
            setAttachment(result);
            reader.removeEventListener('loadend', onLoadendReader);
        }
        
        if (file) {
            reader.addEventListener('loadend', onLoadendReader);
            reader.readAsDataURL(file);
        }
    };

    const onClearAttachment = (e) => {
        e.preventDefault();
        setAttachment(null);
    };

    return (
        <form onSubmit={onSubmit} className="nweet-maker">
            <div className="nweet-maker__area">
                <div className="nweet-maker__content">
                    <input onChange={onChange} value={nweet} type="text" placeholder="What's on your mind?" maxLength={120} />
                </div>
                <div className="nweet-maker__btns">
                    <label htmlFor="nweet-maker__inp-imgupload">{attachment ? 'Change Image' : 'Upload Image'}</label>
                    <input onChange={onFileChange} id="nweet-maker__inp-imgupload" type="file" accept="image/*" className="blind" />
                    <button type="submit">Nweet</button>
                </div>
            </div>
            {attachment && (
                <div className="nweet-maker__imgs">
                    <p>Image Attachment : </p>
                    <div className="nweet-maker__img">
                        <img src={attachment} alt="" />
                        <button onClick={onClearAttachment}><FontAwesomeIcon icon={faTimesCircle} color="#fff" size="lg" /> <span className="blind">Cancel Upload</span></button>
                    </div>
                </div>
            )}
        </form>
    );
};

export default NweetFactory;