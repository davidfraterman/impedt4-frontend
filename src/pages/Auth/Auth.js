import App from "../../App";
import React from "react";

import { Link } from 'react-router-dom';

import profile from './images/pic.png';
import email from './images/email.png';
import password from './images/password.png';

import './login.css';

function Login(){
    return (
        <div className="main-login">
            <div className="sub-main-login">
                <div>
                    <div className="imgs">
                            <img  src={profile} alt="profile" className="profile"/>
                            <h1 className="login-titel">Log in</h1>

                    </div>
                </div>

                <div>
                    <h1 className="email-titel">E-mail</h1>
                    <img src={email} alt="email" className="email"/>
                    <input type="text" placeholder="john@example.com" className="name"/>
                </div>
                <div>
                    <h1 className="email-titel">Wachtwoord</h1>
                    <img src={password} alt="password" className="password"/>
                    <input type="password" placeholder="wachtwoord" className="name"/>
                </div>
                <Link to="/">
                <button className="login-button">Log in</button>
                </Link>
            </div>

        </div>
    );
}

export default Login;
