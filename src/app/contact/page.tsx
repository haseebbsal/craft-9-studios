'use client'
import { Checkbox, CheckboxGroup, Input, Textarea } from "@nextui-org/react";
import { Italiana } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
const italiana = Italiana({
    weight: "400",
    subsets: ['latin']
})

export default function ContactUs() {
    const[selectedService,setSelectedService]=useState<any>([])
    const [submitted,setSubmitted]=useState(false)
    return (
        <>
            <div className="flex  test flex-col gap-20">
                <div className="pt-16 px-10 flex flex-col gap-4 items-center">
                    <div className="flex gap-4 sm:flex-nowrap flex-wrap justify-center">
                    <form className="sm:w-[70%] w-full" id="quote" onSubmit={(e)=>{
                        e.preventDefault()
                        setSubmitted(true)
                        console.log('Submitted')
                    }} >
                        <h1 className={`${italiana.className} text-6xl `}>Connect With Us</h1>
                        <div className="mt-8  flex flex-col gap-[1.5rem] border-2 border-white p-8 rounded-lg">
                        <div className="flex sm:flex-nowrap flex-wrap gap-4">
                                <div className="flex flex-wrap gap-[1.5rem] sm:w-1/2">
                            <Input required type="text" label="Full Name" placeholder="Enter Full Name" labelPlacement="outside" variant="bordered" className=" !w-full"/>
                                <Input required type="email" label="Email" placeholder="Enter Email" labelPlacement="outside" variant="bordered" className=" !w-full"/>
                                <Input required type="text" label="Company" placeholder="Enter Company" labelPlacement="outside" variant="bordered" className=" !w-full"/>
                                <Input required type="text" label="Job Title" placeholder="Enter Job Title" labelPlacement="outside" variant="bordered" className=" !w-full"/>
                                <Input required type="text" label="Phone" placeholder="Enter Phone Number" labelPlacement="outside" variant="bordered" className=" !w-full"/>
                                </div>
                            <CheckboxGroup
                            className="sm:w-1/2"
                        label="Select Services"
                        isInvalid={selectedService.length==0 && submitted}
                        onChange={(e)=>{
                            console.log(e)
                            setSelectedService(e)
                        }}
                        errorMessage="Please Select A Service"
                        value={selectedService}
                        classNames={{errorMessage:"!text-red-600"}}
                        // defaultValue={["buenos-aires", "london"]}
                        >
                        <Checkbox value="buenos-aires">Website Development</Checkbox>
                        <Checkbox value="sydney">SEO Management</Checkbox>
                        <Checkbox value="san-francisco">Graphic Designing</Checkbox>
                        <Checkbox value="london">Social Media Management</Checkbox>
                        {/* <Checkbox value="tokyo"></Checkbox> */}
                            </CheckboxGroup>
                        </div>
                    
                        
                        <p className="text-md">Tell us a little bit about you are and what you would like to achieve by working with Craft 9 Studios.</p>
                        <Textarea
                        required
                        // label="Description"
                        // labelPlacement="outside"
                        // placeholder="Enter your description"
                        // defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                        className="w-full"
                        variant="bordered"
                        minRows={2}
                        />

                    
                        <button type="submit" className="bg-[#b7ff00] px-4 py-2 min-w-[10rem] w-max rounded-lg block !text-white">Submit</button>
                        </div>
                    </form>
                    <div className="flex flex-col items-center w-[30%] gap-4">
                    <div className="w-[15rem] h-[15rem]">
                    <MdEmail  className="w-full h-full"/>
                        {/* <Image priority className="w-full h-full" src={'/images/contact/contact-us.jpg'} alt="contact us" width={200} height={300}/> */}
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <p>Feel free to drop us an mail at :</p>
                        <p>info@craft9studios.com</p>
                    </div>
                    </div>
                    
                    
                    </div>
                    
                    {/* <div className="flex gap-16">
                        <a href="https://wa.me/+923073498849" target="_blank" className="px-4 py-2 border rounded-full cursor-pointer">Become a client</a>
                        <button className="px-4 py-2 border rounded-full">Join our family</button>
                    </div> */}
                </div>
            </div>
        </>
    )
}


