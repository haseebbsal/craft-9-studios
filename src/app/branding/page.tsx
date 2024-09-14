import Image from "next/image";

export default function Branding() {
    return (
        <>
            <div className="flex test flex-col gap-28">
                <div className="pt-16 flex gap-2 justify-center flex-wrap">
                    <div className="w-[19rem]">
                        <div className="w-[20rem] h-[30rem]">
                            <Image className="w-full h-full" priority src={'/images/home/products.png'} width={300} height={400} alt="img1"/>
                        </div>
                        <div className="min-h-[8rem] bg-[#282828] p-4 flex flex-col gap-2  ">
                            <p style={{ fontFamily: 'Manrope, sans-serif' }} className="text-md uppercase">Koffie Nation</p>
                            <p className="font-extralight text-sm">Koffie Nation is an unique coffee shop. Koffie nation brings a unique blend of these pure beans with all your favourite fruits.</p>
                        </div>

                    </div>
                    <div className="w-[19rem]">
                        <div className="w-[20rem] h-[30rem]">
                            <Image className="w-full h-full" priority src={'/images/home/products.png'} width={300} height={400} alt="img1" />
                        </div>
                        <div className="min-h-[8rem] bg-[#282828] p-4 flex flex-col gap-2  ">
                            <p style={{ fontFamily: 'Manrope, sans-serif' }} className="text-md uppercase">Koffie Nation</p>
                            <p className="font-extralight text-sm">Koffie Nation is an unique coffee shop. Koffie nation brings a unique blend of these pure beans with all your favourite fruits.</p>
                        </div>

                    </div>
                    <div className="w-[19rem]">
                        <div className="w-[20rem] h-[30rem]">
                            <Image className="w-full h-full" priority src={'/images/home/products.png'} width={300} height={400} alt="img1" />
                        </div>
                        <div className="min-h-[8rem] bg-[#282828] p-4 flex flex-col gap-2  ">
                            <p style={{ fontFamily: 'Manrope, sans-serif' }} className="text-md uppercase">Koffie Nation</p>
                            <p className="font-extralight text-sm">Koffie Nation is an unique coffee shop. Koffie nation brings a unique blend of these pure beans with all your favourite fruits.</p>
                        </div>

                    </div>
                    <div className="w-[19rem]">
                        <div className="w-[20rem] h-[30rem]">
                            <Image className="w-full h-full" priority src={'/images/home/products.png'} width={300} height={400} alt="img1" />
                        </div>
                        <div className="min-h-[8rem] bg-[#282828] p-4 flex flex-col gap-2  ">
                            <p style={{ fontFamily: 'Manrope, sans-serif' }} className="text-md uppercase">Koffie Nation</p>
                            <p className="font-extralight text-sm">Koffie Nation is an unique coffee shop. Koffie nation brings a unique blend of these pure beans with all your favourite fruits.</p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col gap-4 p-2">
                    <h1 style={{ fontFamily: 'Italiana, sans-serif ' }} className="text-4xl">misora</h1>
                    <p className="text-sm font-extralight">
                        The world of Misora - Classic style, crafted with love. Misora curate contemporary jewellery especially for women.Their goal is to inspire the women who, in turn, inspire us every single day. We worked on the complete brand identity, staring from the logos to the website and more.
                    </p>
                    <div>
                        <div className="h-[28rem]">
                            <Image className="w-full h-full " priority src={'/images/branding/misora.png'} width={300} height={400} alt="img1" />
                        </div>
                        <div className="flex gap-4">
                            <div className="h-[28rem] w-1/2">
                                <Image className="w-full h-full" priority src={'/images/home/products.png'} width={300} height={400} alt="img1" />
                            </div>
                            <div className="h-[28rem] w-1/2">
                                <Image className="w-full h-full" priority src={'/images/home/products.png'} width={300} height={400} alt="img1" />
                            </div>
                        </div>
                        <div className="h-[38rem]">
                            <Image className="w-full h-full " priority src={'/images/branding/misora-alot.png'} width={300} height={400} alt="img1" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 p-2">
                    <h1 style={{ fontFamily: 'Italiana, sans-serif ' }} className="text-4xl">koffie nation</h1>
                    <p className="text-sm font-extralight">
                        Koffie Nation is an unique coffee shop. Koffie nation brings a unique blend of these pure beans with all your favourite fruits keeping in mind the best possible flavour of the coffee and richness of your favourite fruit.
                    </p>
                    <div>
                        <div className="h-[28rem]">
                            <Image className="w-full h-full " priority src={'/images/branding/misora.png'} width={300} height={400} alt="img1" />
                        </div>
                        <div className="flex gap-4">
                            <div className="h-[28rem] w-1/2">
                                <Image className="w-full h-full" priority src={'/images/home/products.png'} width={300} height={400} alt="img1" />
                            </div>
                            <div className="h-[28rem] w-1/2">
                                <Image className="w-full h-full" priority src={'/images/home/products.png'} width={300} height={400} alt="img1" />
                            </div>
                        </div>
                        <div className="h-[38rem]">
                            <Image className="w-full h-full " priority src={'/images/branding/misora-alot.png'} width={300} height={400} alt="img1" />
                        </div>
                        <div className="flex gap-4">
                            <div className="h-[28rem] w-1/2">
                                <Image className="w-full h-full" priority src={'/images/home/products.png'} width={300} height={400} alt="img1" />
                            </div>
                            <div className="h-[28rem] w-1/2">
                                <Image className="w-full h-full" priority src={'/images/home/products.png'} width={300} height={400} alt="img1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 p-2">
                    <h1 style={{ fontFamily: 'Italiana, sans-serif ' }} className="text-4xl">she.org</h1>
                    <p className="text-sm font-extralight">
                        She.org is a concept NGO by women, with women, for women. We branded this NGO to be vibrant and more modern to attract the younger gen crowd.
                    </p>
                    <div>
                        <div className="flex gap-4">
                            <div className="h-[28rem] w-1/2">
                                <Image className="w-full h-full" priority src={'/images/home/products.png'} width={300} height={400} alt="img1" />
                            </div>
                            <div className="h-[28rem] w-1/2">
                                <Image className="w-full h-full" priority src={'/images/home/products.png'} width={300} height={400} alt="img1" />
                            </div>
                        </div>
                        <div className="h-[38rem]">
                            <Image className="w-full h-full " priority src={'/images/branding/misora-alot.png'} width={300} height={400} alt="img1" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 p-2">
                    <h1 style={{ fontFamily: 'Italiana, sans-serif ' }} className="text-4xl">the rock industry</h1>
                    <p className="text-sm font-extralight">
                        The Rock Industry is a record label that provides recording, music production & music release. We worked on the rebranding  of the logo to give it a more more modern outlook.
                    </p>
                    <div>
                        <div className="h-[28rem]">
                            <Image className="w-full h-full " priority src={'/images/branding/misora.png'} width={300} height={400} alt="img1" />
                        </div>
                        <div className="flex gap-4">
                            <div className="h-[28rem] w-1/2">
                                <Image className="w-full h-full" priority src={'/images/home/products.png'} width={300} height={400} alt="img1" />
                            </div>
                            <div className="h-[28rem] w-1/2">
                                <Image className="w-full h-full" priority src={'/images/home/products.png'} width={300} height={400} alt="img1" />
                            </div>
                        </div>
                        <div className="h-[38rem]">
                            <Image className="w-full h-full " priority src={'/images/branding/misora-alot.png'} width={300} height={400} alt="img1" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}