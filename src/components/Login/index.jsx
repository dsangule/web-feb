import React from 'react'
import Header from '../Header'
import styles from './login.module.css'
import Image from "next/image";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';

function Login() {
  return (
    <>
      <Header />
      <div className="bg-[url('/campus.jpg')] h-screen bg-cover bg-no-repeat bg-center flex-col overflow-hidden">
        <form action="">
          <div className={`${styles.wrapper} mx-auto align-middle mt-12 px-8 py-4 justify-center`}>
            <Image src={'/JNU-says-LP.svg'} width={400} height={400} className="align-middle my-12 m-auto max-w-[80%]"/>
            <div className={styles.input_box}>
              <input type="text" placeholder="Username" required />
              <UserOutlined className={styles.icon} />
            </div>
            <div className={styles.input_box}>
              <input type="password" placeholder="Password" required />
              <LockOutlined className={styles.icon} />
            </div>
            <button className='w-40' type="submit">LOGIN</button>
            <div className={`${styles.register_link}`}>
              <p className='font-bold'>Don't have an account? <Link href="/register" className={styles.register}>Register</Link></p>  
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login