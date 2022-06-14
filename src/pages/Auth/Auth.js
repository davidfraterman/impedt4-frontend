import App from "../../App";
import React from "react";

import email from './images/email.png';
import password from './images/password.png';

import { Icon } from '@iconify/react';

import './login.css';

function Login(){
    return (
        <section className="main-login">
            <form className="sub-main-login">
                <section>
                    <section className="titleContainer">
                        <Icon icon="bi:person-fill" color="var(--clr-black)" height="40" />
                        <h1 className="login-titel">Log in</h1>
                    </section>
                </section>

                <section className="inputSection">
                    <label htmlFor="email">E-mail</label>
                    <Icon icon="fluent:mail-16-filled" color="var(--clr-main)" height="22" className="inputIcon" />
                    <input id="email" type="text" autoComplete="on" placeholder="john@example.com" className="name"/>
                </section>
                <section className="inputSection">
                    <label htmlFor="password">Wachtwoord</label>
                    <Icon icon="bxs:lock" color="var(--clr-main)" height="22" className="inputIcon" />
                    <input id="password" type="password" autoComplete="on" className="name"/>
                </section>
                <button type="submit" className="login-button">Log in</button>
            </form>

        </section>
    );
}

export default Login;