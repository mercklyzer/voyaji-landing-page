import { Button, HTMLHead, Nav } from 'modules/common';
import AboutWelcome from 'modules/common/AboutWelcome';
import Join from 'modules/common/Join';
import Quarter from 'modules/common/layouts/Quarter';
import Lore from 'modules/common/Lore';
import Mission from 'modules/common/Mission';
import MovingTextBanner from 'modules/common/MovingTextBanner';
import Team from 'modules/common/Team';
import Vision from 'modules/common/Vision';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const About: React.FunctionComponent = () => {
    return (
        <main>
            <HTMLHead>
                <title> Voyaji | About Us </title>
            </HTMLHead>


            <section className='pt-[10vh] bg-navy min-h-[100vh] relative flex items-center flex-col overflow-x-hidden'>

                <AboutWelcome />
                <MovingTextBanner />

                <img src="/assets/images/element_generatelabsapp.svg" alt="Build, Create, Generate" />

                <Lore />
                <Vision />



                <Team />
                <Mission />
                <Join />




            </section>
        </main>
    )
}

export default About;