import { Italiana } from "next/font/google";
import Image from "next/image";
const italiana = Italiana({
    weight: "400",
    subsets: ['latin']
})
export default function Asuka(){
    return (
        <>
            <div className="flex flex-col test gap-16">
                <div className="h-auto pt-16">
                    <Image className="w-full h-full" src={'/images/asuka/asuka-banner.png'} alt="asuka banner" width={500} height={800}/>
                </div>
                <div className="sm:px-40 px-16 flex flex-col gap-8">
                    <h1 className={`text-6xl ${italiana.className}`}>asuka</h1>
                    <p className="font-extralight">Asuka Couture is a prestigious men's couture brand that curates classic and enduring aesthetics, drawing inspiration from the opulent Indian heritage.</p>
                    <div className="flex flex-col gap-2">
                        <p className="text-2xl">Brief</p>
                        <p className="font-extralight">Asuka Couture is a prestigious men's couture brand that curates classic and enduring aesthetics, drawing inspiration from the opulent Indian heritage.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-2xl">Strategy</p>
                        <p className="font-extralight">Originating from New Delhi, they established their inaugural boutique in Hyderabad due to the city's strong wedding-oriented culture. Their primary goal is to create brand awareness and demonstrate their ability to meet the diverse outfit needs of various age groups.
                            Two generations collide as they stroll through the vibrant aisles of fashion. As they embrace the outfits, the father's eyes light up with nostalgia.
                            Wedding shopping is not just shopping but a reminder of what once was and celebrating the bond a family shares and, in the process, the duo discovers their ideal outfits.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-2xl">Execution</p>
                        <p className="font-extralight">The advertisement was filmed during a busy and eventful day, starting off slowly but gaining momentum as the afternoon progressed. The actors worked seamlessly together, delivering their best performances. The camera and production team adhered to a strict schedule, managing multiple light changes and shooting in 6 different locations within the store. The shoot concluded successfully. In post- production, a slow pace with smooth transitions was employed to evoke a meaningful and emotionally rich experience. The sound design focused on harmonies and used percussion to accentuate emotions. Warm colours were chosen to create a nostalgic ambiance and highlight the vibrant colours and textures of the clothing.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-2xl">Impact</p>
                        <p className="font-extralight">The shop experienced a swift surge in visitors footfall. The advertisement video was showcased on India's biggest screen, Prasad’s multiplex, and other theatres too. The client was highly impressed with the advertisement and its significant impact.</p>
                    </div>
                </div>
                <div className="h-[40rem] px-8">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/fZALi8o19ps?rel=0&controls=1&autoplay=0&mute=0&start=0" allowFullScreen></iframe>
                </div>
                <div className="h-[40rem] px-8">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/69GlChwTlxs?rel=0&controls=1&autoplay=0&mute=0&start=2" allowFullScreen></iframe>
                </div>
            </div>
        </>
    )
}