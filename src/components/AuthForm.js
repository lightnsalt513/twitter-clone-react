import React, { useState } from 'react';
import { auth } from 'fbase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState('');

    const onChange = (e) => {
        const {target: {name, value}} = e;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            if (newAccount) {
                await createUserWithEmailAndPassword(auth, email, password);
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