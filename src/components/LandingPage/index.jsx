"use client";

import { Button } from "antd";
import Header from "../Header";
import Image from "next/image";
import { useRouter } from "next/navigation";

function LandingPage() {
  const router = useRouter();
  return (
    <div className="bg-[url('/LP-bg.jpeg')] bg-cover bg-no-repeat bg-center h-screen flex-col overflow-hidden">
      <div className="bg-gradient-to-b from-[#A7BDDCA0] to-[#B7BECF] h-48 -skew-y-2 -translate-y-20">
        <div className="skew-y-2 translate-y-20">
          <Header headStyle={"1"} />
        </div>
      </div>
      <Image src={'/JNU-says-LP.svg'} width={500} height={500} className="align-middle m-auto max-w-[80%]"/>
      <center>
        RLord bohot bada bakchod hai<br/>
        <Button type="default" className="bg-gray-500" onClick={()=>{router.push('/login')}}>Login</Button>
      </center>
      <div className="bg-gradient-to-b from-[#878866a0] to-[#545744a0] h-24 w-full fixed bottom-0">
        <div className="flex my-auto mx-auto pt-7 w-fit max-w-[50vw] justify-center">
          <Image src={'/LinkedIn.svg'} width={50} height={50} className="mx-4 max-w-[20%]" />
          <Image src={'/Instagram.svg'} width={50} height={50} className="mx-4 max-w-[20%]" />
          <Image src={'/Discord.svg'} width={50} height={50} className="mx-4 max-w-[20%]" />
        </div>
      </div>
    </div>
  )
}

export default LandingPage