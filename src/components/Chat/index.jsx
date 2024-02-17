import React from 'react'
import Header from '../Header'
import Blog from './Blog'

function Chat() {
  const items = [
    {
      key: 1,
      name: "LOOP",
      desc: "We at loop have no stopping criteria, we strive for infinity. For anyone who is a part of loop, you learn how to plan and carry on with various types of development. Your time at loop will help you gain skills which will supplement you for a greater part of your course. Just like, HackJNU, first large scale event for the school of engineering, we strive to widen SoE's footprint as much as we can.",
      color: "linear-gradient(183.05deg, #45B2F7 13.35%, #27E9D5 79.8%)",
      bgcolor: "#000000",
      logosrc: "/clubs/loop.jpeg",
      imgpos: "l"
    },
    {
      key: 2,
      name: "VOLT",
      desc: "The Electronics club of JNU SE was founded with the purpose of providing an in-depth look into the world of electronic simulation, embedded systems and IoT. The executives are all very passionate about electronics and are always hungry to learn more. The club regularly organises workshops and masterclasses to equip the students of JNU SE with advanced skills used in Industry 4.0.",
      color: "#EDFC08",
      bgcolor: "#000000",
      logosrc: "/clubs/volt.jpeg",
      imgpos: "r"
    },
    {
      key: 3,
      name: "KREEDA",
      desc: "Kreeda the sports club is the largest club of JNU SE. Their events are large in scale and make full use of the vast sporting facilities available in the campus. You can expect branch-wise tournaments or even year-wise tournaments to take place at regular intervals. Kreeda also includes indoor sports under its ambit so budding chess players can look forward to plenty of events to satisfy their competitive streak.",
      color: "linear-gradient(180deg, #7DC5DE 100%, #86E8C1 100%)",
      bgcolor: "#000000",
      logosrc: "/clubs/loop.jpeg",
      imgpos: "l"
    },
    {
      key: 4,
      name: "Co.L.D.",
      desc: "Co.L.D. is the Computer Science Club of SE, JNU. We help the students of SE to come together and become a part of the institute's coding community. With a diverse Core Committee running the club, we combine individual expertise and insight to help our members grow their professional skills.",
      color: "linear-gradient(180deg, #13AAE6 0%, #012061 100%)",
      bgcolor: "#000000",
      logosrc: "/clubs/volt.jpeg",
      imgpos: "r"
    },
  ]
  return (
    <div className='bg-[#B7BECF] pb-[100px]'>
      <Header />
      <div>
        {items.map((item)=>(
          <Blog key={item.key} item={item}/>
        ))}
      </div>
    </div>
  )
}

export default Chat