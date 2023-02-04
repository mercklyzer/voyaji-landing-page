import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import Button from './Button'

const Join: FunctionComponent = () => {
    return (
        <div className='w-full min-h-[100vh] flex justify-center'
            style={{
                backgroundImage: 'url("/assets/images/collage.png")',
                background: 'linear-gradient(to bottom, #0E0F26 0%, rgba(0,0,0,0) 5%, rgba(0,0,0,0) 95%, #0E0F26), url("/assets/images/collage.png")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
            <div className='w-full max-w-[1200px] flex flex-col items-center justify-center space-y-12'>
                <h1 className='font-montserrat-bold text-white 
                    text-center
                    text-4xl lg:text-6xl'>Join the Voyage!</h1>
                <Link
                        href="https://map.voyaji.io/"
                    >
                        <Button
                            type="join"
                            styling="h-[50px] md:h-[60px]"
                        />
                    </Link>

            </div>
        </div>
    )
}

export default Join