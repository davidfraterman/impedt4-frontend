import App from "../../App";
import React, { useState } from "react";

import email from './images/email.png';
import password from './images/password.png';

import { Icon } from '@iconify/react';

import './login.css';

function Login(){

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

    const errors = {
     uname: "invalid username",
     pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    
    var isUsernameValid = false;
    var isPasswordValid = false;

    var { uname, pass } = document.forms[0];
    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        isPasswordValid = true;
        isUsernameValid = true;
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }


    if(isPasswordValid && isUsernameValid == true){
        ROUTE.HOME
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

 


    return (
        <section className="main-login">
            <form className="sub-main-login" onSubmit={handleSubmit}>
                <section>
                    <section className="titleContainer">
                        <Icon icon="bi:person-fill" color="var(--clr-black)" height="40" />
                        <h1 className="login-titel">Log in</h1>
                    </section>
                </section>

                <section className="inputSection">
                    <label htmlFor="email">E-mail</label>
                    <Icon icon="fluent:mail-16-filled" color="var(--clr-main)" height="22" className="inputIcon" />
                    <input name="uname" id="email" type="text" autoComplete="on" placeholder="john@example.com" className="name" required/>
                    {renderErrorMessage("uname")}
                </section>
                <section className="inputSection">
                    <label htmlFor="password">Wachtwoord</label>
                    <Icon icon="bxs:lock" color="var(--clr-main)" height="22" className="inputIcon" />
                    <input name="pass" id="password" type="password" autoComplete="on" className="name"/>
                    {renderErrorMessage("pass")}
                </section>
                <input type="submit" className="login-button"Log in />
            </form>

        </section>
    );
}

export default Login;