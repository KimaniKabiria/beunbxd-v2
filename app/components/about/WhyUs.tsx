import { BsCheck2Circle } from "react-icons/bs"

export default function WhyUs(){
return (
    <section className="flex flex-col mx-auto bg-white -mt-20 lg:-mt-24 lg:w-11/12 rounded-2xl">
        <div className="flex flex-col p-12 lg:p-20">
            <div className="flex p-3">
                <h1 className="inline-block text-taran-blue p-3 lg:text-4xl text-3xl font-bold mb-2 lg:mb-4 border-b-2 border-taran-orange">
                    Why Us ?
                </h1>
            </div>
            <div className="flex px-6">
                <div className="lg:w-2/3">
                    <p className="text-lg font-medium mb-4">
                        We believe we are best equiped to handle your project. With a combined experience of over 12+ years, our team have become masters at their skills and we know a thing or two about what we do.
                    </p>
                </div>
                <div className="lg:w-1/3"></div>
            </div>
            <div className="flex flex-col lg:px-20 py-8">
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:w-full justify-center items-center">
                    <div className="flex flex-col w-full px-12">
                        <div className="flex flex-row font-bold">
                            <BsCheck2Circle className="w-8 h-8 text-taran-blue" />
                            <p className="px-4 text-xl lg:text-2xl text-taran-orange">Adaptable Designs</p>
                        </div>
                        <p className="mt-4 lg:pl-12 text-lg">We love to create. Our designers have excuisite taste and a good eye for something bespoke. So you should expect that level of design work on your project.</p>
                    </div>
                    <div className="flex flex-col w-full px-12 mt-6 lg:mt-0">
                        <div className="flex flex-row font-bold">
                            <BsCheck2Circle className="w-8 h-8 text-taran-blue" />
                            <p className="px-4 text-xl lg:text-2xl text-taran-orange">Great Developers</p>
                        </div>
                        <p className="mt-4 lg:pl-12 text-lg">The most valuable part of our company is the people. Our devopers love technology and thats why we create it. We invest in learning to help everyone grow faster.</p>
                    </div>
                </div>
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:w-full justify-center items-center mt-6 lg:mt-8">
                    <div className="flex flex-col w-full px-12">
                        <div className="flex flex-row font-bold">
                            <BsCheck2Circle className="w-8 h-8 text-taran-blue" />
                            <p className="px-4 text-xl lg:text-2xl text-taran-orange">Always there to help you</p>
                        </div>
                        <p className="mt-4 lg:pl-12 text-lg">Building strong, long-lasting relations is crucial for our business. We want you to succeed and grow with us. We`ll do our best to make it happen.</p>
                    </div>
                    <div className="flex flex-col w-full px-12 mt-6 lg:mt-0">
                        <div className="flex flex-row font-bold">
                            <BsCheck2Circle className="w-8 h-8 text-taran-blue" />
                            <p className="px-4 text-xl lg:text-2xl text-taran-orange">Faster than Agile</p>
                        </div>
                        <p className="mt-4 lg:pl-12 text-lg">By working on different kinds of projects and teams, we have come up with a working process that promises to deliver as fast as possible while being efficient in our work.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)}