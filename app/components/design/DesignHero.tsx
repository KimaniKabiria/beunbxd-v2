import React from "react";
import Typewriter from 'typewriter-effect'
import lottie from "lottie-web";

import Design from "../../assets/lotties/design.json"

export default function DesignHero (){
    React.useEffect(() => {
      lottie.loadAnimation({
        container: document.querySelector("#design-lottie"),
        animationData: Design
      });
    }, []);

    return (
        <section className="flex flex-col mx-auto lg:w-11/12 px-6 lg:px-20 justify-center items-center lg:bg-gradient-to-r lg:from-taran-orange lg:to-taran-blue bg-gradient-to-b from-taran-blue to-taran-orange mt-24 rounded-2xl">
            <div className="flex flex-col mx-auto px-6 lg:px-12 lg:py-8 lg:flex ">
                <div className="flex flex-col">
                    <div className="flex flex-col lg:flex-row  text-unbxd-bg rounded-2xl">
                        <div className="block mx-auto lg:order-last lg:-ml-0 p-12">
                            <div id="design-lottie"  style={{ height: 560 }}/>
                        </div>
                        <div className="flex flex-row justify-center items-center mx-auto lg:w-1/2 px-8 lg:px-12  pb-8 lg:pb-0">
                            <div className="flex flex-col lg:pl-8">
                                <h1 className="text-6xl lg:text-8xl font-base">Unbxing</h1>
                                    <h1 className="text-5xl font-bold mt-4 lg:mt-8">
                                        <Typewriter			
                                            options={{
                                                loop: true,
                                            }}
                                            onInit={(typewriter) => {
                                                typewriter
                                                    .pauseFor(500)
                                                    .typeString("<strong>UI</strong>")
                                                    .pauseFor(3000)
                                                    .deleteChars(2)
                                                    .typeString("<strong>UX</strong>")
                                                    .pauseFor(3000)
                                                    .deleteChars(2)
                                                    .typeString("<strong>DESIGN</strong>")
                                                    .pauseFor(3000)
                                                    .deleteChars(7)
                                                    .start();
                                            }}
                                        />
                                    </h1>
                                <p className="mt-8 text-xl lg:text-3xl font-semibold">
                                    Intuitive
                                    <span className="text-taran-blue font-semibold border-b-2 border-taran-blue"> Design </span>
                                    is how we give the user new
                                    <span className="text-taran-blue font-semibold border-b-2 border-taran-blue"> Superpowers </span>
                                    !
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};