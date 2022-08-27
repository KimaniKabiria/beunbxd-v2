import { Button } from "@material-tailwind/react";

import logo from "../../assets/images/logo.png"
import { LockOpenIcon } from '@heroicons/react/24/outline'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer(){
  
    return(
        
        <footer className="">
            <div className="lg:flex lg:flex-row px-4 lg:px-0">
                <div className="lg:w-1/4"></div>
                <div className="flex flex-col lg:flex-row lg:w-11/12 bg-unbxd-bg p-8 lg:px-8 lg:py-12 justify-center items-center text-center border border-gray-300 rounded-xl">                
                    <div className="flex flex-col lg:w-2/3 lg:px-16">
                        <h1 className="flex text-taran-blue text-2xl lg:text-3xl font-medium">Let&apos;s create something extraordinary together</h1>
                        <div className="flex mt-4 border-t-2">
                            <p className="text-taran-orange text-base lg:text-xl lg:p-4">Looking for a long term digital partner to help you realise your digital goals?</p>
                        </div>
                    </div>
                    <a href="https://clienthub.beunbxd.com/getunbxd">
                        <Button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-lg lg:text-xl font-medium text-white bg-taran-blue border-taran-blue hover:text-white hover:bg-taran-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-taran-orange" ripple={true}>
                            <LockOpenIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                            <p className="flex">BE UNBXD</p>
                        </Button>
                    </a>
                </div>
                <div className="lg:w-1/4"></div>
            </div>
            <div className="flex flex-col items-center justify-center px-6 lg:px-20 pt-8 lg:pt-40 lg:-mt-24 bg-gradient-to-r from-taran-blue to-taran-orange text-white">
                <div className="flex items-center flex-shrink-0 text-white">
                    <span className="text-xl font-semibold">
                    <a href="/">
                        <img
                        className="block h-12 lg:h-16 w-auto"
                        src={logo}
                        alt="Workflow"
                        />
                    </a>
                    </span>
                </div>  
                <div className="flex flex-row p-4">
                    <div className='inline-block w-6 h-6 mx-4'>
                        <a href="https://twitter.com/kimmi_dev">
                        <FaTwitter size='fa-2x' color='white' />
                        </a>
                    </div>
                    <div className='inline-block w-6 h-6 mx-4'>
                        <a href="https://www.facebook.com/kimanikabiria/">
                        <FaFacebook size='fa-2x' color='white' />
                        </a>
                    </div>
                    <div className='inline-block w-6 h-6 mx-4'>
                        <a href="https://www.instagram.com/kimani.kabiria/">
                        <FaInstagram size='fa-2x' color='white' />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col p-4 text-center">
                    <h4 className="font-semibold text-xl">Unbxd Creative Lab</h4>
                    <div className="lg:flex lg:flex-row">
                        <div className="lg:w-1/2"></div>
                        <div className="lg:w-1/2 justify-center">
                            <p className="font-light">
                                A creative lab that creates bespoke digital products that live on the Internet. 
                                We design UI/UX , develop wesites and apps and market accross the digital space.
                            </p>
                        </div>
                        <div className="lg:w-1/2"></div>
                    </div>
                </div>  
                <div className="container flex flex-col flex-wrap px-4 py-16 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
                    <div className="justify-between w-full mt-4 text-center lg:flex">
                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 className="mb-2 font-bold tracking-widest">
                            Design
                            </h2>
                            <ul className="mb-8 space-y-2 text-sm list-none">
                                <li>
                                    <a className="text-white hover:underline">User Experience</a>
                                </li>
                                <li>
                                    <a className="text-white hover:underline">User Interface</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 className="mb-2 font-bold tracking-widest">
                            Develop
                            </h2>
                            <ul className="mb-8 space-y-2 text-sm list-none">
                                <li>
                                    <a className="text-white hover:underline">Websites & Web Apps</a>
                                </li>
                                <li>
                                    <a className="text-white hover:underline">Mobile Apps</a>
                                </li>
                                <li>
                                    <a className="text-white hover:underline">Custom Software Development</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 className="mb-2 font-bold tracking-widest">
                            Market
                            </h2>
                            <ul className="mb-8 space-y-2 text-sm list-none">
                                <li>
                                    <a className="text-white hover:underline">Social Media Merketing</a>
                                </li>
                                <li>
                                    <a className="text-white hover:underline">Digital Marketing</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 className="mb-2 font-bold tracking-widest">
                            Company
                            </h2>
                            <ul className="mb-8 space-y-2 text-sm list-none">
                                <li>
                                    <a href="/about" className="text-white hover:underline">Who are We?</a>
                                </li>
                                <li>
                                    <a className="text-white hover:underline">Who we have UNBXD</a>
                                </li>
                                <li>
                                    <a className="text-white hover:underline">Careers</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> 
                <div className="w-full p-2 border-t border-white text-center flex flex-col lg:flex-row justify-center items center">
                    <p className="text-sm p-4">© {new Date().getFullYear()}, Unbxd Creative Lab, All rights Reserverd.</p> 
                    <a href="#">
                        <p className="text-sm p-4"> - Terms & Conditions - </p>
                    </a>
                    <a href="#">
                        <p className="text-sm p-4"> - Privacy Policy - </p>
                    </a>
                </div>  
            </div>
        </footer>
    )
}