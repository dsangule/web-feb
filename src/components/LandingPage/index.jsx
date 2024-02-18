"use client";

import { Button, Flex } from "antd";
import Header from "../Header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from './landingpage.module.css';
import { useEffect, useState } from "react";

function LandingPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  useEffect(()=>{setUsername(localStorage.getItem("username"))},[username]);
  const loggedIn = (username !== "" && username !== null)?true:false;
  return (
    <div className="bg-[url('/LP-bg.jpeg')] bg-cover bg-no-repeat bg-center h-screen flex-col overflow-hidden">
      <div className="bg-gradient-to-b from-[#A7BDDCA0] to-[#B7BECF] h-48 -skew-y-2 -translate-y-20">
        <div className="skew-y-2 translate-y-20">
          <Header headStyle={"1"} />
        </div>
      </div>
      <Image src={'/JNU-says-LP.svg'} width={500} height={500} className="align-middle m-auto max-w-[80%]"/>
      <center>
        <div className={`${styles.wrapper}`}>
        
        {loggedIn 
        ? <Button 
        type="submit" shape="round" 
        className=" h-10 w-40 font-bold font-arimo border-2 " 
        onClick={()=>{localStorage.removeItem("username"); setUsername("")}}>LOG OUT</Button> 
        : <Button 
        type="submit" shape="round" 
        className=" h-10 w-40 font-bold font-arimo border-2 " 
        onClick={()=>{router.push('/login')}}>LOGIN</Button> }
        
        
        </div>
      </center>
      <div className="bg-gradient-to-b from-[#878866a0] to-[#545744a0] h-24 w-full fixed bottom-0">
        <div className="flex my-auto mx-auto pt-7 w-fit max-w-[50vw] justify-center">
          <Image src={'/icons/LinkedIn.svg'} width={50} height={50} className="mx-4 max-w-[20%]" />
          <Image src={'/icons/Instagram.svg'} width={50} height={50} className="mx-4 max-w-[20%]" />
          <Image src={'/icons/Discord.svg'} width={50} height={50} className="mx-4 max-w-[20%]" />
        
        </div>
      </div>
    </div>
  )
}

export default LandingPage