import React from "react";
import Typewriter from "typewriter-effect";
import { RainbowHighlight } from "../includes/RainbowHighlight";
import { RoughNotation } from "react-rough-notation";

import logo from "../../assets/images/logo-black.png";

export default function AboutHero() {
  const colors = ["#009193", "#23074d", "#cc5333", "#3B82F6"];

  return (
    <section className="w-full lg:py-12 lg:mb-12">
      <div className="container mx-auto px-8 lg:flex p-20 lg:p-0 lg:pb-20">
        <div className="flex justify-center items-center w-full flex-col">
          <div className="lg:w-9/12 justify-center items-center lg:py-20 py-12 text-taran-blue text-3xl lg:text-5xl text-center font-medium">
            <h1>
              We are a creative lab that creates{" "}
              <RainbowHighlight color={colors[2]}>
                <span className="text-white">bespoke digital products</span>
              </RainbowHighlight>{" "}
              that{" "}
              <RainbowHighlight color={colors[1]}>
                <span className="text-white">live on the internet</span>
              </RainbowHighlight>{" "}
              . We{" "}
              <RoughNotation type="underline" color={colors[2]} padding={0} iterations={3}>
                design
              </RoughNotation>{" "}
              and{" "}
              <RoughNotation type="underline" color={colors[2]} padding={0} iterations={3}>
                develop
              </RoughNotation>{" "}
              digital products and online experiences that help our clients{" "}
              <RoughNotation type="circle" color={colors[2]} padding={2} iterations={3}>
                grow
              </RoughNotation>{" "}
              ,{" "}
              <RoughNotation type="circle" color={colors[1]} padding={2} iterations={3}>
                innovate
              </RoughNotation>{" "}
              , and{" "}
              <RoughNotation type="circle" color={colors[2]} padding={2} iterations={3}>
                transform
              </RoughNotation>{" "}
              . We {" "}
              <RoughNotation type="underline" color={colors[1]} padding={0} iterations={3}>
              listen
              </RoughNotation>{" "}, {" "}
              <RoughNotation type="underline" color={colors[1]} padding={0} iterations={3}>
              learn
              </RoughNotation>{" "} and {" "}
              <RoughNotation type="underline" color={colors[1]} padding={0} iterations={3}>
              understand
              </RoughNotation>{" "}  before we build. We 
              <RainbowHighlight color={colors[2]}>
                <span className="text-white">{" "}identify
              your goals together{" "}</span>
              </RainbowHighlight>, then use our expertise to find that sweet
              spot of <RainbowHighlight color={colors[1]}>
                <span className="text-white">{" "}realistic{" "}</span>
              </RainbowHighlight> and <RainbowHighlight color={colors[1]}>
                <span className="text-white">{" "}impactful{" "}</span>
              </RainbowHighlight>.
            </h1>
          </div>
          <div className="flex text-center justify-center items-center">
            <h2 className="text-xl lg:text-2xl font-bold text-taran-blue py-2 mt-12 lg:mt-16">
              We are,
            </h2>
          </div>
          <div className="flex justify-center items-center mt-3">
            <img className="h-16 lg:h-28 w-auto" src={logo} alt="Logo" />
          </div>
          <div className="flex flex-col lg:w-full justify-center items-center text-center mt-8">
            <div className="text-taran-blue font-black uppercase text-2xl lg:text-4xl py-2">
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
                    .typeString("<span>Automate</span>")
                    .pauseFor(500)
                    .deleteChars(8)
                    .start();
                }}
              />
            </div>
            {/* <h2 className="text-xl lg:text-2xl font-semibold text-taran-orange">
              Out of the Box Digital Products that suite all your Digital needs
            </h2> */}
          </div>
        </div>
      </div>
    </section>
  );
}
