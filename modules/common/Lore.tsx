import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import Button from './Button'

const SmallScreen: FunctionComponent = () => {
    return (
        <div className='w-full min-h-[100vh] flex justify-center'
            style={{
                backgroundImage: 'url("/assets/images/Princess_Image.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '25% center'
            }}>
            <div className='w-full flex flex-col justify-center items-end 
                px-4 sm:px-8 md:px-16'>
                <div className='flex flex-col items-center space-y-8 w-full'>
                    <h1 className='text-white font-montserrat-bold text-4xl text-center'>Explore the hidden world of Voyaji.</h1>
                    <Link
                        href="https://map.voyaji.io/"
                    >
                        <Button
                            type="enter"
                            styling="h-[50px] md:h-[60px]"
                        />
                    </Link>
                </div>

            </div>
        </div>
    );
}

const WideScreen: FunctionComponent = () => {
    return (
        <div className='w-full min-h-[100vh] flex justify-center'
            style={{
                backgroundImage: 'url("/assets/images/Princess_Image.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'
            }}>
            <div className='w-full max-w-[1200px] flex flex-col justify-center items-end px-16'>
                <div className='max-w-[50%] flex flex-col items-center space-y-12'>
                    <h1 className='text-white font-montserrat-bold text-5xl '>Explore the hidden world of Voyaji.</h1>
                    <Link
                        href="https://map.voyaji.io/"
                    >
                        <Button
                            type="enter"
                            styling="h-[50px] md:h-[60px]"
                        />
                    </Link>
                </div>

            </div>
        </div>
    );
}

const Lore: FunctionComponent = () => {
    return (
        <>
            <div className='lg:hidden w-full'>
                <SmallScreen />
            </div>

            <div className='hidden lg:block w-full'>
                <WideScreen />
            </div>
        </>
    )
}

export default Lore