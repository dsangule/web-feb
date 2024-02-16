import Image from 'next/image'
import React from 'react'

function ClubItem({item}) {
  return (
    <div style={{
      backgroundColor: item.bgcolor,
      height: "360px",
      borderRadius: (item.imgpos==="l")?"180px 10px 10px 180px":"10px 180px 180px 10px",
      display: "flex",
      flexDirection: (item.imgpos==="l")?"row":"row-reverse",
      paddingLeft: "30px",
      paddingRight: "30px",
    }}>
      <Image src={item.logosrc} height={300} width={300} className="rounded-full h-[300px] my-auto" />
      <div className="m-[30px]">
        <p className="font-oswald font-bold text-5xl mb-5"
          style={{
            background: item.color,
            
          }}
        >
          {item.name}
        </p>
        <p className="font-koulen text-justify text-white text-xl font-normal ml-6">
          {item.desc}
        </p>
      </div>
    </div>
  )
}

export default ClubItem