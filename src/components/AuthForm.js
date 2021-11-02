import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'fbase';

const AuthForm = ({ refreshUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newAccount, setNewAccount] = useState(true);
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const onChange = (e) => {
        const {target: {name, value}} = e;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'username') {
            setUsername(value);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            if (newAccount) {
                const userObj = await createUserWithEmailAndPassword(auth, email, password);
                await updateProfile(userObj.user, {
                    displayName: username
                })
                refreshUser();
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
        } catch(err) {
            let errMessage = err.message.replace('Firebase: ', '');
            setError(errMessage);
        }
    };

    const toggleAccount = (e) => {
        e.preventDefault();
        setNewAccount(prev => !prev)
    };

    return (
        <div className="authform">
            <form onSubmit={onSubmit}>
                {newAccount && 
                    <input name="username" type="text" placeholder="User name" required value={username} onChange={onChange} />
                }
                <input name="email" type="text" placeholder="Email" required value={email} onChange={onChange} />
                <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange} />
                <input type="submit" value={newAccount ? "Sign Up" : "Log In"} />
                <div className="authform__error">
                    {error}
                </div>
            </form>
            <button onClick={toggleAccount} className="authform__togglebtn">{newAccount ? "Log In" : "Create Account"}</button>
        </div>
    );
};

export default AuthForm;