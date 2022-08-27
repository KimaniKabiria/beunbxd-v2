import React from "react"
import Typewriter from 'typewriter-effect'
import Iframe from 'react-iframe'

import heroImage from "../../assets/images/unbxd-box2.png"


export default function Hero(){

    return (
            <div className="flex flex-col mx-auto px-6 py-4 lg:px-12 lg:py-8 mb-12 justify-center items-center">
                <div className="flex flex-col w-full lg:py-20 lg:flex-row lg:bg-gradient-to-r lg:from-taran-blue lg:to-taran-orange bg-gradient-to-b from-taran-orange to-taran-blue text-unbxd-bg rounded-2xl">
                    <div className="flex mx-auto lg:order-last lg:-ml-0">
                        <div className="hidden lg:block">
                            <Iframe url="https://my.spline.design/unbxd-acf2a9f89da1b51e104f92699afa8cf5/"
                                width="500px"
                                height="450px"
                                id="myId"
                                className="myClassname"
                                display="inline"
                                position="relative"/>
                        </div>
                        <div className="lg:hidden">
                            <img
                            className="block w-full h-full"
                            src={heroImage}
                            alt="Unbxd Box"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center mx-auto lg:w-1/2 px-8 lg:px-12  pb-8 lg:pb-0">
                        <div className="flex flex-col lg:pl-8">
                            <h1 className="text-3xl font-extrabold  text-unbxd-bg">
                                Be 
                            </h1>
                            <h1 className="text-6xl lg:text-8xl font-bold">UNBXD</h1>
                            <h1 className="text-5xl font-bold mt-4 lg:mt-8">
                                <Typewriter			
                                    options={{
                                        loop: true,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .pauseFor(500)
                                            .typeString("<strong>CREATIVE</strong>")
                                            .pauseFor(3000)
                                            .deleteChars(8)
                                            .typeString("<strong>UNLIMITED</strong>")
                                            .pauseFor(3000)
                                            .deleteChars(9)
                                            .typeString("<strong>UNUSUAL</strong>")
                                            .pauseFor(3000)
                                            .deleteChars(7)
                                            .start();
                                    }}
                                />
                            </h1>
                            <p className="mt-8 text-xl font-semibold">
                                Out of the Box
                                <span className="text-taran-orange font-semibold border-b-2 border-taran-blue"> Digital Products </span>
                                designed and developed to suite your 
                                <span className="text-taran-orange font-semibold border-b-2 border-taran-blue"> Digital needs </span>!</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};