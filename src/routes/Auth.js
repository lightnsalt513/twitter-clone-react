import React from 'react';
import { auth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'fbase';
import AuthForm from 'components/AuthForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';

const Auth = ({ refreshUser }) => {
    const onSocialClick = async (e) => {
        const {currentTarget: {name}} = e;
        let provider;
        if (name === 'google') {
            provider = new GoogleAuthProvider();
        } else if (name === 'github') {
            provider = new GithubAuthProvider();
            provider.addScope('repo');
        }
        try {
            await signInWithPopup(auth, provider);
        } catch (err) {
            alert(err.message);
        }
    };
    
    return (
        <div className="auth">
            <div className="auth__inner">
                <AuthForm refreshUser={refreshUser} />
                <div className="auth__sociallogin">
                    <div className="auth__sociallogin-box">
                        <button onClick={onSocialClick} name="google"><span>Continue with Google</span> <FontAwesomeIcon icon={faGoogle} /></button>
                        <button onClick={onSocialClick} name="github"><span>Continue with Github</span> <FontAwesomeIcon icon={faGithub} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;