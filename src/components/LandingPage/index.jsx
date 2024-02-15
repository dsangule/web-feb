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
    <div className="bg-[#E3BC9A] h-screen flex-col overflow-hidden">
      <div className="bg-gradient-to-t from-[#58311C] to-[#A4592F] h-48 -skew-y-2 -translate-y-20">
        <div className="skew-y-2 translate-y-20">
          <Header />
        </div>
      </div>
      <div className="h-full w-full -my-48 py-[15vw]">
        <div className="w-fit h-fit max-w-[90vw] mx-auto align-bottom">
          <Image src={'/JNU-says-LP.svg'} width={500} height={500} className="align-middle"/>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#673A21] to-[#93522d] h-24 w-full fixed bottom-0">
        {/* <Button onClick={showModal}>Modal Button</Button> */}
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p className="text-xl text-justify p-4">
            Step into the digital doorway of our vibrant academic family – welcome to the heart of SOE online community! <br/>
            We cherish the spirit of unity and collaboration that defines our community. This website serves as a virtual gathering place, where ideas are exchanged, connections are fostered, and the rich tapestry of our college experience unfolds. Stay tuned to the latest buzz, events, and happenings buzzing within our halls- there's always something exciting on the horizon.
          </p>
        </Modal>
        <div className="flex my-auto mx-auto pt-7 w-fit max-w-[50vw] justify-center">
          <Image src={'/LinkedIn.svg'} width={50} height={50} className="mx-2 max-w-[20%]" />
          <Image src={'/Instagram.svg'} width={50} height={50} className="mx-2 max-w-[20%]" />
          <Image src={'/Discord.svg'} width={50} height={50} className="mx-2 max-w-[20%]" />
        </div>
      </div>
    </div>
  )
}

export default LandingPage