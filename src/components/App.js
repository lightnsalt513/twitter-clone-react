import React, { useState, useEffect } from 'react';
import AppRouter from 'components/Router';
import { auth, db, doc, setDoc } from 'fbase';

const htmlElem = document.documentElement;

const App = () => {
    const [init, setInit] = useState(false);
    const [userObj, setUserObj] = useState({})
    
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserObj({
                    displayName: user.displayName,
                    uid: user.uid,
                    user: user,
                });
            } else {
                setUserObj(null);
            }
            setInit(true);
        })
    }, []);

    useEffect(() => {
        htmlElem.classList.toggle('is-loggedin', Boolean(userObj));
    }, [userObj]);

    const refreshUser = () => {
        const user = auth.currentUser;
        setUserObj({
            displayName: user.displayName,
            uid: user.uid,
            user: user,
        });
        const userRef = doc(db, 'users', user.uid);
        setDoc(userRef, {
            userName: user.displayName,
            userImage: user.photoURL,
        }, { merge: true });
        // Another option is to use Object.assign() method which will make React see that a new object has come and render
        // setUserObj(Object.assign({}, user))
    };
    
    return (
        <div className="app">
            {init ? <AppRouter userObj={userObj} isLoggedIn={Boolean(userObj)} refreshUser={refreshUser} /> : "initializing"}
        </div>
    );
}

export default App;