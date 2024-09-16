import Image from 'next/image'
import React from 'react'
import Logo from '@/components//Logo'
import Link from 'next/link'
import { BiLogoGithub } from "react-icons/bi"
const Navbar = () => {
    return (
        <header className='flex justify-between items-center font-[family-name:var(--font-geist-sans)] text-white px-10 border-b-2 border-b-slate-800'>
            <Link href={"/"} className="flex items-center justify-center gap-2">
                <Logo />
                <span className="my-0 font-bold text-2xl">Percept UI</span>
            </Link>
            <nav className='flex justify-between items-center gap-3'>
                <a href='/docs/getting-started' className='text-[var(--geist-foreground)]'>Docs</a>
                <a href='https://github.com/curiouscoder00/percept-ui' className='text-[var(--geist-foreground)]'>
                    <BiLogoGithub className='text-xl' />
                </a>
            </nav>
        </header>
    )
}

export default Navbar
