'use client';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { Lato } from "next/font/google";
import Image from "next/image";
import { IoLogoInstagram } from "react-icons/io5";
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
            <div className="flex gap-4 flex-wrap items-center">
                <Link href={'/creatives'}>Creative Work</Link>

                <Dropdown classNames={{content:"!bg-transparent"}}>
                    <DropdownTrigger className="border-none p-0 h-auto">
                        <Button
                        className="text-color-1 text-lg" 
                        variant="bordered" 
                        >
                        Case Studies
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu  className="!bg-zinc-900 text-color-1 rounded-lg" aria-label="Static Actions">
                        <DropdownItem key="new"><Link className=" block w-full" href={`${process.env.NEXT_PUBLIC_BASEURL}/case-studies#rimjhim`}>Rimjhim</Link></DropdownItem>
                        <DropdownItem key="copy"><Link className=" block w-full" href={`${process.env.NEXT_PUBLIC_BASEURL}/case-studies#isuzu`}>Isuzu</Link></DropdownItem>
                        {/* <DropdownItem key="edit">Edit file</DropdownItem> */}
                        {/* <DropdownItem key="delete" className="text-danger" color="danger">
                        Delete file
                        </DropdownItem> */}
                    </DropdownMenu>
                </Dropdown>
                {/* <Link href={'/creatives'}>Case Studies</Link> */}
                <Link href={'/about'}>About Us</Link>
                <Link className=" border-2 border-color-1 p-2" href={'/contact'}>Get A Quote</Link>
                <a target="_blank" href="https://www.instagram.com/thedigital_dhaba?igsh=MTBzdzR3djFqN2xrYw=="  className="text-[#19012b] bg-color-1 flex gap-2 items-center box-border text-lg p-[0.6rem] rounded-none "> <IoLogoInstagram className="text-2xl"/> The Digital Dhaba</a>
            </div>
            <Link href={'/'} className="w-[7rem] block h-[7rem] absolute top-[15%] left-[5%]">
                <Image className="h-full w-full object-contain" src={'/images/loader/Craft 9 Studios Website Logo.svg'} alt="logo" width={100} height={100}/>
            </Link>
        </div>

        <div className={`bg-[#19012b] ${latoFont.className} text-[#c1ff72] items-center text-lg test px-4 border-b-2 border-[#c1ff72] pt-4 pb-2 relative flex sm:hidden gap-4 `}>
            <div className="w-[1%]">
                <MdMenu onClick={()=>setToggleMenu(!toggleMenu)} className="text-4xl cursor-pointer"/>
            </div>
            <div className="w-[90%] flex justify-center">
            <Link href={'/'} className="w-[7rem] h-[7rem] ">
                <Image className="h-full w-full object-contain" src={'/images/loader/Craft 9 Studios Website Logo.svg'} alt="logo" width={100} height={100}/>
            </Link >
            </div>
        </div>

        <div onClick={()=>setToggleMenu(!toggleMenu)} className={`fixed text-[#c1ff72] ${toggleMenu?'block':"hidden"}  sm:hidden z-[999] bg-[#000000b0] h-full w-full top-0 left-0`}>
            <div className="bg-[#19012b] w-1/2 h-full flex flex-col items-center gap-8 p-4">
            <div className="w-full flex justify-center">
            <Link href={'/'} className="w-[7rem] block h-[7rem] ">
                <Image className="h-full w-full object-contain" src={'/images/loader/Craft 9 Studios Website Logo.svg'} alt="logo" width={100} height={100}/>
            </Link>
            </div>
            <div className="flex flex-col gap-4 items-center">
            <Link href={'/creatives'}>Creative Work</Link>
            <Dropdown className="!z-[877]" classNames={{content:"!bg-transparent"}}>
                    <DropdownTrigger className="border-none p-0 h-auto">
                        <Button
                        className="text-color-1 text-lg" 
                        variant="bordered" 
                        >
                        Case Studies
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu  className="!bg-zinc-900 text-color-1 rounded-lg" aria-label="Static Actions">
                    <DropdownItem key="new"><Link className=" block w-full" href={`${process.env.NEXT_PUBLIC_BASEURL}/case-studies#rimjhim`}>Rimjhim</Link></DropdownItem>
                    <DropdownItem key="copy"><Link className=" block w-full" href={`${process.env.NEXT_PUBLIC_BASEURL}/case-studies#isuzu`}>Isuzu</Link></DropdownItem>
                        {/* <DropdownItem key="edit">Edit file</DropdownItem> */}
                        {/* <DropdownItem key="delete" className="text-danger" color="danger">
                        Delete file
                        </DropdownItem> */}
                    </DropdownMenu>
                </Dropdown>
                <Link href={'/about'}>About Us</Link>
                <Link className=" border-2 border-color-1 p-2" href={'/contact'}>Get A Quote</Link>
                <a target="_blank" href="https://www.instagram.com/thedigital_dhaba?igsh=MTBzdzR3djFqN2xrYw=="  className="text-[#19012b] bg-color-1 flex gap-2 items-center box-border text-lg p-[0.6rem] rounded-none "> <IoLogoInstagram className="text-2xl"/> The Digital Dhaba</a>

            </div>
            </div>
        </div>
        </>
    )
}



// sdsd
