import React from "react"
import Typewriter from 'typewriter-effect'

import logo from "../../assets/images/logo-black.png"

export default function AboutHero() {
    return(
        <section className="w-full lg:py-12 lg:mb-12">
            <div className="container mx-auto px-8 lg:flex lg:mt-32 p-20 lg:p-0 lg:pb-20">
                <div className="flex w-full flex-col">
                    <div className="flex text-center justify-center items-center">
                        <h2 className="text-xl lg:text-2xl font-bold text-taran-blue py-2">We are,</h2>
                    </div>
                    <div className="flex justify-center items-center mt-3">
                        <img
                        className="h-16 lg:h-28 w-auto"
                        src={logo}
                        alt="Logo"
                        />
                    </div>
                    <div className="flex flex-col lg:w-full justify-center items-center text-center mt-8">
                        <div className="text-taran-blue font-black uppercase text-xl lg:text-3xl py-2">
                            <Typewriter			
                                options={{
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("<span>We Create</span>")
                                        .pauseFor(500)
                                        .deleteChars(6)
                                        .typeString("<span>Design</span>")
                                        .pauseFor(500)
                                        .deleteChars(6)
                                        .typeString("<span>Develop</span>")
                                        .pauseFor(500)
                                        .deleteChars(7)
                                        .start();
                                }}
                            />
                        </div>
                        <h2 className="text-xl lg:text-2xl font-semibold text-taran-orange">
                            Out of the Box Digital Products that suite all your Digital needs
                        </h2>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center items-center text-center mt-6">
                        <div className="lg:w-1/4"></div>
                        <div className="lg:w-1/2">
                            <h2 className="text-base lg:text-lg font-medium text-taran-blue">
                                We are a creative lab that creates bespoke digital products that live on the internet.
                                We design UI/UX, develop websites and apps and market these products across the digital space.
                            </h2>
                        </div>
                        <div className="lg:w-1/4"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}