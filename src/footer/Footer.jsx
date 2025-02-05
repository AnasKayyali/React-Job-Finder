import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className="grid bg-blue-500 mt-10 py-10 px-24 gap-y-20">
        <div className="grid gap-x-24 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-y-10">
            <div className="grid grid-cols-1 gap-y-3 md:col-span-2">
                <div className="flex items-center gap-x-2">
                    <img className="w-12 rounded-full" src='/assets/creative-job-hunter-vector-logo-design-template-vector-illustration_227744-685.avif' />  
                    <h1 className="text-2xl" style={{fontFamily:'Bangers'}}>Job-Finder</h1>  
                </div>
                <p className="text-white">
                    in 2023 you need to this wonderfull to het your best job and you need our services to communicate with all members of job society. 
                    <br></br>
                    <br></br>
                    our mission is to make the world of jobs more comfortable and effecient for both Combanies and people who looks for job.    
                </p>
                <div className="flex gap-x-1 text-2xl mt-2">
                    <Link to="/"> <AiFillFacebook /> </Link>
                    <Link to="/"> <AiFillLinkedin /> </Link>
                    <Link to="/"> <AiFillInstagram /> </Link>
                    <Link to="/"> <AiFillTwitterCircle /> </Link>
                </div>
            </div>

            <div className="flex flex-col gap-y-1 text-white">
                <h1 className="mb-3 text-black text-lg font-bold" style={{fontFamily:"Cuprum"}}>About Us</h1>
                <Link className="hover:underline" to='/'>Jobs</Link>
                <Link className="hover:underline" to='/'>Companies</Link>
                <Link className="hover:underline" to='/'>Employees</Link>
                <Link className="hover:underline" to='/'>Employees</Link>
            </div>
        
            <div className="flex flex-col gap-y-1 text-white">
                <h1 className="mb-3 text-black text-lg font-bold" style={{fontFamily:"Cuprum"}}>Partners</h1>
                <Link className="hover:underline" to='/'>Jobs</Link>
                <Link className="hover:underline" to='/'>Companies</Link>
                <Link className="hover:underline" to='/'>Employees</Link>
                <Link className="hover:underline" to='/'>Employees</Link>
            </div>
        
            <div className="flex flex-col gap-y-1 text-white"> 
                <h1 className="mb-3 text-black text-lg font-bold" style={{fontFamily:"Cuprum"}}>Future</h1>
                <Link className="hover:underline" to='/'>Jobs</Link>
                <Link className="hover:underline" to='/'>Companies</Link>
                <Link className="hover:underline" to='/'>Employees</Link>
                <Link className="hover:underline" to='/'>Employees</Link>
            </div>
        
            <div className="flex flex-col gap-y-1 text-white">
                <h1 className="mb-3 text-black text-lg font-bold" style={{fontFamily:"Cuprum"}}>Contact</h1>
                <Link className="hover:underline" to='/'>Jobs</Link>
                <Link className="hover:underline" to='/'>Companies</Link>
                <Link className="hover:underline" to='/'>Employees</Link>
                <Link className="hover:underline" to='/'>Employees</Link>
                <Link className="hover:underline" to='/'>Employees</Link>
            </div>
        </div>  
        <div className="flex justify-center bg-blue-500 text-white text-lg" style={{fontFamily:"Cuprum"}}>
            Copyright © 2023 All rights reserved
        </div>
    </div>      
    </>
  )
}

export default Footer