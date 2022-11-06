import React from "react";
import lottie from "lottie-web";
import Typewriter from "typewriter-effect";
import Iframe from "react-iframe";
import { RainbowHighlight } from "../includes/RainbowHighlight";
import { Button } from "@material-tailwind/react";

import heroImage from "../../assets/images/unbxd-box2.png";
import Unbx from "../../assets/lotties/unbx.json";

export default function UnbxdHero() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#unbx"),
      animationData: Unbx,
    });
  }, []);

  const colors = ["#009193", "#cc5333", "#cc5333", "#3B82F6"];

  return (
    <div className="flex flex-col lg:w-11/12 mx-auto px-6 lg:px-20 justify-center items-center mt-24">
      <div className="flex flex-col justify-center items-center xl:py-12 text-taran-blue text-4xl lg:text-6xl text-center">
        <div className="flex flex-col">
          <h1 className="font-bold">Creating out of the Box</h1>
        </div>
        <div className="flex text-white font-black py-4">
          <RainbowHighlight color={colors[2]}>
            Digital Products
          </RainbowHighlight>
        </div>
        <div className="text-base text-center lg:w-1/2">
          <p>
            We are a creative lab that creates bespoke digital products that
            live on the internet. We design and develop digital products and
            online experiences that help our clients grow, innovate, and
            transform.
          </p>
        </div>
        <div className="py-6">
          <a href="https://clienthub.beunbxd.com/getunbxd">
            <Button
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-lg lg:text-xl font-medium text-white bg-taran-blue border-taran-blue hover:text-white hover:bg-taran-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-taran-orange"
              ripple={true}
            >
              <div id="call" className="w-12 h-12 pr-2" />
              <p className="flex">Get UNBXD!</p>
            </Button>
          </a>
        </div>
        <div className="flex mx-auto -mt-12 lg:mt-0">
          <div id="unbx" style={{ height: 520 }} />
        </div>
      </div>
    </div>
  );
}
