"use client"
import { Button, Modal } from "antd"
import { useState } from "react";
import Header from "../Header";
import Image from "next/image";

function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-[#E3BC9A] max-h-screen flex-col overflow-hidden">
      <div className="bg-gradient-to-t from-[#58311C] to-[#A4592F] h-48 -skew-y-3 -translate-y-12">
        <div className="skew-y-3 translate-y-12">
          <Header />
        </div>
      </div>
      <div className="h-full w-full">
        <div className="w-fit h-fit mx-auto">
          <Image src={'/JNU-says-LP.svg'} width={500} height={500}/>
        </div>
        <Button onClick={showModal}>Modal Button</Button>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p className="text-xl text-justify p-4">
            Step into the digital doorway of our vibrant academic family – welcome to the heart of SOE online community! <br/>
            We cherish the spirit of unity and collaboration that defines our community. This website serves as a virtual gathering place, where ideas are exchanged, connections are fostered, and the rich tapestry of our college experience unfolds. Stay tuned to the latest buzz, events, and happenings buzzing within our halls- there's always something exciting on the horizon.
          </p>
        </Modal>
      </div>
      <div className="bg-gradient-to-b from-[#673A21] to-[#93522d] h-32">
        <div className="flex justify-between my-auto mx-auto pt-7 w-56">
          <Image src={'/LinkedIn.svg'} width={50} height={50} />
          <Image src={'/Instagram.svg'} width={50} height={50} />
          <Image src={'/Discord.svg'} width={50} height={50} />
        </div>
      </div>
    </div>
  )
}

export default LandingPage