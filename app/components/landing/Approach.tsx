import React from "react"
import lottie from "lottie-web";

import ux from "../../assets/images/ux.png"
import design from "../../assets/images/design-scroll.png"
import dev from "../../assets/images/dev.png"
import market from "../../assets/images/sell.png"
import support from "../../assets/images/support.png"

import UiDo from "../../assets/lotties/ui-do.json"
import DesignDo from "../../assets/lotties/design-do.json"
import DevelopDo from "../../assets/lotties/develop-do.json"
import MarketDo from "../../assets/lotties/market-do.json"
import SupportDo from "../../assets/lotties/support-do.json"

export default function OurApproach () {
    React.useEffect(() => {
      lottie.loadAnimation({
        container: document.querySelector("#ui-do"),
        animationData: UiDo
      });
      lottie.loadAnimation({
        container: document.querySelector("#design-do"),
        animationData: DesignDo
      });
      lottie.loadAnimation({
        container: document.querySelector("#develop-do"),
        animationData: DevelopDo
      });
      lottie.loadAnimation({
        container: document.querySelector("#market-do"),
        animationData: MarketDo
      });
      lottie.loadAnimation({
        container: document.querySelector("#support-do"),
        animationData: SupportDo
      });
    }, []);
    return (
    <section className="flex lg:w-11/12 mx-auto bg-unbxd-bg bg-opacity-70 mb-20">
        <div className="flex flex-col mx-auto px-8 lg:px-36 py-8 lg:py-32">
                <h1 className="inline-block text-taran-orange p-3 lg:text-3xl text-3xl font-bold mb-4 border-b-2 border-taran-blue">
                Our Unbxing Approach.
                </h1>
                <div className="flex flex-col lg:flex-row mx-auto text-black mt-4 mb-12">
                <p className="lg:text-xl text-base text-center xl:text-left lg:text-left leading-relaxed font-base">
                We have perfected our project process so that we can produce exceptional results every time.
                We achieve this by seeking to understand what makes you, your users and industry as a whole tick.
                By understanding intimately what you and your users are trying to achieve we can deliver digital solutions that get results.
                </p>
                </div>
                
                <div className="flex flex-col lg:grid lg:grid-cols-3 mx-auto text-taran-blue items-center justify-center lg:px-12 mt-8">         
                <div className="flex flex-col justify-center items-center lg:w-full lg:px-2">
                        <div className="w-1/2">
                            <div id="ui-do"/>
                        </div>
                        <p className="mt-4 text-lg font-bold text-center leading-relaxed text-taran-orange">
                        1. User Experience
                        </p>
                        <p className="text-base text-center leading-relaxed">
                        Creating a successful user experience starts with understanding your users needs.
                        </p>
                </div>
                <div className="flex flex-col justify-center items-center lg:w-full lg:px-2 mt-8">
                        <div className="w-1/2">
                            <div id="design-do"/>
                        </div>
                        <p className="mt-4 text-lg font-bold text-center leading-relaxed text-taran-orange">
                        2. Design
                        </p>
                        <p className="text-base text-center leading-relaxed">
                        Our experienced digital designers work with you to co-design applications that resonate with your customers and communicate your businesses messages.
                        </p>
                </div>
                <div className="flex flex-col justify-center items-center lg:w-full lg:px-2 mt-8">
                        <div className="w-1/2">
                            <div id="develop-do"/>
                        </div>
                        <p className="mt-4 text-lg font-bold text-center leading-relaxed text-taran-orange">
                        3. Develop
                        </p>
                        <p className="text-base text-center leading-relaxed">
                        Our team of developers use the latest methods and systems to ensure your project outcomes are fast to load, secure and compatible across browsers and devices.
                        </p>
                </div>
            </div>
                <div className="flex flex-col lg:grid lg:grid-cols-2 mx-auto text-taran-blue items-center justify-center lg:px-20 mt-8">   
                <div className="flex flex-col justify-center items-center lg:w-full lg:px-2 mt-8">
                        <div className="w-1/2">
                            <div id="market-do"/>
                        </div>
                        <p className="mt-4 text-lg font-bold text-center leading-relaxed text-taran-orange">
                        4. Market
                        </p>
                        <p className="text-base text-center leading-relaxed">
                        Our experienced digital designers work with you to co-design applications that resonate with your customers and communicate your businesses messages.
                        </p>
                </div>
                <div className="flex flex-col justify-center items-center lg:w-full lg:px-2 mt-8">
                        <div className="w-1/2">
                            <div id="support-do"/>
                        </div>
                        <p className="mt-4 text-lg font-bold text-center leading-relaxed text-taran-orange">
                        5. Support & Maintenance
                        </p>
                        <p className="text-base text-center leading-relaxed">
                        We see our partnership continue post-launch of your project through support for maintenance and ongoing improvements, based on business and user feedback to help you roadmap your digital presence and assets.
                        </p>
                </div>
                </div>
            </div>
     </section>
)};