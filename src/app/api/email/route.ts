import EmailTemplate from "@/components/Email";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:NextRequest){
    // const {
    //     from,
    //     body
    // }=await req.json()
    
    const { data, error } = await resend.emails.send({
        from: 'haskybeast@gmail.com',
        to: ['haskybeast@gmail.com'],
        subject: 'Hello world',
        react: EmailTemplate(),
      });
    
      if (error) {
        return NextResponse.json(error);
      }
    
      return NextResponse.json(data);
}