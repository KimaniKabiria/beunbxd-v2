import React from "react";
import Typewriter from "typewriter-effect";
import lottie from "lottie-web";
import { RainbowHighlight } from "../includes/RainbowHighlight";

import Design from "../../assets/lotties/design.json";

export default function DesignHero() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#design-lottie"),
      animationData: Design,
    });
  }, []);

  const colors = ["#009193", "#23074d", "#cc5333", "#3B82F6"];

  return (
    <section className="flex flex-col w-full mx-auto px-6 lg:px-20 justify-center items-center mt-24 lg:mt-48 lg:rounded-2xl">
      <div className="flex flex-col justify-center items-center text-taran-blue rounded-2xl w-full">
        <div className="flex flex-col justify-center items-center mx-auto px-8 lg:px-12 w-full pb-8 lg:pb-0">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <h1 className="text-5xl lg:text-8xl font-medium pl-4">Unbxing</h1>
            <h1 className="text-5xl lg:text-8xl font-medium text-taran-orange">
              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(500)
                    .typeString("<strong>UI</strong>")
                    .pauseFor(3000)
                    .deleteChars(2)
                    .typeString("<strong>UX</strong>")
                    .pauseFor(3000)
                    .deleteChars(2)
                    .typeString("<strong>DESIGN</strong>")
                    .pauseFor(3000)
                    .deleteChars(7)
                    .start();
                }}
              />
            </h1>
          </div>
          <div className="flex justify-center items-center w-11/12 lg:w-full">
            <p className="mt-8 text-2xl text-center lg:text-4xl font-semibold">
              Beautiful{" "}
              <RainbowHighlight color={colors[2]}>
                <span className="text-white">{" "}Solutions{" "}</span>
              </RainbowHighlight>{" "}
              to complex{" "}
              <RainbowHighlight color={colors[2]}>
                <span className="text-white">{" "}Problems{" "}</span>
              </RainbowHighlight>{" "}
              !
            </p>
          </div>
        </div>
        <div className="flex mx-auto">
          <div id="design-lottie" style={{ height: 560 }} />
        </div>
      </div>
    </section>
  );
}
