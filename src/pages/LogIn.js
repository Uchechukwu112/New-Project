// import Head from '.next/Head'
// import { Main } from 'next/document'
// import { FaRegEnvelop } from "react-icons/fa";
// import  { MdLockOutline } from 'react-icons/md';

import React from 'react'
import { FaRegEnvelope } from 'react-icons/fa';
import  { MdLockOutline } from 'react-icons/md';
// import '../styles/index.css';
import '../../public/globals.css'
import '../../public/customstyle.css'


export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
            {/* <title>Create Next App</title>
            <link rel='icon' href='/favicon.ico' />
            */}
            <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
            <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl justify-center'>
                <div className='w-3/5 p-5'>
                    <div className='py-10'>
                        <h2 className='text-3xl font-bold text-green-500 mb-2'>Sign in to account</h2>
                        <div className='border-2 w-10 border-green-500 inline-block mb-2'></div>
                        <div className='flex flex-col items-center'>
                            <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'><FaRegEnvelope className='text-gray-400 m-2'/>
                                <input type='email' name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1' />
                            </div>
                            <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'><MdLockOutline className='text-gray-400 m-2'/>
                               <input type='password' name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1'/>
                            </div>
                            <div className='flex justify-between w-64 mb-5'>
                                <label className='flex items-center text-xs'><input type='checkbox' name='remember' className='mr-1'/>Remember me</label>
                                <a href='#' className='text-xs'>Forgot Password?</a>
                            </div>
                            <a href='#' className='border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white'>Sign In</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
       
    )
}