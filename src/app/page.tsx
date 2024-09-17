'use client'
import Video from "@/components/home/video";
import { Button } from "@nextui-org/react";
import { Italiana } from "next/font/google";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
const italiana=Italiana({
  weight: "400",
  subsets:['latin']
})

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-24 sm:pt-20 pt-8 ">
        <div className="flex sm:flex-nowrap flex-wrap items-center sm:gap-4">
          <div className={`telegraf sm:w-1/2 flex flex-col sm:items-center sm:px-16 px-4 gap-4`}>
            <h2 className="sm:text-8xl text-4xl font-bold">Beyond Expected</h2>
            <p className="text-lg">As a premier digital and creative agency, we specialize in transforming visions into compelling realities through cutting-edge design, social media marketing, and immersive digital campaigns.</p>
            <Button className="bg-black border-2 rounded-none border-[#e5e900] garet font-bold self-end text-white">READ MORE</Button>
          </div>
          <div className="sm:w-1/2 h-[40rem]">
          <Image priority className="w-full h-full object-contain" src={'/images/newhome/First Section Picture.svg'} alt="first" width={400} height={400}/>
          </div>
        </div>
        <div className="flex flex-col items-center gap-16">
          <h2 className=" text-center telegraf font-bold text-color-1 text-5xl">What we can help you with</h2>
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
          slidesPerView: 3,
          spaceBetween: 100,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 100,
        },
      }}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div className="flex flex-col gap-2 items-center">
            <div className="sm:h-[24rem] h-[20rem] w-[24rem] ">
              <Image priority className="w-full h-full object-contain" src={'/images/newhome/homeslider/Branding (1).svg'} alt="productions" width={300} height={300}/>
            </div>
            <p className="telegraf font-bold text-2xl">Branding</p>
            </div>
        </SwiperSlide>
      <SwiperSlide><div className="flex flex-col gap-2 items-center">
            <p className="telegraf font-bold text-2xl">Creatives</p>
            <div className="sm:h-[24rem] h-[20rem] w-[24rem] ">
              <Image priority className="w-full h-full object-contain" src={'/images/newhome/homeslider/Creatives (1).svg'} alt="productions" width={300} height={300}/>
            </div>
            </div></SwiperSlide>
      <SwiperSlide><div className="flex flex-col gap-2 items-center">
            <div className="sm:h-[24rem] h-[20rem] w-[24rem] ">
              <Image priority className="w-full h-full object-contain" src={'/images/newhome/homeslider/Web-Craft (1).svg'} alt="productions" width={300} height={300}/>
            </div>
            <p className="telegraf font-bold text-2xl">Web Craft</p>
            </div></SwiperSlide>
      <SwiperSlide><div className="flex flex-col gap-2 items-center">
            <p className="telegraf font-bold text-2xl">Productions</p>
            <div className="sm:h-[24rem] h-[20rem] w-[24rem] ">
              <Image priority className="w-full h-full object-contain" src={'/images/newhome/homeslider/Productions (1).svg'} alt="productions" width={300} height={300}/>
            </div>
            </div></SwiperSlide>
                    <SwiperSlide><div className="flex flex-col gap-2 items-center">
            <div className="sm:h-[24rem] h-[20rem] w-[24rem] ">
              <Image priority className="w-full h-full object-contain" src={'/images/newhome/homeslider/Media Buying (1).svg'} alt="productions" width={300} height={300}/>
            </div>
            <p className="telegraf font-bold text-2xl">Media-Buying</p>
            </div></SwiperSlide>
    </Swiper>
          {/* <div className="flex gap-2">
            <div className="flex flex-col gap-2 items-center">
            <div className="h-[24rem] w-[24rem] ">
              <Image  className="w-full h-full object-contain" src={'/images/newhome/Productions.svg'} alt="productions" width={300} height={300}/>
            </div>
            <p className="telegraf font-bold text-2xl">Branding</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
            <p className="telegraf font-bold text-2xl">Branding</p>
            <div className="h-[24rem] w-[24rem] ">
              <Image  className="w-full h-full object-contain" src={'/images/newhome/Productions.svg'} alt="productions" width={300} height={300}/>
            </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
            <div className="h-[24rem] w-[24rem] ">
              <Image  className="w-full h-full object-contain" src={'/images/newhome/Productions.svg'} alt="productions" width={300} height={300}/>
            </div>
            <p className="telegraf font-bold text-2xl">Branding</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
            <p className="telegraf font-bold text-2xl">Branding</p>
            <div className="h-[24rem] w-[24rem] ">
              <Image  className="w-full h-full object-contain" src={'/images/newhome/Productions.svg'} alt="productions" width={300} height={300}/>
            </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
            <div className="h-[24rem] w-[24rem] ">
              <Image  className="w-full h-full object-contain" src={'/images/newhome/Productions.svg'} alt="productions" width={300} height={300}/>
            </div>
            <p className="telegraf font-bold text-2xl">Branding</p>
            </div>
           
          </div> */}
        </div>

        <div>
          <h2 className="telegraf text-2xl text-end pr-4">Brand Logo To Key Visuals</h2>
          <div style={{background:"url('/images/newhome/banner/Background.svg')",backgroundSize:"cover"}} className="w-full flex justify-center items-center border-4 border-color-1">
          <div className="sm:h-[30rem] w-full">
          <Image priority className="w-full h-full object-contain" src={'/images/newhome/banner/Phones.svg'} alt="first" width={400} height={400}/>
          </div>
          </div>
        </div>

        <div>
          <h2 className="telegraf text-2xl text-end pr-4">Brand Creatives</h2>
          <div style={{background:"url('/images/newhome/banner/Banner 2 BG.svg')",backgroundSize:"cover"}} className="w-full flex justify-center items-center border-4 border-color-1">
          <div className="sm:h-[30rem] w-full">
          <Image priority className="w-full h-full object-contain" src={'/images/newhome/banner/Banner 2 Pics.svg'} alt="first" width={400} height={400}/>
          </div>
          </div>
        </div>

        <div>
          <h2 className="telegraf text-2xl text-end pr-4">Paid Ads Funnel</h2>
          <div className="w-full border-4 border-color-1">
          <video  className="w-full sm:h-[40rem] object-cover  "  controls >
                <source src={`/images/newhome/Banner 3.mp4`} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="flex flex-col gap-8">
        <h2 className="telegraf text-color-1 text-4xl text-center font-bold pr-4">Our Services</h2>
        <div className="flex justify-center flex-wrap gap-8 px-16">
          <div className="flex sm:flex-nowrap flex-wrap gap-4 sm:w-[70%] w-full justify-between">
          <div className="flex flex-col w-full gap-2">
          <h3 className="telegraf text-color-1 text-2xl  font-bold ">Strategy</h3>
            <ul className="list-disc text-xl pl-8">
            <li>Growth Strategy</li>
            <li>Innovation Strategy </li>
            <li>Customer Experience Strategy </li>
            <li>Brand Strategy</li>
            <li>Competitive Analysis </li>  
            <li>Brand Audits</li>
            </ul>
          </div>
          
          <div className="flex flex-col w-full gap-2">
          <h3 className="telegraf text-color-1 text-2xl  font-bold ">Marketing</h3>
            <ul className="list-disc text-xl pl-8">
            <li>Campaign Development</li>
            <li>Content Strategy</li>
            <li>Social Media Marketing</li>
            <li>Digital Advertising</li>
            <li>Digital Magazine</li>  
            <li>Search Engine Marketing</li>
            </ul>
          </div>
          <div className="flex flex-col w-full gap-2">
          <h3 className="telegraf text-color-1 text-2xl  font-bold ">Creatives</h3>
            <ul className="list-disc text-xl pl-8">
            <li>Brand Identity & Naming</li>
            <li>Content Design & Copywriting</li>
            <li>Business Identity Design</li>
            <li>Product Packaging</li>
            <li>Website Creation</li>  
            <li>Concept Art</li>
            </ul>
          </div>
          </div>


          <div className="flex sm:flex-nowrap flex-wrap gap-4 sm:w-[70%] w-full justify-between">
          <div className="flex flex-col w-full gap-2">
          <h3 className="telegraf text-color-1 text-2xl  font-bold ">Media Buying</h3>
            <ul className="list-disc text-xl pl-8">
            <li>Performance Marketing</li>
            <li>Digital Platforms Executions</li>
            <li>TVC/DVC Media Buying</li>
            <li>Target Marketing</li>
            <li>Radius Marketing</li>  
            </ul>
          </div>
          <div className="flex flex-col w-full gap-2">
          <h3 className="telegraf text-color-1 text-2xl  font-bold ">PR</h3>
            <ul className="list-disc text-xl pl-8">
            <li>Reputation Management</li>
            <li>Influencer Marketing</li>
            <li>Launch Events</li>
            <li>Media Relations</li>
            <li>Event Planning</li>  
            </ul>
          </div>
          <div className="flex flex-col w-full gap-2">
          <h3 className="telegraf text-color-1 text-2xl  font-bold ">Productions</h3>
            <ul className="list-disc text-xl pl-8">
            <li>Video Content</li>
            <li>Photography</li>
            <li>Podcast Productions</li>
            <li>Scripts</li>
            <li>TVCs/DVCs</li>  
            </ul>
          </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
