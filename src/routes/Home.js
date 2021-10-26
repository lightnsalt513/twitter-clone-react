import React, { useState, useEffect } from 'react';
import { db, collection, onSnapshot, query, orderBy } from 'fbase';
import Nweet from 'components/Nweet';
import NweetFactory from 'components/NweetFactory';

const Home = ({ userObj }) => {
    const [nweets, setNweets] = useState([]);

    useEffect(() => {
        const nweetsRef = query(collection(db, 'nweets'), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(nweetsRef, snapshot => {
            let nweetArray = [];
            
            snapshot.forEach(doc => {
                const nweetObj = {
                    ...doc.data(),
                    id: doc.id,
                }
                nweetArray.push(nweetObj);
            });
            setNweets(nweetArray);
        });
        return () => {
            unsubscribe();
        }
    }, []);
    
    return (
        <div>
            <NweetFactory userObj={userObj} />
            <div>
                {nweets.map(nweet => <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid} />)}
            </div>
        </div>
    );
};

export default Home;