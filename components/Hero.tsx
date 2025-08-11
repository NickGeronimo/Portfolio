"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './TextGenerateEffect'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { GlareCard } from './ui/GlareCard'
import { useRef } from 'react'


const Hero = () => {

    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-10 h-screen' fill="white" />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple" />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue" />
            </div>


            <div className="flex">
                <div className='flex md:order-2 md:w-1/2 justify-center'>
                    <GlareCard className="relative flex flex-col items-center justify-between border-8 border-pokemonyellow rounded-lg p-2 text-black bg-blue-600">
                        <div className="absolute inset-0 bg-blend-color bg-noise-pattern bg-cover"></div>
                        <div className="relative z-10 w-full">
                            {/* Top Section */}
                            <div className="flex justify-between items-center w-full mb-2">
                                <div className="flex space-x-2 items-center">
                                    {/* <div className="bg-gray-400 text-black rounded rounded-l-xl px-2 -ml-3">Dev</div> */}
                                    <div className='px-1'></div>
                                    <div className="font-bold text-xl">Nick</div>
                                </div>
                                <div className="flex space-x-4 items-center">
                                    <div className="text-xl font-bold">120 HP</div>
                                    <img src="./gitblack.svg" alt="Type Symbol" className="w-6 h-6" />
                                </div>
                            </div>
                            {/* Main Image */}
                            <div className="flex justify-center w-full ">
                
                                <div className="w-11/12 aspect-4/3 max-w-fit bg-black flex items-center justify-center border-4 border-pokemonyellow shadow-xl">
                
                                    <img
                                        className="object-contain w-full h-full"
                                        src="/me2.png"
                                        alt="Pokemon Card Image"
                                    />
                                </div>
                            </div>
                            {/* Stats Section */}
                            <div id="stats" className='bg-pokemonyellow rounded-b-sm text-xs py-1 mb-2 text-center flex justify-center w-4/5 mx-auto'>
                                Web Developer
                            </div>
                            {/* Abilities Section */}
                            <div id="abilities" className="w-full px-2">
                                <div id="firstAbility" className="w-full">
                                    <div className="flex justify-between items-center">
                                        <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center">
                                            <img src="./computer.svg" alt="Type Symbol" className="w-3/5 h-3/5" />
                                        </div>
                                        <div className="flex-1 mx-2">
                                            <h1 className='font-bold text-center'>Push On A Friday</h1>
                                            <p className='text-xs text-center'>Flip a coin. If tails, this ability deals 404 damage to the code base</p>
                                        </div>
                                        <span className="font-bold">60</span>
                                    </div>
                                </div>
                                <hr className=" m-2" />
                                <div id="secondAbility" className="w-full">
                                    <div className="flex justify-between">
                                        <span></span>
                                        <h1 className='font-bold'>Bug Squash</h1>
                                        <span className="font-bold">20</span>
                                    </div>
                                </div>
                                <hr className=" m-2" />
                            </div>
                            {/* Bottom Section */}
                            <div className="w-full text-sm">
                                <div className="flex justify-between mb-2">
                                    <div className="flex flex-col items-center">
                                        <div>Weakness</div>
                                        <div className="w-8 h-8  flex items-center justify-center">
                                            <img src="./coffee.svg" alt="Type Symbol" className="" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div>Resistance</div>
                                        <div className="w-8 h-8  flex items-center justify-center">
                                            <img src="./sleep.svg" alt="Type Symbol" className="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full text-xs mt-2">
                                <div className="text-center"> Thrives on challenging problems and creative solutions.</div>
                            </div>
                        </div>
                    </GlareCard>
                </div>
                <div className="flex md:order-1 md:w-1/2 justify-center relative my-20 z-10">
                    <div className="max-w-[89vw] m:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                        <TextGenerateEffect
                            className='text-center text-[80px] md:text-5xl lg: text-8xl'
                            words="Hi, I&apos;m Nick"
                        />
                            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"> A Web  & Ecommerce Developer.</p>
                        <div className="flex-row gap-2 flex items-center ">
                            <a href='#projects'><MagicButton
                                title="Show My Work"
                                icon={<FaLocationArrow />}
                                position='right'
                            /></a>
                            <a href='#contact'><MagicButton
                                title="Get In Touch"
                                icon={<FaLocationArrow />}
                                position='right'
                            /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero