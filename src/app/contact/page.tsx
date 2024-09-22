'use client'
import { Button, Checkbox, CheckboxGroup, Input, Textarea } from "@nextui-org/react";
import { Italiana } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
const italiana = Italiana({
    weight: "400",
    subsets: ['latin']
})

export default function ContactUs() {
    const[selectedService,setSelectedService]=useState<any>([])
    const [submitted,setSubmitted]=useState(false)
    const {handleSubmit,register,formState:{errors}}=useForm({
        defaultValues:{
            firstName:"",
            lastName:"",
            email:"",
            company:"",
            job:"",
            phone:"",
            description:""
        }
    })
    function submitForm(e:FieldValues){
        console.log('data',e)
    }
    return (
        <>
            <div className="flex flex-col  gap-16 sm:pt-20 pt-8 ">
                <div className="sm:px-16 px-4 flex flex-col gap-4">
                <h2 className="sm:text-5xl text-color-1 text-4xl font-bold">Please get in touch and tell us a bit more about you:</h2>
                <form onSubmit={handleSubmit(submitForm)} className="w-full flex flex-col gap-4" >
                    <div className="sm:w-1/2 flex flex-col gap-4">
                    <div className="flex gap-8">
                        <Input isInvalid={!!errors.firstName} errorMessage={errors.firstName?.message} {...register('firstName',{required:"Enter First Name"})} type="text" classNames={{label:"!text-white"}} label="First Name*" labelPlacement="outside" placeholder="Enter First Name"/>
                        <Input isInvalid={!!errors.lastName} errorMessage={errors.lastName?.message} {...register('lastName',{required:"Enter Last Name"})} type="text" classNames={{label:"!text-white"}} label="Last Name*" labelPlacement="outside" placeholder="Enter Last Name"/>

                    </div>
                    <Input isInvalid={!!errors.email} errorMessage={errors.email?.message} {...register('email',{required:"Enter Email"})} type="email" classNames={{label:"!text-white"}} label="Email Address*" labelPlacement="outside" placeholder="Enter Email Address"/>
                    <Input isInvalid={!!errors.company} errorMessage={errors.company?.message} {...register('company',{required:"Enter Company"})} type="text" classNames={{label:"!text-white"}} label="Company*" labelPlacement="outside" placeholder="Enter Company"/>
                    <Input isInvalid={!!errors.job} errorMessage={errors.job?.message} {...register('job',{required:"Enter Job Title"})} type="text" classNames={{label:"!text-white"}} label="Job Title*" labelPlacement="outside" placeholder="Enter Job Title"/>
                    <Input isInvalid={!!errors.phone} errorMessage={errors.phone?.message} {...register('phone',{required:"Enter Phone Number"})} type="text" classNames={{label:"!text-white"}} label="Phone*" labelPlacement="outside" placeholder="Enter Phone"/>

                    </div>
                    <Textarea isInvalid={!!errors.description} errorMessage={errors.description?.message} {...register('description',{required:"Enter Description"})} className="sm:w-[70%]" classNames={{label:"!text-white"}} label="Tell us a little bit about who you are and what you would like to achieve by working with a marketing agency. *" labelPlacement="outside" placeholder="Write..."/>
                    <Button type="submit" className="bg-black text-white min-w-[8rem] self-center p-8">YES, LET’S TALK</Button>
                </form>
                </div>
            </div>
        </>
    )
}


