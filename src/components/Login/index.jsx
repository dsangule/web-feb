"use client";

import React, { useEffect, useRef, useState } from 'react'
import Header from '../Header'
import styles from './login.module.css'
import Image from "next/image";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Login() {

  const router = useRouter();
  const [username, setUsername] = useState(localStorage.getItem("username"));
  useEffect(()=>{
    if (username !== "" && username !== null) {
      router.replace('/');
    }
  }, [username]);

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  
  async function authUser(username, password){
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {
        'content-type': 'application/json'
      }
    })

    const data = await response.json()
    if(!response.ok){
      throw new Error(data.message || "Something went wrong!");
    }
    return data.success;
  }

  async function submitHandler(event) {
    event.preventDefault();
    
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    try {
      const result = await authUser(enteredUsername, enteredPassword);
      if(result === '1'){
        confirm("Login successful!");
        localStorage.setItem("username", enteredUsername);
        router.replace('/');
      } else {
        alert("Wrong credentials!");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-[url('/campus.jpg')] h-screen bg-cover bg-fixed bg-no-repeat bg-center overflow-y-scroll">
      <Header />
      <div className="flex-col">
        <form onSubmit={submitHandler}>
          <div className={`${styles.wrapper} mx-auto align-middle my-12 px-8 py-4 justify-center`}>
            <Image src={'/JNU-says-LP.svg'} width={400} height={400} className="align-middle my-12 m-auto max-w-[80%]"/>
            <div className={styles.input_box}>
              <input type="text" ref={usernameInputRef} placeholder="Username" required />
              <UserOutlined className={styles.icon} />
            </div>
            <div className={styles.input_box}>
              <input type="password" ref={passwordInputRef} placeholder="Password" required />
              <LockOutlined className={styles.icon} />
            </div>
            <button className='w-40 font-arimo' type="submit">LOGIN</button>
            <div className={`${styles.register_link}`}>
              <p className='font-bold font-arimo'>Don't have an account? <Link href="/register" className={styles.register}>Sign Up</Link></p>  
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login