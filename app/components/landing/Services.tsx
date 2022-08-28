import React from "react"
import lottie from "lottie-web";

import design from "../../assets/images/designers.png"
import software from "../../assets/images/web-design.png"
import marketing from "../../assets/images/market.png"

import Develop from "../../assets/lotties/develop.json"
import UiDesign from "../../assets/lotties/ui-design.json"
import Marketing from "../../assets/lotties/market.json"


export default function Services() {
    React.useEffect(() => {
      lottie.loadAnimation({
        container: document.querySelector("#ui-design"),
        animationData: UiDesign
      });
      lottie.loadAnimation({
        container: document.querySelector("#develop"),
        animationData: Develop
      });
      lottie.loadAnimation({
        container: document.querySelector("#market"),
        animationData: Marketing
      });
    }, []);
return(
  <section className="py-20 bg-unbxd-bg">
    {/* UI / UX Design */}
        <div className="container mx-auto px-12 items-center flex flex-col lg:flex-row mt-4 mb-16">
            <div className="lg:w-1/2 lg:ml-12">
                <h1 className="flex items-center text-white no-underline">

                <div id="ui-design"  style={{ height: 560 }}/>
                    {/* <img
                        alt="Designers"
                        className="block w-full mx-auto"
                        src={design}
                    /> */}
                </h1>
            </div>
            <div className="mt-4 lg:-mt-8 w-full lg:w-1/2 text-black lg:mr-24">
                <div className="lg:pl-32">
                    <h3 className="leading-relaxed text-2xl lg:text-4xl font-bold text-center text-taran-orange lg:text-left mt-4">
                        UI / UX
                        &nbsp;
                        <span className="bg-taran-blue text-white font-bold"> Design </span>
                        &nbsp;
                    </h3>
                    <p className="mt-4 lg:text-lg text-base text-center lg:text-left leading-relaxed">
                    It all starts with a bespoke design.
                    We create tailor made designs for your website or app to give your project that unique and personal touch to your clients.
                    </p>
                </div>
            </div>
        </div>

    {/* Website & App Development */}
        <div className="container mx-auto px-12 items-center flex flex-col lg:flex-row mt-4 mb-24">
            <div className="lg:w-1/2 lg:ml-12 lg:order-last">
                <h1 className="flex items-center text-white no-underline">
                    <div id="develop"  style={{ height: 560 }}/>
                    {/* <img
                        alt="Developers"
                        className="block w-full mx-auto mb-8"
                        src={software}
                    /> */}
                </h1>
            </div>
            <div className="mt-4 lg:-mt-8 w-full lg:w-1/2 text-black lg:mr-24">
                <div className="lg:pl-32">
                    <h3 className="leading-relaxed text-2xl lg:text-4xl font-bold text-center text-taran-orange lg:text-left mt-4">
                        Web & App
                        &nbsp;
                        <span className="bg-taran-blue text-white font-bold"> Development </span>
                        &nbsp;
                    </h3>
                    <p className="mt-4 lg:text-lg text-base text-center lg:text-left leading-relaxed">
                    We help in turning ideas into products. We have a team of well experienced developers who love creating technology.
                    We help project teams to design and develop human centered products.
                    </p>
                </div>
            </div>
        </div>
    
    {/* Digital Marketing */}
        <div className="container mx-auto px-12 items-center flex flex-col lg:flex-row lg:mt-8 mt-4 mb-12">
            <div className="lg:w-1/2 lg:ml-12">
                <h1 className="flex items-center text-white no-underline">
                    <div id="market"  style={{ height: 560 }}/>
                    {/* <img
                        alt="Marketing"
                        className="block w-full mx-auto mb-8"
                        src={marketing}
                    /> */}
                </h1>
            </div>
            <div className="mt-4 lg:-mt-8 w-full lg:w-1/2 text-black lg:mr-24">
                <div className="lg:pl-32">
                    <h3 className="leading-relaxed text-2xl lg:text-4xl font-bold text-center text-taran-orange lg:text-left mt-4">
                        Digital
                        &nbsp;
                        <span className="bg-taran-blue text-white font-bold"> Marketing </span>
                        &nbsp;
                    </h3>
                    <p className="mt-4 lg:text-lg text-base text-center lg:text-left leading-relaxed">
                    By understanding your users and business needs, we create custom digital campaigns that help you deliver your message to specific clients through the right digital channels. 
                    This way, you can gather feedback directly from individual users, and analyse the next steps for your business with marketing performance reports.
                    </p>
                </div>
            </div>
        </div>
</section>
)};