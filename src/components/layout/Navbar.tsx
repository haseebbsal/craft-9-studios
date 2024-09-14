'use client';
import { Button } from "@nextui-org/react";
import { Lato } from "next/font/google";
import Image from "next/image";
const latoFont=Lato({
    weight:"700",
    subsets:['latin']
})
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdKeyboardArrowDown, MdMenu } from "react-icons/md";
export default function Navbarr() {
    const [dropOption, setDropOption] = useState<null | '1' | '2'>(null)
    const [toggleMenu,setToggleMenu]=useState(false)
    const pathname=usePathname()
    return (
        <>
        <div className={`bg-[#19012b] ${latoFont.className} relative text-[#c1ff72] text-lg test px-16 border-b-2 border-[#c1ff72] pt-4 pb-2 relative hidden sm:flex sm:justify-end  w-[100vw]`}>
            <div></div>
            <div className="flex gap-4 flex-wrap items-end">
                <Link href={'/creatives'}>Creative Work</Link>
                <Link href={'/creatives'}>Case Studies</Link>
                <Link href={'/creatives'}>About Us</Link>
                <Link href={'/creatives'}>Contact Us</Link>
                <Button className="text-[#19012b] bg-[#c1ff72] box-border text-lg p-4 rounded-none ">Get A Quote</Button>
            </div>
            <Link href={'/'} className="w-[6rem] block h-[6rem] absolute top-[25%] left-[5%]">
                <Image className="h-full w-full object-contain" src={'/images/loader/Craft 9 (White).svg'} alt="logo" width={100} height={100}/>
            </Link>
        </div>

        <div className={`bg-[#19012b] ${latoFont.className} text-[#c1ff72] items-center text-lg test px-4 border-b-2 border-[#c1ff72] pt-4 pb-2 relative flex sm:hidden gap-4 `}>
            <div className="w-[1%]">
                <MdMenu onClick={()=>setToggleMenu(!toggleMenu)} className="text-4xl cursor-pointer"/>
            </div>
            <div className="w-[90%] flex justify-center">
            <Link href={'/'} className="w-[6rem] h-[6rem] ">
                <Image className="h-full w-full object-contain" src={'/images/loader/Craft 9 (White).svg'} alt="logo" width={100} height={100}/>
            </Link >
            </div>
        </div>

        <div onClick={()=>setToggleMenu(!toggleMenu)} className={`fixed text-[#c1ff72] ${toggleMenu?'block':"hidden"}  sm:hidden z-[43434344] bg-[#000000b0] h-full w-full top-0 left-0`}>
            <div className="bg-[#19012b] w-1/2 h-full flex flex-col items-center gap-8 p-4">
            <div className="w-full flex justify-center">
            <Link href={'/'} className="w-[6rem] block h-[6rem] ">
                <Image className="h-full w-full object-contain" src={'/images/loader/Craft 9 (White).svg'} alt="logo" width={100} height={100}/>
            </Link>
            </div>
            <div className="flex flex-col gap-4 items-center">
            <Link href={'/creatives'}>Creative Work</Link>
                <Link href={'/creatives'}>Case Studies</Link>
                <Link href={'/creatives'}>About Us</Link>
                <Link href={'/creatives'}>Contact Us</Link>
                <Button className="text-[#19012b] bg-[#c1ff72] box-border text-lg p-4 rounded-none ">Get A Quote</Button>
            </div>
            </div>
        </div>
        </>
    )
}



// sdsd
