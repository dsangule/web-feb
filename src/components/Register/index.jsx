"use client";

import React, { useEffect, useRef, useState } from 'react'
import Header from '../Header'
import styles from './register.module.css'
import Image from "next/image";
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

function Register() {

  const router = useRouter();
  const [username, setUsername] = useState(localStorage.getItem("username"));
  useEffect(()=>{
    if (username !== "" && username !== null) {
      router.replace('/');
    }
  }, [username]);

  const firstNameInputRef = useRef("");
  const lastNameInputRef = useRef("");
  const usernameInputRef = useRef("");
  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");
  const cPasswordInputRef = useRef("");

  async function checkUsername(username) {
    const response = await fetch("/api/check_username", {
      method: "POST",
      body: JSON.stringify({ username }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }
    return (data.success==="1")?true:false;
  }

  async function checkEmail(email) {
    const response = await fetch("/api/check_email", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }
    return (data.success==="1")?true:false;
  }

  async function registerUser(first_name, last_name, username, email, password) {
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ first_name, last_name, username, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }
    return data;
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredUsername = usernameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredCPassword = cPasswordInputRef.current.value;
        
    if(!enteredEmail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
      alert("Invalid email address");
      return;
    } else if(enteredPassword !== enteredCPassword){
      alert("Passwords don't match");
      return;
    } else if(await checkUsername(enteredUsername)) {
      alert("Username already exists");
      return;
    } else if(await checkEmail(enteredEmail)) {
      alert("Email already used");
      return;
    }

    try {
      const result = await registerUser(
        enteredFirstName,
        enteredLastName,
        enteredUsername,
        enteredEmail,
        enteredPassword
      );
      if (result.success === 1) {
        alert("Registration Successful!");
        router.replace('/login');
      } else {
        alert("Registration Unsuccessful");
      }
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <div className="bg-[url('/campus.jpg')] h-screen bg-cover bg-fixed overflow-y-scroll">
      <Header />
      <div className="flex-col py-12">
        <form onSubmit={submitHandler}>
          <div className={`${styles.wrapper} mx-auto align-middle px-8 py-4 justify-center`}>
            <Image src={'/WELCOME.svg'} width={400} height={400} className="align-middle my-12 m-auto max-w-[80%]"/>
            <div className="flex -mb-8">
              <div className={`${styles.input_box1}`}>
                <input type="text" placeholder="Firstname" ref={firstNameInputRef} required />
              </div>
              <div className={`${styles.input_box1}`}>
                <input type="text" placeholder="Lastname" ref={lastNameInputRef} required />
              </div>
            </div>
            <div className={styles.input_box}>
              <input type="text" placeholder="Email" ref={emailInputRef} required />
              <MailOutlined className={styles.icon}/>
            </div>
            <div className={styles.input_box}>
              <input type="text" placeholder="Username" ref={usernameInputRef} required />
              <UserOutlined className={styles.icon} />
            </div>
            <div className={styles.input_box}>
              <input type="password" placeholder="Password" ref={passwordInputRef} required />
              <LockOutlined className={styles.icon} />
            </div>
            <div className={styles.input_box}>
              <input type="password" placeholder="Confirm Password" ref={cPasswordInputRef} required />
              <LockOutlined className={styles.icon} />
            </div>
            
            <button className='w-40 font-arimo' type="submit">SIGNUP</button>
            
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register