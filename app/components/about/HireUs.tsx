import React from "react";
import lottie from "lottie-web";
import { RainbowHighlight } from "../includes/RainbowHighlight";
import { Button } from "@material-tailwind/react";

import Internet from "../../assets/lotties/internet.json";
import Growth from "../../assets/lotties/growth.json";
import Splash from "../../assets/lotties/splash.json";
import Call4 from "../../assets/lotties/icons/call.json";

export default function HireUs() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#internet"),
      animationData: Internet,
    });
    lottie.loadAnimation({
      container: document.querySelector("#growth"),
      animationData: Growth,
    });
    lottie.loadAnimation({
      container: document.querySelector("#splash"),
      animationData: Splash,
    });
    lottie.loadAnimation({
      container: document.querySelector("#call4"),
      animationData: Call4,
    });
  }, []);

  const colors = ["#fcf6f5", "#cc5333", "#cc5333", "#3B82F6"];

  return (
    <section className="flex items-center mx-auto w-full">
      <div className="flex flex-col justify-center items-center mx-auto px-8 lg:px-32 bg-gradient-to-r from-taran-orange to-taran-blue rounded-3xl text-white py-16 lg:py-28 shadow-2xl lg:mb-20">
        <h1 className="inline-block p-3 lg:text-5xl text-3xl font-bold mb-4 lg:mb-8 text-taran-orange">
          <RainbowHighlight color={colors[0]}>
            When To Hire Us?
          </RainbowHighlight>
        </h1>
        <div className="flex flex-col justify-center items-center lg:flex-row mx-auto lg:px-8 pt-4 lg:pt-12">
          <div className="flex flex-col justify-center items-center w-2/3  lg:w-1/3 lg:px-12 mt-4 lg:mt-0">
            <div className="w-1/2">
              <div id="internet" />
            </div>
            <p className="mt-4 text-lg text-center lg:text-left leading-relaxed">
              When you want to stand up to the modern internet culture.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-2/3 lg:w-1/3 lg:px-12 mt-16 lg:mt-0">
            <div className="w-2/3">
              <div id="growth" />
            </div>
            <p className="mt-4 text-lg text-center xl:text-left lg:text-left leading-relaxed">
              When you outgrow your market and need to scale.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-2/3 lg:w-1/3 lg:px-12 mt-16 lg:mt-0">
            <div className="">
              <div id="splash" />
            </div>
            <p className="mt-4 text-lg text-center xl:text-left lg:text-left leading-relaxed">
              When you need to make a splash.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mx-auto lg:px-20 mt-8 lg:mt-12 mb-12">
          <p className="mt-4 lg:text-2xl text-lg font-bold text-center xl:text-left lg:text-left leading-relaxed font-base">
            We help you create or remold your online presence and make you stand
            out from your competition. To do that, we rely on aesthetic design,
            hardcore development, and unstoppable work ethic. We have the best
            talent we can find across the country who are masters at their
            skill.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row mx-auto lg:px-28 text-black mt-8 lg:mt-12 mb-12">
          <a href="https://clienthub.beunbxd.com/getunbxd">
            <Button
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-lg lg:text-xl font-medium text-white bg-taran-orange border-taran-blue hover:text-white hover:bg-taran-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-taran-orange"
              ripple={true}
            >
              <div id="call4" className="w-12 h-12 pr-2" />
              <p className="flex">Get UNBXD NOW!</p>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
