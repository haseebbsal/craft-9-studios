'use client'
import { IoCaretForwardOutline } from "react-icons/io5";
import { Italiana } from "next/font/google";
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import Carousel from "react-multi-carousel";
// sdsd
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Link from "next/link";
// import { useEffect, useState } from "react";
const italiana = Italiana({
    weight: "400",
    subsets: ['latin']
})

export default function Creatives() {    
    return (
        <>
            <div className="flex test telegraf flex-col gap-16 mb-8">
                <div className="pt-16  sm:pl-44">
                    <div className="flex gap-2 justify-center sm:justify-start items-center">
                        <div className="flex flex-col">
                            <p className={`text-[5rem] telegraf text-color-1`}>Explore</p>
                            {/* <p className="self-end text-xl text-gray-500">creatives</p> */}
                        </div>
                        <Link href={'#food'}><IoCaretForwardOutline className="text-2xl hover:rotate-90" /></Link>
                        
                    </div>
                </div>
                <div className="flex text-white gap-4">
                
      <Swiper
      className=""
      navigation={true} modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide >
            <div className="relative creativeHover  flex justify-center items-center overflow-hidden sm:min-w-[22rem] h-[22rem]">
                <Image priority className="w-full  h-full object-fill " src={'/images/creatives/Food&Beverages.svg'} width={100} height={250} alt="individual" />
                
                <div className="absolute   bg-[#000000cf] left-0 w-full h-full  items-center justify-center">
                <a href="#food" className={` cursor-pointer text-3xl text-center !font-semibold flex items-center flex-col gap-2 z-[1212]`}>
                    food and beverages
                    <FaCaretDown className="text-2xl"/>
                </a>
                </div>
            
            </div>
        </SwiperSlide>
      <SwiperSlide><div className="relative creativeHover overflow-hidden flex justify-center items-center sm:min-w-[22rem] h-[22rem]">
                        <Image priority className="w-full  h-full object-fill " src={'/images/creatives/Fashion.svg'} width={100} height={250} alt="individual" />
                        
                        <div className="absolute   bg-[#000000cf] left-0 w-full h-full  items-center justify-center">
                        <a href="#fashion" className={` cursor-pointer text-3xl text-center !font-semibold flex items-center flex-col gap-2 z-[1212]`}>
                            Fashion
                            <FaCaretDown className="text-2xl" />
                        </a>
                </div>
                    </div></SwiperSlide>
      <SwiperSlide><div className="relative creativeHover overflow-hidden flex justify-center items-center sm:min-w-[22rem] h-[22rem]">
                        <Image priority className="w-full  h-full object-fill " src={'/images/creatives/Corporate.svg'} width={100} height={250} alt="individual" />
                        
                        <div className="absolute  top-0  bg-[#000000cf] left-0 w-full h-full  items-center justify-center">
                        <a href="#corporate"  className={` cursor-pointer text-3xl text-center !font-semibold flex items-center flex-col gap-2 z-[1212]`}>
                            Corporate
                            <FaCaretDown className="text-2xl" />
                        </a>
                </div>
                    </div></SwiperSlide>
      {/* <SwiperSlide><div className="relative flex creativeHover overflow-hidden justify-center items-center sm:min-w-[22rem] h-[22rem]">
                        <Image  className="w-full  h-full object-fill " src={'/images/creatives/bts.png'} width={100} height={250} alt="individual" />
                        
                        <div className="absolute  top-0  bg-[#000000cf] left-0 w-full h-full  items-center justify-center">
                        <a href="#bts" className={` cursor-pointer text-3xl text-center !font-semibold flex items-center flex-col gap-2 z-[1212]`}>
                        bts
                            <FaCaretDown className="text-2xl" />
                        </a>
                </div>
                    </div></SwiperSlide> */}
                    <SwiperSlide><div className="relative creativeHover overflow-hidden flex justify-center items-center w-max h-[22rem]">
                        <Image priority className="w-full h-full object-fill " src={'/images/newhome/Isuzu.svg'} width={100} height={250} alt="individual" />
                        
                        <div className="absolute  top-0  bg-[#000000cf] left-0 w-full h-full  items-center justify-center">
                        <a href="#automotive" className={` cursor-pointer text-3xl text-center !font-semibold flex items-center flex-col gap-2 z-[1212]`}>
                        Automotive Industry
                            <FaCaretDown className="text-2xl" />
                        </a>
                </div>
                        
                    </div></SwiperSlide>
      ...
    </Swiper>
                
                    

                </div>
                <div className=" p-8 flex flex-col gap-8">
                    <div className={` text-5xl justify-end flex`}><h1 id="food" className="text-end min-w-1/4">Food and
                        Beverages</h1>
                    </div>
                    <Swiper
      className="w-full"
      navigation={true} modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide>
      <div className="w-max max-h-[25rem] h-[20rem]">
                                <Image priority className="w-full h-full object-cover " src={'/images/creatives/Food & Bev/01.svg'} width={100} height={250} alt="individual" />
                            </div>
        </SwiperSlide>
      <SwiperSlide><div className="w-max max-h-[25rem] h-[20rem]">
                                <Image priority className="w-full h-full object-cover " src={'/images/creatives/Food & Bev/02.svg'} width={100} height={250} alt="individual" />
                            </div></SwiperSlide>
      <SwiperSlide><div className="w-max max-h-[25rem] h-[20rem]">
                                <Image priority className="w-full h-full object-cover " src={'/images/creatives/Food & Bev/03.svg'} width={100} height={250} alt="individual" />
                            </div></SwiperSlide>
                    <SwiperSlide><div className="w-max max-h-[25rem] h-[20rem]">
                                <Image priority className="w-full h-full object-cover " src={'/images/creatives/Food & Bev/04.svg'} width={100} height={250} alt="individual" />
                            </div></SwiperSlide>
                            <SwiperSlide><div className="w-max max-h-[25rem] h-[20rem]">
                                <Image priority className="w-full h-full object-cover " src={'/images/creatives/Food & Bev/05.svg'} width={100} height={250} alt="individual" />
                            </div></SwiperSlide>
    </Swiper>
                    
                    
                </div>
                <div className="p-8 flex flex-col gap-8">
                    <div className={` text-5xl justify-end flex`}><h1 id="fashion" className="text-end min-w-1/4">Fashion</h1>
                    </div>
                    <Swiper
      className="w-full"
      navigation={true} modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide>
      <div className="w-max max-h-[25rem] h-[20rem]">
                                <Image priority className="w-full h-full object-cover " src={'/images/creatives/Fashion/01.svg'} width={100} height={250} alt="individual" />
                            </div>
        </SwiperSlide>
      <SwiperSlide><div className="w-max max-h-[25rem] h-[20rem]">
                                <Image priority className="w-full h-full object-cover " src={'/images/creatives/Fashion/02.svg'} width={100} height={250} alt="individual" />
                            </div></SwiperSlide>
      <SwiperSlide><div className="w-max max-h-[25rem] h-[20rem]">
                                <Image priority className="w-full h-full object-cover " src={'/images/creatives/Fashion/03.svg'} width={100} height={250} alt="individual" />
                            </div></SwiperSlide>
                    <SwiperSlide><div className="w-max max-h-[25rem] h-[20rem]">
                                <Image priority className="w-full h-full object-cover " src={'/images/creatives/Fashion/04.svg'} width={100} height={250} alt="individual" />
                            </div></SwiperSlide>
                            <SwiperSlide><div className="w-max max-h-[25rem] h-[20rem]">
                                <Image priority className="w-full h-full object-cover " src={'/images/newhome/Dezine N Rungs.svg'} width={100} height={250} alt="individual" />
                            </div></SwiperSlide>
    </Swiper>
                    

                </div>
                <div className="p-8 flex flex-col gap-8">
                    <div className={` text-5xl justify-end flex`}><h1 id="corporate" className="text-end min-w-1/4">Corporate</h1>
                    </div>
                    <Swiper
      className="w-full"
      navigation={true} modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide>
      <div className="w-max max-h-[25rem] h-[20rem]">
                                <Image priority className="w-full h-full object-cover " src={'/images/creatives/Corporate/01.svg'} width={100} height={250} alt="individual" />
                            </div>
        </SwiperSlide>
      <SwiperSlide><div className="w-max max-h-[25rem] h-[20rem]">
                                <Image priority className="w-full h-full object-cover " src={'/images/creatives/Corporate/02.svg'} width={100} height={250} alt="individual" />
                            </div></SwiperSlide>
      <SwiperSlide><div className="w-max max-h-[25rem] h-[20rem]">
                                <Image priority className="w-full h-full object-cover " src={'/images/creatives/Corporate/03.svg'} width={100} height={250} alt="individual" />
                            </div></SwiperSlide>
                    <SwiperSlide><div className="w-max max-h-[25rem] h-[20rem]">
                                <Image priority className="w-full h-full object-cover " src={'/images/creatives/Corporate/04.svg'} width={100} height={250} alt="individual" />
                            </div></SwiperSlide>
                            <SwiperSlide><div className="w-max max-h-[25rem] h-[20rem]">
                                <Image priority className="w-full h-full object-cover " src={'/images/newhome/Corporate pic 5.svg'} width={100} height={250} alt="individual" />
                            </div></SwiperSlide>
    </Swiper>
                   

                </div>
                {/* <div className="p-8 flex flex-col gap-8">
                    <div className={` text-5xl justify-end flex`}><h1 id="bts" className="text-end min-w-1/4">bts</h1>
                    </div>
                    <div className="flex flex-wrap justify-start gap-4">
                    <div className="w-max max-h-[25rem] h-[20rem]">
                                <Image   className="w-full h-full object-cover " src={'/images/creatives/Corporate/01.svg'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-max max-h-[25rem] h-[20rem]">
                                <Image  className="w-full h-full object-cover " src={'/images/creatives/Corporate/02.svg'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-max max-h-[25rem] h-[20rem]">
                                <Image  className="w-full h-full object-cover " src={'/images/creatives/Corporate/03.svg'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-max max-h-[25rem] h-[20rem]">
                                <Image  className="w-full h-full object-cover " src={'/images/creatives/Corporate/04.svg'} width={100} height={250} alt="individual" />
                            </div>
                    </div>

                </div> */}
                <div className="p-8 flex flex-col gap-8">
                    <div className={` text-5xl justify-end flex`}><h1 id="automotive" className="text-end min-w-1/4">Automotive Industry</h1>
                    </div>
                    <Swiper
      className="w-full"
      navigation={true} modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide>
      <div className="w-max max-h-[25rem] h-[20rem]">
                                <Image priority className="w-full h-full object-cover " src={'/images/newhome/Auto M 2.svg'} width={100} height={250} alt="individual" />
                            </div>
        </SwiperSlide>
      <SwiperSlide><div className="w-max max-h-[25rem] h-[20rem]">
                                <Image priority className="w-full h-full object-cover " src={'/images/newhome/Auto M 1.svg'} width={100} height={250} alt="individual" />
                            </div></SwiperSlide>
      <SwiperSlide><div className="w-full max-h-[25rem] h-[20rem]">
                                <Image priority className="w-full h-full object-cover " src={'/images/newhome/Behance-ISUZU-02-GIF-(400x400).gif'} width={100} height={250} alt="individual" />
                            </div></SwiperSlide>
                    
    </Swiper>
                    

                </div>

                <div className="p-8 flex flex-col gap-8">
                    <div className={` text-5xl justify-end flex`}><h1 id="automotive" className="text-end min-w-1/4">Reel Collabs</h1>
                    </div>
                    <Swiper
      className="w-full"
      navigation={true} modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide>
      <div className="w-[20rem] ">
                    <video onMouseOut={(e:any)=>e.target.pause()} onMouseOver={(e:any)=>e.target.play()}  onTouchStart={(e:any)=>e.target.play()} className="w-full h-full object-cover  " muted  playsInline loop>
                <source src={`/images/newhome/Reel 5.mov`} type="video/mp4" />
            </video>
                            </div>
        </SwiperSlide>
      <SwiperSlide><div className="w-[20rem]  ">
                            <video onMouseOut={(e:any)=>e.target.pause()} onMouseOver={(e:any)=>e.target.play()}  onTouchStart={(e:any)=>e.target.play()}  className="w-full h-full object-cover  " muted  playsInline loop>
                <source src={`/images/newhome/Reel 6.mov`} type="video/mp4" />
            </video>
                            </div></SwiperSlide>
      <SwiperSlide><div className="w-[20rem]  ">
                            <video onMouseOut={(e:any)=>e.target.pause()} onMouseOver={(e:any)=>e.target.play()}  onTouchStart={(e:any)=>e.target.play()}  className="w-full h-full object-cover  " muted  playsInline loop>
                <source src={`/images/newhome/Reel 7.mov`} type="video/mp4" />
            </video>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="w-[20rem]  ">
                            <video onMouseOut={(e:any)=>e.target.pause()} onMouseOver={(e:any)=>e.target.play()}  onTouchStart={(e:any)=>e.target.play()}  className="w-full h-full object-cover  " muted  playsInline loop>
                <source src={`/images/newhome/Reel 8.mov`} type="video/mp4" />
            </video>
                            </div></SwiperSlide>
                    
    </Swiper>
                    <div className="flex flex-wrap justify-start gap-4">
                    {/* <div className="w-[20rem] max-h-[25rem] h-[20rem]">
                    <video  className="w-full h-full object-cover  " muted autoPlay playsInline loop>
                <source src={`/images/newhome/Reel 5.mov`} type="video/mp4" />
            </video>
                            </div> */}
                            {/* <div className="w-[20rem] max-h-[25rem] h-[20rem]">
                            <video  className="w-full h-full object-cover  " muted autoPlay playsInline loop>
                <source src={`/images/newhome/Reel 6.mov`} type="video/mp4" />
            </video>
                            </div> */}
                            {/* <div className="w-[20rem] max-h-[25rem] h-[20rem]">
                            <video  className="w-full h-full object-cover  " muted autoPlay playsInline loop>
                <source src={`/images/newhome/Reel 7.mov`} type="video/mp4" />
            </video>
                            </div> */}
                            {/* <div className="w-[20rem] max-h-[25rem] h-[20rem]">
                            <video  className="w-full h-full object-cover  " muted autoPlay playsInline loop>
                <source src={`/images/newhome/Reel 8.mov`} type="video/mp4" />
            </video>
                            </div> */}
                    </div>

                </div>
            </div>
        </>
    )
}



// automotive industry
