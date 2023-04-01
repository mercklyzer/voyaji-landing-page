import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import Button from './Button'

const Mission: FunctionComponent = () => {
    return (
        <div className='w-full min-h-[100vh] flex justify-center'
            style={{
                backgroundImage: 'url("/assets/images/book.svg")',
                background: 'linear-gradient(to bottom, #0E0F26 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 90%, #0E0F26), url("/assets/images/book.svg")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <div className='w-full max-w-[1200px] flex flex-col
                items-center lg:items-start
                justify-center
                space-y-8 lg:space-y-12
                px-4 sm:px-8 md:px-16'>
                <h1 className='font-montserrat-bold text-white
                    text-4xl lg:text-6xl'>Our Mission</h1>
                <p className='text-white font-montserrat-regular

                    max-w-[90%] lg:max-w-[50%]
                    text-center lg:text-left
                    text-xl lg:text-2xl'>
                    We're on a mission to build the future of the Metaverse powered by the Creator Industry.
                </p>

            </div>
        </div>
    )
}

export default Mission
