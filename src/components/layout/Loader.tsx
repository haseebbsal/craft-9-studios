'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Loader() {
    const loaderRef: React.RefObject<HTMLDivElement> =useRef() as any
    useEffect(() => {
        const intervalId=setInterval(() => {
            
        },)
        setTimeout(() => {
            let count = 0;
            const intervalId = setInterval(() => {
                if (count == 101) {
                    clearInterval(intervalId)
                    loaderRef.current!.style.display='none'
                    document.getElementById('content')!.style.display='block'
                }
                loaderRef.current!.style.transform = `translateX(${count}%)`
                count+=1
            },5)
        },2000)
    },[])
    return (
        <>
            <div ref={loaderRef} className=" loader absolute flex z-[2222222222222222] justify-center items-center bg-black w-full h-full top-0">
                <div className="h-auto w-auto flex justify-center">
                    <Image className=" animate-bounce" priority src={'/images/loader/Craft 9 (White).svg'} alt="loader" width={300} height={400}/>
                </div>
            </div>
        </>
    )
}