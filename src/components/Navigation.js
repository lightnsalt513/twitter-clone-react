import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ userObj }) => {
    return (
        <nav className="header">
            <ul>
                <li>
                    <Link to="/" title="Go to Home"><FontAwesomeIcon icon={faHome} color="#fff" /> <span className="blind">Home</span></Link>
                </li>
                <li>
                    <Link to="/profile" title="Go to My Profile"><FontAwesomeIcon icon={faUser} color="#fff" /><span className="blind">{userObj.displayName} Profile</span></Link>
                </li>
            </ul>
        </nav>
    );  
};

export default Navigation;