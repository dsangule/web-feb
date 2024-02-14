"use client"
import { Button, Modal } from "antd"
import { useState } from "react";
import Header from "../Header";

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
    <div>
      <div className="bg-gradient-to-t from-[#58311C] to-[#A4592F] h-52 -skew-y-3 -translate-y-12">
        <div className="skew-y-3 translate-y-12">
          <Header />
        </div>
      </div>
        <p className="text-xl">Landing Page
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde, qui facere ea enim, voluptas porro reiciendis fugiat mollitia, ducimus nihil quasi natus sapiente laudantium repudiandae earum! Officiis, nobis perferendis!
        </p>
        <Button onClick={showModal}>Modal Button</Button>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p className="text-xl text-justify p-4">
            Step into the digital doorway of our vibrant academic family – welcome to the heart of SOE online community! <br/>
            We cherish the spirit of unity and collaboration that defines our community. This website serves as a virtual gathering place, where ideas are exchanged, connections are fostered, and the rich tapestry of our college experience unfolds. Stay tuned to the latest buzz, events, and happenings buzzing within our halls- there's always something exciting on the horizon.
          </p>
        </Modal>
    </div>
  )
}

export default LandingPage