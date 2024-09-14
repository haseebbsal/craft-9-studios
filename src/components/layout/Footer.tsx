'use client'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsArrowUpCircle } from "react-icons/bs";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoCall } from "react-icons/io5";

import { MdLocationOn } from "react-icons/md";
import Image from "next/image";
export default function Footer() {
    const [display,setDisplay]=useState(false)
    useEffect(()=>{
        if(window.scrollY!=0){
            setDisplay(true)
        }
        window.onscroll=()=>{
            if(window.scrollY!=0){
                setDisplay(true)
            }
            else{
                setDisplay(false)
            }
            // console.log('changed')
        }
        // console.log('changed')
    },[])
    return (
        <footer className="mt-8  pb-8 border-t-4 border-color-1 pt-4">
            <div className="flex px-4 flex-wrap gap-4 justify-center sm:justify-between">
                <div className="flex gap-2 text-2xl text-color-1">
                    <a href="https://www.facebook.com/profile.php?id=61559895543212&mibextid=ZbWKwL" target="_blank"><FaFacebook/></a>
                    <a href="https://www.instagram.com/craft9studios?igsh=MTd6MzN0MTc1YWJrdA==" target="_blank"><FaInstagram/></a>
                    <a href="https://www.linkedin.com/company/craft-9-studios/" target="_blank"><FaLinkedin/></a>
                </div>
                <div className="flex flex-col text-color-1 gap-2">
                    <div className="flex items-center gap-2">
                        <MdLocationOn className="text-2xl p-1 border-2 border-color-1 rounded-full"/>
                        <p className="text-lg">D-38, Block 5, Clifton, Karachi</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoCall className="text-2xl p-1 border-2 border-color-1 rounded-full"/>
                        <p className="text-lg">+92 335 3189762 +92 330 2447474</p>
                    </div>
                </div>
            </div>
            <div style={display?{display:'block'}:{display:'none'}} className="fixed text-4xl text-color-1 hover:bottom-8 transition-all  bottom-4 z-[233] right-4 " onClick={()=>{window.scrollTo(0,0)}}>
            <BsArrowUpCircle />
            </div>
        </footer>
    )
}
