import React, { FunctionComponent } from 'react'

const MovingTextBanner: FunctionComponent = () => {
    return (
        <div className='bg-[#282B2B] 
            py-12 sm:py-8 md:py-12 lg:py-8
            font-montserrat-bold 
            text-xl sm:text-2xl md:text-3xl 
            text-white flex overflow-hidden'>
            <div className=' animate-marquee-infinite'>
                <span className='mr-16 '>GenerateLabs.App</span>
                <span className='mr-16 '>GenerateLabs.App</span>
                <span className='mr-16 '>GenerateLabs.App</span>
            </div>
            <div className=' animate-marquee-infinite'>
                <span className='mr-16 '>GenerateLabs.App</span>
                <span className='mr-16 '>GenerateLabs.App</span>
                <span className='mr-16 '>GenerateLabs.App</span>
            </div>
            <div className=' animate-marquee-infinite'>
                <span className='mr-16 '>GenerateLabs.App</span>
                <span className='mr-16 '>GenerateLabs.App</span>
                <span className='mr-16 '>GenerateLabs.App</span>
            </div>
            <div className=' animate-marquee-infinite'>
                <span className='mr-16 '>GenerateLabs.App</span>
                <span className='mr-16 '>GenerateLabs.App</span>
                <span className='mr-16 '>GenerateLabs.App</span>
            </div>
        </div>
    )
}

export default MovingTextBanner