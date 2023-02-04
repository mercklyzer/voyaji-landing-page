import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import Button from './Button'
import Quarter from './layouts/Quarter'

const Vision: FunctionComponent = () => {
    return (
        <section className='px-4 sm:px-8 md:px-16'>
            <h1 className='font-montserrat-bold text-white my-24 text-center
                text-4xl lg:text-6xl'>The Vision for 2023</h1>
            <div className='space-y-8 mb-24'>
                <Quarter className='
                    space-y-12 lg:space-y-6'>
                    <div className='grid 
                        grid-cols-1 grid-rows-2
                        lg:grid-cols-3 lg:grid-rows-1
                        '>
                        <div className='font-montserrat-bold text-8xl 
                            flex items-center justify-center lg:justify-start
                            text-center lg:text-left'>Q1</div>
                        <div className='col-span-2 font-montserrat-regular text-lg space-y-6'>
                            <div>
                                Greetings to all Voyagers who are early. Welcome to the Portal. We're building the blocks of Voyaji Official and Generate Labs.
                            </div>
                            <div>
                                This shall also mark the start of announcements with regards the Marketing and the Official Introductions of the Project.
                            </div>
                        </div>
                    </div>

                    <div className='grid
                        grid-cols-1 grid-rows-2
                        lg:grid-cols-3 lg:grid-rows-1 gap-12'>
                        <div className='flex justify-center items-center w-full
                            lg:justify-start'>
                            <img src="/assets/images/generatelabsapp_logo.svg" alt="Generate Labs Logo"/>
                        </div>
                        <div className='col-span-2 font-montserrat-regular 
                            text-lg lg:text-2xl'>
                            Introducing GenerateLabs.App . A no code tool for creators, businesses, artists and designers to build , create and generate NFTs.
                        </div>
                    </div>
                </Quarter>

                <Quarter className='grid grid-cols-1
                    lg:grid-cols-3'>
                    <div className='col-span-2 font-montserrat-regular space-y-6 
                        order-last lg:order-1
                        text-lg lg:text-2xl'>
                        <div>
                            The launch of GenerateLabs.App Beta to Voyaji NFT Holders.
                        </div>
                        <div>
                            Announcements with regard's Voyaji's Future plans for Development.
                        </div>
                    </div>
                    <div className='font-montserrat-bold text-8xl flex 
                        justify-center lg:justify-end 
                        items-center order-2'>Q2</div>
                </Quarter>

                <Quarter className='grid 
                    grid-cols-1 lg:grid-cols-3'>
                    <div className='font-montserrat-bold text-8xl flex 
                        justify-center lg:justify-start 
                        items-center'>Q3</div>

                    <div className='col-span-2 font-montserrat-regular space-y-6
                        text-lg lg:text-2xl '>
                        <div>
                            Opening of GenerateLabs.App to Public Access. Announcement of future plans with regards Voyaji and development of Web3 Apps that are inline with the vision to empower more creators in the Metaverse.
                        </div>
                    </div>
                </Quarter>

                <Quarter className='grid 
                    grid-cols-1 lg:grid-cols-3'>
                    <div className='col-span-2 font-montserrat-regular text-2xl space-y-6 flex items-center
                        order-last lg:order-1'>
                        Further advancement of the Marketing Plans, announcements and software for GenerateLabs.App.
                    </div>
                    <div className='font-montserrat-bold text-8xl flex items-center
                        justify-center lg:justify-end
                        order-1 lg:order-last'>Q4</div>

                </Quarter>
            </div>
        </section>
    )
}

export default Vision