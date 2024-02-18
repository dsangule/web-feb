import Image from 'next/image'
import React from 'react'
import { UserOutlined } from '@ant-design/icons'

function ClubItem({item}) {
  return (
    <div 
    className="bg-black opacity-95 duration-300 hover:opacity-100 hover:drop-shadow-2xl"
    style={{
      minHeight:"360px",
      borderRadius: (item.imgpos==="l")?"180px 10px 10px 180px":"10px 180px 180px 10px",
      display: "flex",
      flexDirection: (item.imgpos==="l")?"row":"row-reverse",
      paddingLeft: "30px",
      paddingRight: "30px",
      marginTop: "30px",
    }}>
      <Image src={item.logosrc} height={300} width={300} className="rounded-full max-h-[300px] my-auto max-w-[30%]" />
      <div className="m-[30px]">
        <p className="font-oswald font-bold text-3xl mb-5 md:text-5xl"
          style={{
            background: item.color,
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {item.name}
        </p>
        <p className="font-koulen text-justify text-white text-base md:text-xl font-normal ml-6 overflow-hidden">
          {item.desc}
        </p>
      </div>
    </div>
  )
}

export default ClubItem