import React from "react";
import lottie from "lottie-web";
import startup from "../../assets/images/startup.png";
import { RainbowHighlight } from "../includes/RainbowHighlight";
import { Button } from "@material-tailwind/react";

import Article from "../../assets/lotties/article.json";

export default function ProblemIntro() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#article"),
      animationData: Article,
    });
  }, []);

  const colors = ["#fcf6f5", "#cc5333", "#cc5333", "#3B82F6"];

  return (
    <section className="flex items-center mx-auto w-full -mt-48">
      <div className="flex bg-gradient-to-r from-taran-orange to-taran-blue text-white mx-auto items-center justify-start mt-4 mb-16 px-4 py-20 rounded-3xl">
        <div className="flex flex-col p-4 lg:p-20">
          <div className="flex lg:w-9/12 justify-start items-center">
            <h1 className="lg:text-6xl text-3xl">
              You deserve a{" "}
              <span className="text-taran-blue underline font-medium">
                {" "}
                <RainbowHighlight color={colors[0]}>
                  Dedicated Partner
                </RainbowHighlight>
              </span>{" "}
              to help you design and develop{" "}
              <span className="text-taran-orange underline font-medium">
                {" "}
                <RainbowHighlight color={colors[0]}>
                  growth-oriented products
                </RainbowHighlight>
              </span>{" "}
              that create impact for your customers.
            </h1>
          </div>
          <div className="text-unbxd-bg text-lg lg:w-10/12 py-4">
            <p>
              It’s amazing how many small businesses still haven’t gotten around
              to building a website. We get it. You’re a busy professional and
              you’re hard at work doing the things that pay the bills. But, have
              you considered that by skipping the website, you’re losing
              potential customers? Even if you’ve taken the time to build out
              your Social Media presence and have your products or services
              displayed on Social Media, you’re still missing out. We are a
              Creative Studio that Designs and Builds out of the Box Digital
              Products designed and developed to suite your Digital Needs !
            </p>
          </div>
          <div className="py-6">
            <a href="/about">
              <Button
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-lg lg:text-xl font-medium text-taran-blue bg-unbxd-bg border-taran-blue hover:text-taran-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-taran-orange"
                ripple={true}
              >
                <div id="article" className="w-12 h-12 pr-2" />
                <p className="flex">Find Out More!</p>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
