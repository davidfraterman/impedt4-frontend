import App from "../../App";
import { Link } from 'react-router-dom';
import React, { useState } from "react";

import { Icon } from '@iconify/react';

import './login.css';

function Login() {

  // neppe login gegevens
  const [fakeLogin, setFakeLogin] = useState({
    email: "test@eindhoven.nl",
    password: "testtest"
  });

  // formulier state
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  // errors
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // elke keer dat er iets veranderd in een input wordt deze functie aangeroepen
  const handleChange = (event) => {
    // name is de 'name=""' van de input
    // value is de waarde van de input
    const { name, value } = event.target;

    // zet de waarde van bijbehorende name in de formValues state
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  // bij submit
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // zet formIsValid op de waarde van de validatie functie (true of false)
    let formIsValid = validateForm();
    
    // als er geen errors zijn, log de gebruiker in
    if (formIsValid === true) {
      // redirect naar de homepage
      window.location.href = '/';
    }
  }
  
  // valideer inputs
  const validateForm = () => {
    let isValid = true;
    // reset errors
    setEmailError('');
    setPasswordError('');

    // kijkt of email en ww gelijk zijn aan dummy data
    const isEmailCorrect = (formValues.email === fakeLogin.email);
    const isPasswordCorrect = (formValues.password === fakeLogin.password);

    if (!isEmailCorrect) {
      setEmailError('Onjuist emailadres');
      isValid = false;
    }
    if (!isPasswordCorrect) {
      setPasswordError('Onjuist wachtwoord');
      isValid = false;
    }

    return isValid;
  }

  return (
    <section className="main-login">
      <form className="sub-main-login" onSubmit={handleSubmit}>
        <section>
          <section className="loginTitleContainer">
            <Icon icon="bi:person-fill" color="var(--clr-black)" height="40" />
            <h1 className="login-titel">Log in</h1>
          </section>
        </section>

        <section className="inputSection">
          <label htmlFor="email">E-mail</label>
          <Icon icon="fluent:mail-16-filled" color="var(--clr-main)" height="22" className="inputIcon" />
          <input onChange={handleChange} name="email" id="email" type="text" autoComplete="on" placeholder="john@example.com" className="name" />
        </section>
        <section className="inputSection">
          <label htmlFor="password">Wachtwoord</label>
          <Icon icon="bxs:lock" color="var(--clr-main)" height="22" className="inputIcon" />
          <input  onChange={handleChange} name="password" id="password" type="password" autoComplete="on" className="name" />
        </section>
        <button type="submit" className="login-button">
          Log in
        </button>

        <section className="loginErrorMessages">
          {emailError ?
            <p className="loginErrorMsg"><Icon icon="bxs:error-alt" color="var(--clr-main)" height="20" />{emailError}</p>
            : null}

          {passwordError ?
            <p className="loginErrorMsg"><Icon icon="bxs:error-alt" color="var(--clr-main)" height="20" />{passwordError}</p>
            : null}
        </section>

      </form>

    </section>
  );
}

export default Login;
