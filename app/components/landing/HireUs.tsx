import React from "react"
import lottie from "lottie-web";

import Internet from "../../assets/lotties/internet.json"
import Growth from "../../assets/lotties/growth.json"
import Splash from "../../assets/lotties/splash.json"

export default function HireUs() {
    React.useEffect(() => {
      lottie.loadAnimation({
        container: document.querySelector("#internet"),
        animationData: Internet
      });
      lottie.loadAnimation({
        container: document.querySelector("#growth"),
        animationData: Growth
      });
      lottie.loadAnimation({
        container: document.querySelector("#splash"),
        animationData: Splash
      });
    }, []);
    return (
    <section className="flex items-center mx-auto lg:w-11/12 lg:-mt-12">
            <div className="flex flex-col mx-auto px-8 lg:px-32 bg-taran-blue rounded-2xl text-white py-8 lg:py-20">
                    <h1 className="inline-block p-3 lg:text-3xl text-3xl font-bold mb-4 lg:mb-8 border-b-2 border-taran-orange">
                    When To Hire Us.
                    </h1>
                    <div className="flex flex-col lg:flex-row mx-auto lg:px-8 pt-4 lg:pt-12">
                        <div className="flex flex-col justify-center items-center lg:w-1/3 lg:px-12 mt-4 lg:mt-0">
                            <div className="w-1/2">
                                <div id="internet"/>
                            </div>
                            <p className="mt-4 lg:text-lg text-base text-center lg:text-left leading-relaxed">
                            When a you want to stand up to the modern internet culture.
                            </p>
                        </div>
                    <div className="flex flex-col justify-center items-center lg:w-1/3 lg:px-12 mt-16 lg:mt-0">
                        <div className="w-2/3">
                            <div id="growth"/>
                        </div>
                        <p className="mt-4 lg:text-lg text-base text-center xl:text-left lg:text-left leading-relaxed">
                        When you outgrow your market and need to scale.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center lg:w-1/3 lg:px-12 mt-16 lg:mt-0">
                        <div className="">
                            <div id="splash"/>
                        </div>
                        <p className="mt-4 lg:text-lg text-base text-center xl:text-left lg:text-left leading-relaxed">
                        When a you need to make a splash.
                        </p>
                    </div>
                    </div>
                    <div className="flex flex-col lg:flex-row mx-auto lg:px-20 text-taran-orange mt-8 lg:mt-12 mb-12">
                        <p className="mt-4 lg:text-xl text-base font-bold text-center xl:text-left lg:text-left leading-relaxed font-base">
                    We help you create or remold your online presence and make you stand out from your competition. 
                    To do that, we rely on aesthetic design, hardcore development, and unstoppable work ethic. 
                    We have the best talent we can find across the country who are masters at their skill.
                    </p>
                    </div>
                    {/* <div className="flex flex-col lg:flex-row mx-auto lg:px-28 text-black mt-8 lg:mt-12 mb-12">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-lg font-medium text-taran-orange border-taran-orange hover:text-white hover:bg-taran-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    >
                        <LockOpenIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        <p className="flex">LET&apos;S UNBOX</p>
                    </button>
                    </div> */}
                </div>
        </section>
)};