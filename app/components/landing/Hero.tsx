import React from "react"
import lottie from "lottie-web"
import Typewriter from 'typewriter-effect'
import Iframe from 'react-iframe'

import heroImage from "../../assets/images/unbxd-box2.png"
import Unbx from "../../assets/lotties/unbx.json"


export default function Hero(){
    React.useEffect(() => {
      lottie.loadAnimation({
        container: document.querySelector("#unbx"),
        animationData: Unbx
      });
    }, []);

    return (
            <div className="flex flex-col lg:w-11/12 mx-auto px-6 lg:px-20 justify-center items-center lg:bg-gradient-to-r lg:from-taran-blue lg:to-taran-orange bg-gradient-to-b from-taran-orange to-taran-blue mt-24 rounded-2xl shadow-2xl">
                <div className="flex flex-col w-full lg:py-24 lg:flex-row text-unbxd-bg rounded-2xl">
                    <div className="flex mx-auto lg:order-last lg:-ml-0">
                        <div id="unbx"  style={{ height: 520 }}/>
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