import React from 'react'
import { Badge } from '..'
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiVite } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-start md:items-center text-white text-balance md:text-center gap-8 my-10 min-w-full px-8'>
            <div className='w-full'>
                <div className='w-44 md:mx-auto'>
                    <Badge variant="soft" color="sky" size="sm" radius="xl" >Introducing Percept UI</Badge>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-8 xl:px-36'>
                <h1 className='lg:text-7xl md:text-5xl sm:text-5xl text-5xl font-bold'>A Modern React Component Library That Every Developer Deserves</h1>
                <p className='lg:text-2xl md:text-xl sm:text-xl text-xl'>Percept UI is a modern React component library that helps you build fast, accessible, and beautiful web applications.</p>
            </div>
            <div className='flex max-md:flex-col md:gap-4 gap-2 w-full text-center md:px-28 justify-center items-center'>
                <a href='/docs/getting-started' className='bg-white hover:bg-slate-200 text-black px-6 py-2 rounded-md w-full md:w-1/2 lg:w-1/3'>Get Started</a>
                <a href='#'
                    className='border border-slate-500 hover:bg-slate-800 text-white px-6 py-2 rounded-md w-full md:w-1/2 lg:w-1/3'>Learn More
                </a>
            </div>
            <div className='flex mx-auto gap-3 text-3xl'>
                <FaReact />
                <SiTypescript />
                <IoLogoJavascript />
                <SiTailwindcss />
                <SiVite />
            </div>
        </div>
    )
}

export default Hero
