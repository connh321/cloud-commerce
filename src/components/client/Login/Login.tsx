'use client'
import React, { useState } from 'react'
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./Login.module.scss";

const Login = () => {
  const [type, setType] = useState('login');  // 'login' or 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Handle email input change with validation
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (!newEmail) {
      setEmailError('Email is required');
    } else if (!validateEmail(newEmail)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  // Handle password input change with validation
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    if (!newPassword) {
      setPasswordError('Password is required');
    } else if (!validatePassword(newPassword)) {
      setPasswordError('Password must be at least 7 characters');
    } else {
      setPasswordError('');
    }
  };

  // Email validation function
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Password validation function
  const validatePassword = (password: string) => {
    return password.length >= 7;
  };

  // Check if the submit button should be disabled
  const isSubmitDisabled = !email || !password || emailError || passwordError;

  const onClickSignUp = () => {
    const isActive = type === 'signup';
    if(isSubmitDisabled && isActive) return;
    if(!isActive){
      setType('signup');
      return
    }
    console.log('Sign Up', email, password)
  };

  const onClickLogin = () => {
    const isActive = type === 'login';
    if(isSubmitDisabled && isActive) return;
    if(!isActive){
      setType('login');
      return
    }
    console.log('login', email, password)

  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>{type === 'login' ? 'Login' : 'Sign Up'}</div>
        <div className={styles.underline}></div>
      </div>
      {passwordError && (
              <div className={styles.err}>{passwordError}</div>
      )}

      {emailError && (
        <div className={styles.err}>{emailError}</div>
      )}
      {/* Form element to handle submission */}
      <form className={styles.form}>
        <div className={styles.inputs}>
          {/* Email Input */}
          <div className={styles.input}>
            <MdEmail className={styles.icon} />
            <input
              type="email"
              placeholder='Email'
              className={styles.inp}
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          {/* Password Input */}
          <div className={styles.input}>
            <FaLock className={styles.icon} />
            <input
              type="password"
              placeholder='Password'
              className={styles.inp}
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>

        <div className={styles.submitContainer}>
          <div
            className={`${styles.submit} ${type === 'signup' ? styles.active : ''} ${(isSubmitDisabled && type === 'signup') ? styles.disabled : ''}`}
            onClick={onClickSignUp}
          >
            Sign Up
          </div>
          <div
            className={`${styles.submit} ${type === 'login' ? styles.active : ''} ${(isSubmitDisabled && type === 'login') ? styles.disabled : ''}`}
            onClick={onClickLogin}
          >
            Login
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
