import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { Button } from "@material-tailwind/react";
import lottie from "lottie-web";
import Call3 from "../../assets/lotties/icons/call.json";

import UiDo from "../../assets/lotties/ui-do.json";

export default function GetUnbxd() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#call3"),
      animationData: Call3,
    });
  }, []);
  return (
    <section className="flex lg:w-11/12 mx-auto bg-unbxd-bg bg-opacity-70 mb-20 py-20 lg:py-0">
      <div className="flex flex-col mx-auto px-8 lg:px-36 py-8 lg:py-32 justify-center items-center text-center">
        <h1 className="text-taran-blue font-black text-3xl lg:text-5xl">
          Getting Unbxd is very Easy
        </h1>
        <p className="py-4 text-xl text-taran-orange font-semibold">
          Its as easy as 123
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 py-12">
          {/* Step 1 */}
          <div className="flex flex-col text-3xl lg:text-6xl font-bold justify-center items-center text-center">
            <RoughNotation type="box" padding={4} multiline={true}>
              01.
            </RoughNotation>
            <h2 className="text-xl text-taran-blue font-medium py-4">
              Discovery Call
            </h2>
            <p className="text-base font-normal">
              Call Us / Fill out our Start Project form. We set up a Discovery
              Call where we define wht you want.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col text-3xl lg:text-6xl font-bold justify-center items-center text-center">
            <RoughNotation type="box" padding={4} multiline={true}>
              02.
            </RoughNotation>
            <h2 className="text-xl text-taran-blue font-medium py-4">
              Implementation
            </h2>
            <p className="text-base font-normal">
              We design and develop your You test and confirm that’s website.
              how you wanted it done.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col text-3xl lg:text-6xl font-bold justify-center items-center text-center">
            <RoughNotation type="box" padding={4} multiline={true}>
              03.
            </RoughNotation>
            <h2 className="text-xl text-taran-blue font-medium py-4">Growth</h2>
            <p className="text-base font-normal">
              Enjoy the growth of your business. We deliver a product that your
              wanted and you customers needed.
            </p>
          </div>
        </div>
        <div className="py-6">
          <a href="https://clienthub.beunbxd.com/getunbxd">
            <Button
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-lg lg:text-xl font-medium text-white bg-taran-orange border-taran-blue hover:text-white hover:bg-taran-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-taran-orange"
              ripple={true}
            >
              <div id="call3" className="w-12 h-12 pr-2" />
              <p className="flex">Get UNBXD NOW!</p>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
