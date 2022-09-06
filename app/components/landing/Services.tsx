import React from "react";
import lottie from "lottie-web";

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
  return (
    <section className="flex flex-col mx-auto xl:w-11/12 rounded-2xl">
      <div className="lg:py-20">
        {/* UI / UX Design */}
        <div className="container mx-auto px-6 md:px-0 items-center flex flex-col lg:flex-row mt-4">
          <div className="lg:w-1/2 lg:ml-12">
            <h1 className="flex items-center text-white no-underline">
              <div id="ui-design" />
            </h1>
          </div>
          <div className="mt-4 w-full lg:w-2/3 text-black xl:mr-24">
            <div className="">
              <div className="xl:p-12 lg:p-8 p-6 bg-white rounded-2xl shadow-2xl hover:shadow-xl">
                <h3 className="leading-relaxed text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-taran-orange lg:text-left mt-4">
                  UI / UX &nbsp;
                  <span className="bg-taran-blue text-white font-bold">
                    {" "}
                    Design{" "}
                  </span>
                  &nbsp;
                </h3>
                <p className="mt-4 text-left leading-relaxed">
                  It all starts with a bespoke design. We create tailor made
                  designs for your website or app to give your project that
                  unique and personal touch to your clients.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-full items-center justify-center py-8 lg:-mt-20">
          <div className="w-12 h-12">
            <div id="pulsey" />
          </div>
        </div>

        {/* Development */}
        <div className="container mx-auto px-6 md:px-0 items-center flex flex-col lg:flex-row mt-4 mb-8 lg:mb-0">
          <div className="lg:w-1/2 lg:ml-12 lg:order-last">
            <h1 className="flex items-center text-white no-underline">
              <div id="develop" />
            </h1>
          </div>
          <div className="mt-4 lg:-mt-8 lg:mb-12 w-full lg:w-2/3 text-black xl:mr-24">
            <div className="">
              <div className="xl:p-12 lg:p-8 p-6 bg-white rounded-2xl shadow-2xl hover:shadow-xl">
                <h3 className="leading-relaxed text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-taran-orange lg:text-left mt-4">
                  Web & App &nbsp;
                  <span className="bg-taran-blue text-white font-bold">
                    {" "}
                    Development{" "}
                  </span>
                  &nbsp;
                </h3>
                <p className="mt-4 text-left leading-relaxed">
                  We help in turning ideas into products. We have a team of well
                  experienced developers who love creating technology. We help
                  project teams to design and develop human centered products.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-full items-center justify-center">
          <div className="w-12 h-12">
            <div id="pulsey2" />
          </div>
        </div>

        {/* Digital Marketing */}
        <div className="container mx-auto px-6 md:px-0 items-center flex flex-col lg:flex-row mt-4 mb-8 lg:mb-0">
          <div className="lg:w-1/2 lg:ml-12">
            <h1 className="flex items-center text-white no-underline">
              <div id="market" />
            </h1>
          </div>
          <div className="mt-4 lg:-mt-8 w-full lg:w-2/3 text-black xl:mr-24">
            <div className="">
              <div className="xl:p-12 lg:p-8 p-6 bg-white rounded-2xl shadow-2xl hover:shadow-xl">
                <h3 className="leading-relaxed text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-taran-orange lg:text-left mt-4">
                  Digital &nbsp;
                  <span className="bg-taran-blue text-white font-bold">
                    {" "}
                    Marketing{" "}
                  </span>
                  &nbsp;
                </h3>
                <p className="mt-4 text-left leading-relaxed">
                  By understanding your users and business needs, we create
                  custom digital campaigns that help you deliver your message to
                  specific clients through the right digital channels. This way,
                  you can gather feedback directly from individual users, and
                  analyse the next steps for your business with marketing
                  performance reports.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-full items-center justify-center py-8 lg:-mb-20">
          <div className="w-12 h-12">
            <div id="pulsey3" />
          </div>
        </div>

        {/* Automation */}
        <div className="container mx-auto px-6 md:px-0 items-center flex flex-col lg:flex-row mt-4 mb-8 lg:mb-12">
          <div className="lg:w-1/2 lg:ml-12 lg:order-last">
            <h1 className="flex items-center text-white no-underline">
              <div id="automation" />
            </h1>
          </div>
          <div className="mt-4 lg:-mt-8 lg:mb-12 w-full lg:w-2/3 text-black xl:mr-24">
            <div className="">
              <div className="xl:p-12 lg:p-8 p-6 bg-white rounded-2xl shadow-2xl hover:shadow-xl">
                <h3 className="leading-relaxed text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-taran-orange lg:text-left mt-4">
                  Business &nbsp;
                  <span className="bg-taran-blue text-white font-bold">
                    {" "}
                    Automation{" "}
                  </span>
                  &nbsp;
                </h3>
                <p className="mt-4 text-left leading-relaxed">
                  Let the Robots do the dirty work for you. We build fully
                  automated workflows that takes over all your repetitive daily
                  tasks and let's you focus on whats important, Growth and
                  Making Money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
