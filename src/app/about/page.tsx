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
            <div className="flex flex-col gap-20">
                <div className="pt-16 px-8 flex-wrap px-10 flex gap-16 sm:gap-4 justify-center">
                    <div className="sm:w-1/2 justify-center flex flex-col gap-2">
                        <p className={`${italiana.className} text-5xl`}>Founder</p> 
                        <p className="font-extralight">“The state of the advertising industry is a travesty. A brand’s hopes and dreams  turn into a file on the desk of an underpaid, overworked and over-caffeinated intern. There has to be another way. A way where we can dream together and create together.A tomorrow.We’re not here to play games, we’re here to change the game - of tomorrow, for tomorrow.”</p>
                    </div>
                    <div className="w-[25rem]">
                        <div className="h-[25rem]"><Image priority className="h-full w-full" src={'/images/about/Founder.png'} alt="founder" width={200} height={200} /></div>
                        <div className="flex justify-between mt-2">
                            <div>
                                <p className="text-md">Apoorv Chaudhary</p>
                                <p className="font-extralight text-xs">Creative Head</p>
                            </div>
                            <div className="flex gap-2">
                                <FaInstagram className="text-2xl"/>
                                <FaLinkedin className="text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className={`${italiana.className} text-center text-5xl`}> Our Team</h1>
                <div className="flex gap-2 flex-wrap p-2 justify-center">
                    <div className="h-[20rem] w-[18rem]">
                        <Image priority className="h-full w-full" src={'/images/about/team-1.png'} alt="team member 1" width={200} height={200}/>
                    </div>
                    <div className="h-[20rem] w-[18rem]">
                        <Image priority className="h-full w-full" src={'/images/about/team-2.png'} alt="team member 1" width={200} height={200} />
                    </div>
                    <div className="h-[20rem] w-[18rem]">
                        <Image priority className="h-full w-full" src={'/images/about/team-3.png'} alt="team member 1" width={200} height={200} />
                    </div>
                    <div className="h-[20rem] w-[18rem]">
                        <Image priority className="h-full w-full" src={'/images/about/team-4.png'} alt="team member 1" width={200} height={200} />
                    </div>
                </div>    
            </div>
        </>
    )
}