'use client';
import ContactForm from '../../components/ContactForm'
// import form from './components/ContactForm/form'
import React, {useState} from 'react'

export default function Home() {
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

   <div className='p-4 max-w-3xl mx-auto'>
    <h1 className='text-3xl font-bold'>Contact Us</h1>
    <p>Please fill in the form below</p>

    <ContactForm />
    {/* <form
    onSubmit={handleSubmit} 
    className="py-4 mt-4 border-t flex flex-col gap-5">
        <div>
            <label htmlFor="fullname">Full Name</label>
            <input onChange={(e) => setFullname(e.target.value)} value={fullname} type="text" id="fullname" placeholder="Jane Doe" />
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" id="email" placeholder="jane@gmail.com" />
        </div>

        <div>
            <label htmlFor="message">Your Message</label>
            <textarea onChange={(e) => setMessage(e.target.value)} value={message} className="h-32 p-3 text-white font-bold" id="message" placeholder="Type your message here ..."></textarea>
        </div>
        <button className="bg-green-300" type="submit">Send</button>
    </form>

    <div className="bg-slate-100 flex flex-col">
        <div className="text-red-600 px-5 py-2">Error message</div>
    </div> */}

   </div>
   </>
  )
}