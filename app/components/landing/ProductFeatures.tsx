import React from "react"
import Typewriter from 'typewriter-effect'

import { CgWebsite} from 'react-icons/cg'
import { GiMagnifyingGlass, GiDrippingTube } from "react-icons/gi";
import { RiFlowChart } from "react-icons/ri";
import{ MdOutlineDesignServices, MdOutlineSupportAgent } from "react-icons/md"
import { RoughNotation } from 'react-rough-notation';

export default function ProductFeatures(){
    return(
        <div className="flex flex-col w-full mx-auto items-center justify-center py-12 rounded-2xl backdrop-blur-lg bg-taran-orange transition border border-gray-800 border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0 lg:py-28 ">
            <div className="w-full h-24 py-4 px-4 text-center">
                <h1 className="font-bold text-taran-blue text-2xl lg:text-5xl">
                    <Typewriter			
                        options={{
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(500)
                                .typeString("Everything you need for a <strong><u>perfect product</u></strong>")
                                .pauseFor(3000)
                                .deleteChars(41)
                                .start();
                        }}
                    />
                </h1>
            </div>
            <div className="w-full lg:grid grid-cols-2 xl:grid-cols-3 gap-5 py-12 px-12 lg:px-20 text-white">
                <RoughNotation
                    type='box'
                    padding={0}
                >
                    <div className="p-6 flex flex-col lg:flex-row w-full">
                        <div className="flex w-16 justify-end items-center">  
                            <GiMagnifyingGlass className="w-16 h-16 py-2 pr-4 text-right" size='fa-2x' />
                        </div>
                        <div>
                                <h5 className="text-2xl py-2 font-bold tracking-tight">Review</h5>
                            <p className="mb-3 text-sm font-normal">We make sure your current product is performing its best by thoroughly reviewing it before making any changes.</p>
                        </div>
                    </div>
                </RoughNotation>
                
                <RoughNotation
                    type='box'
                    padding={0}
                >
                    <div className="p-6 flex flex-col lg:flex-row w-full">
                        <div className="flex w-16 justify-end items-center">  
                            <RiFlowChart className="w-16 h-16 py-2 pr-4 text-right" size='fa-2x' />
                        </div>
                        <div>
                            <h5 className="text-2xl font-bold py-2 tracking-tight">Business Strategy</h5>
                            <p className="mb-3 text-sm font-normal">We discuss what you are trying to achieve, and place goals on your product planning on how to achieve that.</p>
                        </div>
                    </div>
                </RoughNotation>
                
                <RoughNotation
                    type='box'
                    padding={0}
                >
                    <div className="p-6 flex flex-col lg:flex-row w-full">
                        <div className="flex w-16 justify-end items-center">  
                            <MdOutlineDesignServices className="w-16 h-16 py-2 pr-4 text-right" size='fa-2x' />
                        </div>
                        <div>
                            <h5 className="text-2xl font-bold py-2 tracking-tight">User Experience Design</h5>
                            <p className="mb-3 text-sm font-normal">We design your product to be as easy to use as possible while guiding users towards the end goal.</p>
                        </div>
                    </div>
                </RoughNotation>
                
                <RoughNotation
                    type='box'
                    padding={0}
                >
                    <div className="p-6 flex flex-col lg:flex-row w-full">
                        <div className="flex w-16 justify-end items-center">  
                            <CgWebsite className="w-16 h-16 py-2 pr-4 text-right" size='fa-2x' />
                        </div>
                        <div>
                            <h5 className="text-2xl font-bold py-2 tracking-tight">Tailored Development</h5>
                            <p className="mb-3 text-sm font-normal">We build with your goals in mind, We turn your ideas into a ready market product.</p>
                        </div>
                    </div>
                </RoughNotation>
                
                
                <RoughNotation
                    type='box'
                    padding={0}
                >
                    <div className="p-6 flex flex-col lg:flex-row w-full">
                        <div className="flex w-16 justify-end items-center">  
                            <GiDrippingTube className="w-16 h-16 py-2 pr-4 text-right" size='fa-2x' />
                        </div>
                        <div>
                            <h5 className="text-2xl font-bold py-2 tracking-tight">Rigorous Testing</h5>
                            <p className="mb-3 text-sm font-normal">We ensure your product is of excellent quality by thoroughly testing using multiple approaches.</p>
                        </div>
                    </div>
                </RoughNotation>
                
                
                <RoughNotation
                    type='box'
                    padding={0}
                >
                    <div className="p-6 flex flex-col lg:flex-row w-full">
                        <div className="flex w-16 justify-end items-center">  
                            <MdOutlineSupportAgent className="w-16 h-16 py-2 pr-4 text-right" size='fa-2x' />
                        </div>
                        <div>
                            <h5 className="text-2xl font-bold py-2 tracking-tight">Ongoing Support</h5>
                            <p className="mb-3 text-sm font-normal">Your product is always growing. Whether you’re adding new features or making improvements we are here to help.</p>
                        </div>
                    </div>
                </RoughNotation>
                
            </div>
        </div>
    )
}