import React from 'react'
import { UpSquareOutlined, DownSquareOutlined, UserOutlined } from '@ant-design/icons';
import Image from 'next/image';


function Blog({}) {
  return (
    <div style={{
      marginLeft: "10%",
      marginRight: "10%",
      marginTop:"3%",
      backgroundColor: "#D9D9D9",
      paddingTop: "25px", 
      paddingLeft: "30px",
      paddingRight: "40px",
      paddingBottom: "10px",
      borderRadius: '35px',
      boxShadow: "0 0 10px rgba(0, 0, 0, .2)",
    }}>
      <div className="flex justify-between align-bottom" style={{
        textAlign: "bottom",
      }}>
        <div className="h-fit font-arimo font-bold flex items-end" style={{
          margin: "1%",
          backgroundColor: "#D9D9D9",
          paddingBottom: "25px",
          paddingLeft: "5px",
          paddingTop: "5px",
          paddingRight: "5px",
          borderRadius: '15px',
          fontSize: '20px',
        }}>
          <div className="border-[4px] mr-3 -mb-2 rounded-full border-black">
            <UserOutlined style={{fontSize: "45px"}} />
          </div>
          @username
        </div>
        <div className="flex h-[40px]">
          <div className='font-arimo font-bold' style={{
            display: "flex",
            backgroundColor: "#D9D9D9",
            paddingTop: "7px",
            paddingLeft: "15px",
            paddingRight: "10px",
            border: '2px solid #000000',
            borderRadius: '20px 0px 0px 20px',
            fontSize: '15px',
          }}>
            XXX&nbsp;<UpSquareOutlined style={{fontSize: "20px"}} />
          </div>
          <div className='font-arimo font-bold' style={{
            display: "flex",
            backgroundColor: "#D9D9D9",
            paddingTop: "7px",
            paddingLeft: "10px",
            paddingRight: "15px",
            border: '2px solid #000000',
            borderLeft: '1px',
            borderRadius: '0px 20px 20px 0px',
            fontSize: '15px',
          }}>
            <DownSquareOutlined style={{fontSize: "20px"}} />&nbsp;XXX
          </div>
        </div>
      </div>
      
        <div className="font-arimo" 
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
          border: '2px solid #0000007A',
          marginLeft: '30px',
          marginRight: '30px',
          borderRadius: '25px',
          textAlign: "justify",
          paddingTop: "30px",
          paddingBottom: "30px",
          fontSize:'17px',
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore saepe alias, labore laborum maxime iusto mollitia minima harum, reiciendis esse architecto earum quidem rerum temporibus, repellat aspernatur laboriosam porro.

        </div>
        <div className="font-akshar" style={{

          textAlign: 'right',
          marginBottom: '20px',
          marginTop: '10px',
          color: '#000000A0'


        }}>
          Posted on XX/XX/XXXX  XX:XX  

        </div>
    </div>
  )
}

export default Blog