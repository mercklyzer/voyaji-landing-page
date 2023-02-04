import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import Button from './Button'

const Team: FunctionComponent = () => {
    return (
        <div className='w-full min-h-[100vh] justify-center
            hidden lg:flex'
            style={{
                backgroundImage: 'url("/assets/images/girl_image.png")',
                background: 'linear-gradient(to bottom, #0E0F26 0%, rgba(0,0,0,0) 5%, rgba(0,0,0,0) 95%, #0E0F26), url("/assets/images/girl_image.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <div className='w-full max-w-[1200px] flex flex-col items-start justify-center space-y-12
                px-4 sm:px-8 md:px-16'>
                <h1 className='font-montserrat-bold text-white 
                    text-center lg:text-left
                    w-full
                    text-4xl lg:text-6xl'>The Team</h1>
                <p className='text-white font-montserrat-regular text-2xl max-w-[50%]'>
                    A project by the exclusive metaverse company -  GenerateLabs.io. Generate Labs aims to empower artists as well as create a space and a platform for creators to engage with other like-minded individuals. The Generate Labs Team is a firm believers that artists, designers and creators are building the way for the upcoming Web 3.0 generation.
                </p>

            </div>
        </div>
    )
}

export default Team