import EmailTemplate from "@/components/Email";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:NextRequest){
  const formData = require('form-data');
  const Mailgun = require('mailgun.js');
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere'});
  const data=await mg.messages.create('sandbox812de5aec1f346f984d3961cc30a3302.mailgun.org', {
  	from: "Excited User <mailgun@sandbox812de5aec1f346f984d3961cc30a3302.mailgun.org>",
  	to: ["test@example.com"],
  	subject: "Hello",
  	text: "Testing some Mailgun awesomeness!",
  	html: "<h1>Testing some Mailgun awesomeness!</h1>"
  })
    // const {
    //     from,
    //     body
    // }=await req.json()
    
    // const { data, error } = await resend.emails.send({
    //     from: 'haskybeast@gmail.com',
    //     to: ['haskybeast@gmail.com'],
    //     subject: 'Hello world',
    //     react: EmailTemplate(),
    //   });
    
    //   if (error) {
    //     return NextResponse.json(error);
    //   }
    // const data={
    //   "sender": "email@example.com",
    //   "to": [
    //     "haskybeast@gmail.com"
    //   ],
    //   "subject": "My First Email",
    //   "text_body": "Hello from the other side.",
    // }
    // const sendEmail=await axios.post('https://api.smtp2go.com/v3/email/send',data,{headers:{"X-Smtp2go-Api-Key":`${process.env.SMTPGO_API_KEY}`,"Content-Type":"application/json"}})
    
    
      return NextResponse.json(data);
}