import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-between items-center w-full p-4'>
            <div className='flex gap-2'>
                {new Date().getFullYear()} ©{' '}
                <Link href={'/'}>
                    Percept UI
                </Link>
            </div>
            <div className='flex gap-1'>
                Made by - <Link href={'https://github.com/CuriousCoder00'}>
                    Kapil
                </Link> &
                <Link href={'https://github.com/rishang14'}>
                    Rishang
                </Link>
            </div>
        </div>
    )
}

export default Footer
