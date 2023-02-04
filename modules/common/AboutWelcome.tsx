import React, { FunctionComponent } from 'react'

const SmallScreen:FunctionComponent = () => {
    return (
        <div className='w-full flex flex-col justify-between min-h-[90vh]'>
            <div className='w-full max-w-[1200px] flex justify-center items-start flex-col pt-12 
                    text-white px-4 sm:px-8'>
                <h1 className='text-2xl mb-8 font-montserrat-regular'>Welcome to Voyaji</h1>
                <h2 className='text-4xl font-montserrat-bold'>We're building this together.</h2>
            </div>
            <img src="/assets/images/castle.svg" alt="Castle"/>
        </div>
    );
}

const WideScreen:FunctionComponent = () => {
    return (
        <div className='w-full flex justify-center min-h-[90vh]'
            style={{
                backgroundImage: 'url("assets/images/castle.svg")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
                backgroundSize: '45vw'
            }}>
            <div className='w-full max-w-[1200px] min-h-[90vh] flex justify-center items-start flex-col 
                    text-white font-montserrat-bold px-16'>
                <h1 className='text-5xl mb-8'>Welcome to Voyaji</h1>
                <h2 className='text-6xl'>We're building this <br /> together.</h2>
            </div>
        </div>
    );
}

const AboutWelcome: FunctionComponent = () => {
    return (
        <>
            <div className='md:hidden w-full'>
                <SmallScreen />
            </div>

            <div className='hidden md:block w-full'>
                <WideScreen />
            </div>
        </>
    )
}

export default AboutWelcome