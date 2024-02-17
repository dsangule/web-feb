"use client";

import React, { useRef } from 'react'
import Header from '../Header'
import styles from './register.module.css'
import Image from "next/image";
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import Link from 'next/link';

function Register() {

  return (
    <div className="bg-[url('/campus.jpg')] h-screen bg-cover bg-fixed overflow-y-scroll">
      <Header />
      <div className="flex-col py-12">
        <form>
          <div className={`${styles.wrapper} mx-auto align-middle px-8 py-4 justify-center`}>
            <Image src={'/WELCOME.svg'} width={400} height={400} className="align-middle my-12 m-auto max-w-[80%]"/>
            <div className="flex -mb-8">
              <div className={`${styles.input_box1}`}>
                <input type="text" placeholder="Firstname" required />
              </div>
              <div className={`${styles.input_box1}`}>
                <input type="text" placeholder="Lastname" required />
              </div>
            </div>
            <div className={styles.input_box}>
              <input type="text" placeholder="Email" required />
              <MailOutlined className={styles.icon}/>
            </div>
            <div className={styles.input_box}>
              <input type="text" placeholder="Username" required />
              <UserOutlined className={styles.icon} />
            </div>
            <div className={styles.input_box}>
              <input type="text" placeholder="Password" required />
              <LockOutlined className={styles.icon} />
            </div>
            <div className={styles.input_box}>
              <input type="password" placeholder="Confirm Password" required />
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