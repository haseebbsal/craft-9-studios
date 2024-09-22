import EmailTemplate from "@/components/Email";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
// import { Resend } from "resend";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:NextRequest){
  const {firstName,lastName,email,company,job,phone,description}=await req.json()

  try {
    const { data, error } = await resend.emails.send({
      from: 'info@craft9studios.com',
      to: ['info@craft9studios.com'],
      subject: 'Hello world',
      react: EmailTemplate({firstName,secondName:lastName,job,phone,description,emailAddress:email,company}),
      replyTo:email
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
