'use client';

import React, { useState } from "react";
// import form from "next/form";

export default function ContactForm() {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Full name: ", fullname);
        console.log("Email: ", email);
            console.log("Message: ", message);
    }
    return (

        <>
        <form
        onSubmit={handleSubmit} 
        className="py-4 mt-4 border-t flex flex-col gap-5">
            <div>
                <label htmlFor="fullname">Full Name</label>
                <input onChange={(e) => setFullname(e.target.value)} value={fullname} type="text" id="fullname" placeholder="John Doe" />
            </div>
    
            <div>
                <label htmlFor="email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" id="email" placeholder="johndoe@gmail.com" />
            </div>
    
            <div>
                <label htmlFor="message">Your Message</label>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message} className="h-32 p-3" id="message" placeholder="Type your message here..."></textarea>
            </div>
            <button className="bg-green-300 p-3 text-white font-bold" type="submit">Send</button>
        </form>
    
        <div className="bg-slate-100 flex flex-col">
            <div className="text-red-600 px-5 py-2">Error message</div>
        </div>
        </>
    )
}