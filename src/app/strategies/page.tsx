import { IoCaretForwardOutline } from "react-icons/io5";
import { Italiana } from "next/font/google";
import Image from "next/image";
const italiana = Italiana({
    weight: "400",
    subsets: ['latin']
})
export default function Products() {
    return (
        <>
            <div className="flex test flex-col gap-16">
                <div className="pt-16 sm:pl-44">
                    <div className="flex gap-2 justify-center sm:justify-start items-center">
                        <div className="flex flex-col">
                            <p className={`text-[5rem] ${italiana.className}`}>explore</p>
                            <p className="self-end text-xl text-gray-500">Products</p>
                        </div>
                        <IoCaretForwardOutline className="text-2xl"/>
                    </div>
                </div>
                <div className="flex justify-center gap-4 flex-wrap">
                    <div className="min-w-[20rem] min-h-[30rem]">
                        <Image  className="w-full h-full object-fill" src={'/images/products/individual.png'} width={100} height={250} alt="individual"/>
                    </div>
                    <div className="min-w-[20rem] min-h-[30rem]">
                        <Image className="w-full h-full object-fill" src={'/images/products/individual.png'} width={100} height={250} alt="individual" />
                    </div>
                    <div className="min-w-[20rem] min-h-[30rem]">
                        <Image className="w-full h-full object-fill" src={'/images/products/individual.png'} width={100} height={250} alt="individual" />
                    </div>
                    <div className="min-w-[20rem] min-h-[30rem]">
                        <Image className="w-full h-full object-fill" src={'/images/products/individual.png'} width={100} height={250} alt="individual" />
                    </div>
                    <div className="min-w-[20rem] min-h-[30rem]">
                        <Image className="w-full h-full object-fill" src={'/images/products/individual.png'} width={100} height={250} alt="individual" />
                    </div>
                    <div className="min-w-[20rem] min-h-[30rem]">
                        <Image className="w-full h-full object-fill" src={'/images/products/individual.png'} width={100} height={250} alt="individual" />
                    </div><div className="min-w-[20rem] min-h-[30rem]">
                        <Image className="w-full h-full object-fill" src={'/images/products/individual.png'} width={100} height={250} alt="individual" />
                    </div>
                    <div className="min-w-[20rem] min-h-[30rem]">
                        <Image className="w-full h-full object-fill" src={'/images/products/individual.png'} width={100} height={250} alt="individual" />
                    </div>
                    <div className="min-w-[20rem] min-h-[30rem]">
                        <Image className="w-full h-full object-fill" src={'/images/products/individual.png'} width={100} height={250} alt="individual" />
                    </div>
                </div>
            </div>
        </>
    )
}