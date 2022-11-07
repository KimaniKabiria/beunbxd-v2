import React from "react";
import lottie from "lottie-web";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "../includes/RainbowHighlight";

import Develop from "../../assets/lotties/develop.json";
import UiDesign from "../../assets/lotties/ui-design.json";
import Marketing from "../../assets/lotties/market.json";
import Automation from "../../assets/lotties/ai-automation.json";
import Pulsey from "../../assets/lotties/pulsey.json";

export default function Services() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#ui-design"),
      animationData: UiDesign,
    });
    lottie.loadAnimation({
      container: document.querySelector("#develop"),
      animationData: Develop,
    });
    lottie.loadAnimation({
      container: document.querySelector("#market"),
      animationData: Marketing,
    });
    lottie.loadAnimation({
      container: document.querySelector("#automation"),
      animationData: Automation,
    });
    lottie.loadAnimation({
      container: document.querySelector("#pulsey"),
      animationData: Pulsey,
    });
    lottie.loadAnimation({
      container: document.querySelector("#pulsey2"),
      animationData: Pulsey,
    });
    lottie.loadAnimation({
      container: document.querySelector("#pulsey3"),
      animationData: Pulsey,
    });
  }, []);

  const colors = ["#fcf6f5", "#23074d", "#cc5333", "#3B82F6"];

  return (
    <section className="flex flex-col mx-auto xl:w-11/12 rounded-2xl px-4 lg:px-32">
      <div className="lg:py-20">
        <div className="flex flex-col w-full justify-center items-center text-center py-8 text-white font-black text-4xl lg:text-6xl">
          <RainbowHighlight color={colors[2]}>What we do</RainbowHighlight>
          <p className="text-base text-taran-blue">Here is what's up our sleeves.</p>
        </div>

        <section className="grid lg:grid-cols-2 grid-cols-1 gap-10 antialiased pt-8">
          {/* UI / UX Design */}
          <a href="/design">
            <article className="flex flex-col shadow-xl mx-auto w-full bg-red-100/30 dark:bg-red-100/10 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">
              <div className="lg:h-62 lg:px-12 px-4 lg:py-6">
                <div id="ui-design" />
              </div>
              <h1 className="font-extrabold text-6xl mb-10 text-kimmi-teal dark:text-white">
                <h3 className="leading-relaxed text-3xl xl:text-4xl font-bold text-center text-taran-orange lg:text-left mt-4">
                  UI / UX &nbsp;
                  <span className="text-white font-bold">
                    {" "}
                    <RainbowHighlight color={colors[1]}>
                      Design
                    </RainbowHighlight>{" "}
                  </span>
                  &nbsp;
                </h3>
              </h1>
              <p className="leading-relaxed">
                It all starts with a bespoke design. We create tailor made
                designs for your website or app to give your project that unique
                and personal touch to your clients.
              </p>
            </article>
          </a>

          {/* Development */}
          <a href="#">
            <article className="flex flex-col shadow-xl mx-auto w-full bg-yellow-100/30 dark:bg-yellow-100/10 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">
              <div className="lg:h-62 lg:px-12 px-4 lg:py-8">
                <div id="develop" />
              </div>
              <h1 className="font-extrabold text-6xl mb-10 text-kimmi-teal dark:text-white">
                <h3 className="leading-relaxed text-3xl xl:text-4xl font-bold text-center text-taran-orange lg:text-left mt-4">
                  Web & App &nbsp;
                  <span className="text-white font-bold">
                    {" "}
                    <RainbowHighlight color={colors[1]}>
                      Development
                    </RainbowHighlight>{" "}
                  </span>
                  &nbsp;
                </h3>
              </h1>
              <p className="leading-relaxed">
                We help turn ideas into products. We have a team of well
                experienced developers who love creating technology. We help
                project teams to design and develop human centered products.
              </p>
            </article>
          </a>

          {/* Automation */}
          <a href="#">
            <article className="flex flex-col shadow-xl mx-auto w-full bg-blue-300/20 dark:bg-red-100/10 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">
              <div className="lg:h-62 lg:px-12 px-4 lg:py-6">
                <div id="automation" />
              </div>
              <h1 className="font-extrabold text-6xl mb-10 text-kimmi-teal dark:text-white">
                <h3 className="leading-relaxed text-3xl xl:text-4xl font-bold text-center text-taran-orange lg:text-left mt-4">
                  Business &nbsp;
                  <span className="text-white font-bold">
                    {" "}
                    <RainbowHighlight color={colors[1]}>
                      Automation
                    </RainbowHighlight>{" "}
                  </span>
                  &nbsp;
                </h3>
              </h1>
              <p className="leading-relaxed">
                Let the Robots do the work for you. We build fully automated
                workflows that takes over all your repetitive daily tasks and
                let's you focus on whats important, Growth and Making Money.
              </p>
            </article>
          </a>

          {/* Digital Marketing */}
          <a href="#">
            <article className="flex flex-col shadow-xl mx-auto w-full bg-purple-100/20 dark:bg-red-100/10 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">
              <div className="lg:h-62 lg:px-12 px-4 lg:py-6">
                <div id="market" />
              </div>
              <h1 className="font-extrabold text-6xl mb-10 text-kimmi-teal dark:text-white">
                <h3 className="leading-relaxed text-3xl xl:text-4xl font-bold text-center text-taran-orange lg:text-left mt-4">
                  Digital &nbsp;
                  <span className="text-white font-bold">
                    {" "}
                    <RainbowHighlight color={colors[1]}>
                      Marketing
                    </RainbowHighlight>{" "}
                  </span>
                  &nbsp;
                </h3>
              </h1>
              <p className="leading-relaxed">
                  By understanding your users and business needs, we create
                  custom digital campaigns that help you deliver your message to
                  specific clients through the right digital channels. This way,
                  you can gather feedback directly from individual users, and
                  analyse the next steps for your business with marketing
                  performance reports.
              </p>
            </article>
          </a>
        </section>
      </div>
    </section>
  );
}
