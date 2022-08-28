import { motion } from "framer-motion"

import company from "../../assets/images/company.svg"
import circleChart from "../../assets/images/circle_chart.svg"
import startup from "../../assets/images/startup_prototype.svg"

export default function HireUs() {
    return (
    <section className="flex items-center mx-auto lg:w-11/12 lg:-mt-12">
            <div className="flex flex-col mx-auto px-8 lg:px-32 bg-taran-blue rounded-2xl text-white py-8 lg:py-20">
                    <h1 className="inline-block p-3 lg:text-3xl text-3xl font-bold mb-4 lg:mb-8 border-b-2 border-taran-orange">
                    When To Hire Us.
                    </h1>
                    <div className="flex flex-col lg:flex-row mx-auto lg:px-8 pt-4 lg:pt-12">
                        <div className="flex-1 lg:w-1/3 lg:px-12 mt-4 lg:mt-0">
                            <motion.div 
                                whileHover={{ 
                                scale: 1.15, 
                                zIndex: 30, 
                                }} 
                                transition={{
                                    ease: 'easeOut',
                                    duration: 0.35,
                                }}
                            > 
                                <img
                                    alt="Company"
                                    className="block w-6/12 lg:w-11/12 mx-auto mb-8"
                                    src={company}
                                />
                                <p className="mt-4 lg:text-lg text-base text-center lg:text-left leading-relaxed">
                                When a you want to stand up to the modern internet culture.
                                </p>
                            </motion.div >
                        </div>
                    <div className="flex-1 lg:w-1/3 lg:px-12 mt-16 lg:mt-0">
                        <motion.div 
                            whileHover={{ 
                            scale: 1.15, 
                            zIndex: 30, 
                            }} 
                            transition={{
                                ease: 'easeOut',
                                duration: 0.35,
                            }}
                        > 
                            <img
                                alt="Circle Chart"
                                className="block w-6/12 lg:w-11/12 mx-auto mb-8"
                                src={circleChart}
                            />
                            <p className="mt-4 lg:text-lg text-base text-center xl:text-left lg:text-left leading-relaxed">
                            When a you is outgrow your market and need to scale.
                            </p>
                        </motion.div >
                    </div>
                    <div className="flex-1 lg:w-1/3 lg:px-12 mt-16 lg:mt-0">
                        <motion.div 
                            whileHover={{ 
                            scale: 1.15, 
                            zIndex: 30, 
                            }} 
                            transition={{
                                ease: 'easeOut',
                                duration: 0.35,
                            }}
                        > 
                            <img
                                alt="Startup Prototype"
                                className="block w-5/12 lg:w-7/12 mx-auto mb-8"
                                src={startup}
                            />
                            <p className="mt-4 lg:text-lg text-base text-center xl:text-left lg:text-left leading-relaxed">
                            When a you need to make a splash.
                            </p>
                        </motion.div >
                    </div>
                    </div>
                    <div className="flex flex-col lg:flex-row mx-auto lg:px-20 text-taran-orange mt-8 lg:mt-12 mb-12">
                        <p className="mt-4 lg:text-xl text-base font-bold text-center xl:text-left lg:text-left leading-relaxed font-base">
                    We help you remold your online presence and make you stand out from your competition. 
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