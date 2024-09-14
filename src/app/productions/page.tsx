import { Italiana } from "next/font/google";
import Image from "next/image";
const italiana = Italiana({
    weight: "400",
    subsets: ['latin']
})
export default function Video() {
    return (
        <>
            <div className="flex test flex-col gap-28">
                <div className="pt-16 flex gap-4 px-4 sm:gap-16 flex-wrap sm:px-44  items-center">
                            <div className="">
                                <p className={`text-8xl ${italiana.className}`}>projects</p>
                            </div>
                            <div className="flex sm:w-1/2  self-end items-end min-h-[8rem]">
                                <p style={{ fontFamily: 'Manrope, sans-serif' }} className="text-[#dedede] 00">Our in-house production hub comprises of photographers, videographers, producers, directors, editors and animators who together create some great video content.</p>
                            </div> 
                </div>
                <div className="flex flex-col gap-4 p-4 flex-wrap">
                    <div className="flex gap-4">
                        <div className="w-1/2 h-[20rem] relative">
                            <Image className="w-full h-full" src={'/images/branding/firstImg.jpg'} alt="img1" width={300} height={300} />
                            <p className="absolute top-1/2 left-[45%] text-3xl" style={{ fontFamily:"Italiana, sans-serif"}}>hala</p>
                        </div>
                        <div className="w-1/2 h-[20rem] relative">
                            <Image className="w-full h-full" src={'/images/branding/secondImg.png'} alt="img1" width={300} height={300} />
                            <p className="absolute top-1/2 left-[45%] text-3xl" style={{ fontFamily:"Italiana, sans-serif"}}>hala</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-1/2 h-[20rem] relative">
                            <Image className="w-full h-full" src={'/images/branding/thirdImg.jpg'} alt="img1" width={300} height={300} />
                            <p className="absolute top-1/2 left-[45%] text-3xl" style={{ fontFamily:"Italiana, sans-serif"}}>hala</p>
                        </div>
                        <div className="w-1/2 h-[20rem] relative">
                            <Image className="w-full h-full" src={'/images/branding/fouthImg.jpg'} alt="img1" width={300} height={300} />
                        </div>
                        <div className="w-1/2 h-[20rem] relative">
                            <Image className="w-full h-full" src={'/images/branding/fifthImg.png'} alt="img1" width={300} height={300} />
                            <p className="absolute top-1/2 left-[45%] text-3xl" style={{ fontFamily:"Italiana, sans-serif"}}>hala</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-1/2 h-[20rem] relative">
                            <Image className="w-full h-full" src={'/images/branding/sixthImg.jpg'} alt="img1" width={300} height={300} />
                        </div>
                        <div className="w-1/2 h-[20rem] relative">
                            <Image className="w-full h-full" src={'/images/branding/seventhImg.jpg'} alt="img1" width={300} height={300} />
                            <p className="absolute top-1/2 left-[45%] text-3xl" style={{ fontFamily:"Italiana, sans-serif"}}>hala</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-1/2 h-[20rem] relative">
                            <Image className="w-full h-full" src={'/images/branding/eightImg.png'} alt="img1" width={300} height={300} />
                            <p className="absolute top-1/2 left-[45%] text-3xl" style={{ fontFamily:"Italiana, sans-serif"}}>hala</p>
                        </div>
                        <div className="w-1/2 h-[20rem] relative">
                            <Image className="w-full h-full" src={'/images/branding/elevenImg.png'} alt="img1" width={300} height={300} />
                            <p className="absolute top-1/2 left-[45%] text-3xl" style={{ fontFamily:"Italiana, sans-serif"}}>hala</p>
                        </div>
                        <div className="w-1/2 h-[20rem] relative">
                            <Image className="w-full h-full" src={'/images/branding/twelveImg.png'} alt="img1" width={300} height={300} />
                            <p className="absolute top-1/2 left-[45%] text-3xl" style={{ fontFamily:"Italiana, sans-serif"}}>hala</p>
                        </div>
                    </div>
                </div>
                
            </div>
            </>
    )
}