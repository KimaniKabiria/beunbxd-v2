import React, {useEffect} from "react"
import { motion} from "framer-motion"
import { RoughNotation } from "react-rough-notation";

import { MdDraw} from 'react-icons/md'
import { GiNotebook } from "react-icons/gi";
import { AiTwotoneCode } from "react-icons/ai";
import { HiLightBulb } from "react-icons/hi"
import{ FaShapes } from "react-icons/fa"


export default function DesignProcess(){
    return(
        <div className="flex flex-col items-center justify-center py-12 lg:px-12">
            <div className="w-full py-4 text-center">
                <h1 className="font-semibold text-2xl lg:text-4xl p-8">
                    <RoughNotation 
                        type="circle"
                        // show = {true}
                        padding={30}
                        color="#008080"
                        iterations={4}
                    > Our Design Process!
                    </RoughNotation>
                </h1>
                <p className="text-base pt-4"> my process to build awesone things</p>
            </div>
            <div className="w-full lg:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                
                <motion.div
                    whileHover={{ scale: 0.95 }}
                >
                    <div className="p-6 w-64 h-80 m-8 max-w-xs mx-auto rounded-xl backdrop-blur-lg bg-taran-orange  transition border border-taran-blue border-opacity-10 shadow-lg shadow-taran-blue/50 hover:shadow-md">
                        <div className="flex w-32 justify-end items-end bg-taran-blue text-white dark:bg-white hover:bg-kimmi-teal rounded-lg -ml-8">  
                            <HiLightBulb className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                        </div>
                        <h5 className="text-base font-bold py-2 tracking-tight text-gray-900">
                            <RoughNotation 
                                type="underline"
                                // show = {true}
                                padding={2}
                                animate={false}>
                            Discover</RoughNotation>
                            </h5>
                        <p className="mb-3 text-sm font-normal text-white">We conduct workshops, In-depth User Research, Market and Data Analysis, Product UX audits to identify and ideate the problem we want to solve.</p>
                    </div>
                </motion.div>
                
                <motion.div
                    whileHover={{ scale: 0.95 }}
                >
                    <div className="p-6 w-64 h-80 m-8 max-w-xs mx-auto rounded-xl backdrop-blur-lg bg-taran-orange  transition border border-taran-blue border-opacity-10 shadow-lg shadow-taran-blue/50 hover:shadow-md">
                        <div className="flex w-32 justify-end items-end bg-taran-blue text-white dark:bg-white hover:bg-kimmi-teal rounded-lg -ml-8">  
                            <GiNotebook className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                        </div>
                        <h5 className="text-base font-bold py-2 tracking-tight text-gray-900">
                            <RoughNotation 
                                type="underline"
                                // show = {true}
                                padding={2}
                                animate={false}>Define</RoughNotation></h5>
                        <p className="mb-3 text-sm font-normal text-white">Before we can move into any design, we need to understand why we’re doing it. We need to know for whom we’re solving the problem. The contextual things they might face in their day-to-day life can help us understand how to best make our product work for them. </p>
                    </div>
                </motion.div>
                
                <motion.div
                    whileHover={{ scale: 0.95 }}
                >
                    <div className="p-6 w-64 h-80 m-8 max-w-xs mx-auto rounded-xl backdrop-blur-lg bg-taran-orange  transition border border-taran-blue border-opacity-10 shadow-lg shadow-taran-blue/50 hover:shadow-md">
                        <div className="flex w-32 justify-end items-end bg-taran-blue text-white dark:bg-white hover:bg-kimmi-teal rounded-lg -ml-8">  
                            <MdDraw className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                        </div>
                        <h5 className="text-lg font-bold py-2 tracking-tight text-gray-900">
                            <RoughNotation 
                                type="underline"
                                // show = {true}
                                padding={2}
                                animate={false}>Ideate</RoughNotation>
                                </h5>
                        <p className="mb-3 text-sm font-normal text-white">We utilize design practices like story mapping and sitemaps as the lowest fidelity versions of the product we’re building.These help us understand the complexity of the product and hash out important questions before we get into things like page layout and UI.</p>
                    </div>
                </motion.div>
                
                <motion.div
                    whileHover={{ scale: 0.95 }}
                >
                    <div className="p-6 w-64 h-80 m-8 max-w-xs mx-auto rounded-xl backdrop-blur-lg bg-taran-orange  transition border border-taran-blue border-opacity-10 shadow-lg shadow-taran-blue/50 hover:shadow-md">
                        <div className="flex w-32 justify-end items-end bg-taran-blue text-white dark:bg-white hover:bg-kimmi-teal rounded-lg -ml-8">  
                            <FaShapes className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                        </div>
                        <h5 className="text-lg font-bold py-2 tracking-tight text-gray-900">
                            <RoughNotation 
                                type="underline"
                                // show = {true}
                                padding={2}
                                animate={false}>Prototype</RoughNotation></h5>
                        <p className="mb-3 text-sm font-normal text-white">We put together all of the pieces in their full fidelity and complexity. We build out systems that make changes and hand-off to developers who can build out pages that can be utilized in usability tests.</p>
                    </div>
                </motion.div>
                
                <motion.div
                    whileHover={{ scale: 0.95 }}
                >
                    <div className="p-6 w-64 h-80 m-8 max-w-xs mx-auto rounded-xl backdrop-blur-lg bg-taran-orange  transition border border-taran-blue border-opacity-10 shadow-lg shadow-taran-blue/50 hover:shadow-md">
                        <div className="flex w-32 justify-end items-end bg-taran-blue text-white dark:bg-white hover:bg-kimmi-teal rounded-lg -ml-8">  
                            <AiTwotoneCode className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                        </div>
                        <h5 className="text-lg font-bold py-2 tracking-tight text-gray-900">
                            <RoughNotation 
                                type="underline"
                                // show = {true}
                                padding={2}
                                animate={false}>Implement / Launch</RoughNotation></h5>
                        <p className="mb-3 text-sm font-normal text-white">We launch iconic products at the intersection of science and art. At the end of this battle tested design process, we gurantee to have come up with the best UI / UX product that your customers will love.</p>
                    </div>
                </motion.div>
                
            </div>
        </div>
    )
}