import React from 'react'
import Header from '../Header'
import Image from 'next/image'

function About() {
  return (
    <div className='bg-[#B7BECF] pb-[100px]'>
      <Header />
      <Image src={'/Au3.jpg'} width={2000} height={400} className="align-middle m-auto h-[400px]"/>
      <div className="bg-[#D9D9D9] w-4/5 mx-auto"
      style={{paddingTop: "23px", paddingRight: "33.5px" , paddingLeft: "33.5px", paddingBottom: "0px", borderRadius: "35px" ,marginTop: "62px" ,
        
      }}>
      <div className="font-anek font-semibold text-center text-[15px]">Welcome to our vibrant college community, rooted in diversity and fueled by collaboration. Here, students, faculty, and staff come together to create an environment that fosters growth, learning, and mutual support. As a member of our community, you'll find endless opportunities for personal and academic development. our community thrives on the collective strength of its members.  Whether you're looking to expand your network, engage in meaningful discussions, or embark on new adventures, our inclusive atmosphere encourages you to explore your passions and pursue your goals. From study groups to extracurricular activities, every interaction enriches our collective experience and strengthens our bonds. But the benefits of joining our community extend far beyond the classroom. Here, you'll forge connections that last a lifetime, building relationships that will shape your future and enrich your journey.  Come be a part of something special and experience the transformative power of community firsthand.</div>
      <div className="font-anek font-semibold text-center text-[17px]" style={{paddingTop:"30px", paddingBottom: "41px"}}>All the photos on this website are courtesy of @jnu_photos, which showcases the beauty and diversity of Jawaharlal Nehru University.</div>
      <div className="font-anek font-semibold text-center text-[15px]">We are Anurudh Singh, Abhishek Singh Kushwah, Devansh Sangule and Ritanshu Prasad, the creators of this site for our college community. We are all students of the School of Engineering, and we share a passion for web development and design. We have worked together on this project for the past few days, and we are proud to present it to you. Our site aims to provide a platform for students, faculty, and alumni to connect, share, and learn from each other. We hope you enjoy using our site and find it useful and engaging. If you have any feedback, suggestions, or questions, please feel free to contact us. Thank you for visiting our site!</div>
      <div className="font-anek font-semibold text-center text-[16px] pt-1">- Team Void</div>
      <div className="flex my-auto mx-auto pt-7 w-fit max-w-[50vw] justify-center"
      style={{paddingBottom: "29px"}}>
          <Image src={'/icons/Au_LN.svg'} width={48} height={48} className="mx-4 max-w-[20%]" />
          <Image src={'/icons/Au_IN.svg'} width={48} height={48} className="mx-4 max-w-[20%]" />
          <Image src={'/icons/Au_DC.svg'} width={48} height={48} className="mx-4 max-w-[20%]" />
        </div>
      </div>
    </div>
  )
}

export default About