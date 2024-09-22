import { Italiana } from "next/font/google";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const italiana = Italiana({
    weight: "400",
    subsets: ['latin']
})
export default function AboutUs() {
    return (
        <>
            <div className="flex flex-col  gap-16 sm:pt-20 pt-8 ">
             <div className="sm:px-16 px-4 flex sm:flex-nowrap flex-wrap gap-4">
                <div className="sm:w-[60%] flex flex-col gap-4">
                <h2 className="sm:text-6xl text-color-1 text-4xl font-bold">Who We Are</h2>
                <p className="text-lg leading-10 font-bold">Welcome to Craft 9 Studios, where innovation meets artistry in the digital realm. As a premier digital and creative agency, we specialize in transforming visions into compelling realities through cutting-edge design, social media marketing, and immersive digital campaigns. Our team of passionate creators and strategic thinkers collaborate closely with clients to craft tailored solutions that not only infatuate audiences but also drive measurable results.</p>
                <p className="text-lg leading-10 font-bold">At Craft 9 Studios, we believe that true engagement goes beyond aesthetics; it's about understanding the human mind. Our team of experts delves into the intricacies of consumer psychology to create campaigns that resonate deeply with your target audience. By understanding their motivations, desires, and behaviors, we craft experiences that not only capture attention but also inspire action.</p>
                </div>
                <div className="sm:w-1/2 h-[40rem]">
                <Image priority className="w-full h-full object-contain bg-none" src={'/images/newhome/about-us/About Us Phone.svg'} alt="first" width={400} height={400}/>
                </div>
             </div>
             <div  className="sm:px-16 relative px-4 w-full flex min-h-[40rem] sm:flex-nowrap flex-wrap gap-4">
                <div className="sm:w-[60%] flex flex-col gap-16 relative z-[3]">
                    <div className="w-full">
                    <h2 className="sm:text-6xl text-color-1 text-4xl font-bold">Vision</h2>
                    <p className="text-lg leading-10 font-bold">To redefine the digital landscape by pioneering innovative solutions that not only inspire but also understand and anticipate consumer desires.</p>
                    </div>
                    <div className="w-full">
                    <h2 className="sm:text-6xl text-color-1 text-4xl font-bold">Mission</h2>
                    <p className="text-lg leading-10 font-bold">We are committed to crafting transformative digital experiences that transcend the ordinary. By merging creativity with a deep understanding of human psychology, we empower brands to connect authentically with their audiences, drive meaningful engagement, and achieve sustainable growth in the ever-evolving digital world.</p>
                    </div>
                </div>
                <Image className="absolute w-full h-full object-cover top-0 left-0 z-[2] object-right" alt="rocket" height={600} width={1600} src={'/images/newhome/about-us/Rocket updated.svg'}/>
             </div>
            </div>
        </>
    )
}