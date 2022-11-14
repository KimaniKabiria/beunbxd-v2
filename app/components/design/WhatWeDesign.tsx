import React from "react";
import lottie from "lottie-web";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "../includes/RainbowHighlight";

import UiUx from "../../assets/lotties/ui-ux-2.json";

export default function WhatWeDesign() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#ui-ux"),
      animationData: UiUx,
    });
  }, []);
  const colors = ["#fcf6f5", "#23074d", "#cc5333", "#3B82F6"];
  return (
    <>
      <section className="flex flex-col mx-auto xl:w-11/12 rounded-2xl">
        <div className="lg:p-20">
          <div className="flex flex-col lg:flex-row">
            <div className="flex items-center md:w-2/3 lg:w-full lg:-ml-20">
              <div id="ui-ux" />
            </div>
            <div className="flex flex-col lg:w-2/3 p-8 lg:p-0 items-center justify-center text-center">
              <h1 className="text-xl lg:text-3xl py-6 text-unbxd-bg font-medium">
                <RainbowHighlight color={colors[2]}>
                  So, what do we Design?
                </RainbowHighlight>
              </h1>
              <>
                <button
                  data-popover-target="popover-default"
                  type="button"
                  class="text-taran-blue bg-unbxd-bg border-2 border-taran-orange focus:ring-4 focus:outline-none focus:ring-taran-orange font-medium rounded-lg text-3xl px-5 py-2.5 text-center my-2"
                >
                  User Interface Design
                </button>
                <div
                  data-popover
                  id="popover-default"
                  role="tooltip"
                  class="inline-block absolute invisible z-10 w-72 text-sm font-light bg-gradient-to-r from-taran-orange to-taran-blue text-white rounded-lg border border-taran-blue shadow-sm opacity-0 transition-opacity duration-300"
                >
                  <div class="p-3 space-y-2">
                    <h3 class="font-semibold text-xl">
                      What is User Interface Design?
                    </h3>
                    <p>
                      User interface (UI) design is the process of designing the
                      look, feel, and interactivity of a digital product.
                    </p>
                    <p>
                      A user interface is the point of interaction between your
                      clients and your product. User interface design is the
                      process of designing how these interfaces look, feel and
                      behave.{" "}
                    </p>
                    <p>
                      We have a team of creative designers that marry your
                      vision, bespoke design language and industry standards of
                      UI Design to create that perfect product that speaks about
                      you.
                    </p>
                  </div>
                  <div data-popper-arrow></div>
                </div>
              </>
              <>
                <button
                  data-popover-target="popover-ux"
                  type="button"
                  class="text-taran-blue bg-unbxd-bg border-2 border-taran-blue focus:ring-4 focus:outline-none focus:ring-taran-blue font-medium rounded-lg text-3xl px-5 py-2.5 text-center my-2"
                >
                  User Experience Design
                </button>
                <div
                  data-popover
                  id="popover-ux"
                  role="tooltip"
                  class="inline-block absolute invisible z-10 w-72 text-sm font-light bg-gradient-to-r from-taran-orange to-taran-blue text-white rounded-lg border border-taran-blue shadow-sm opacity-0 transition-opacity duration-300"
                >
                  <div class="p-3 space-y-2">
                    <h3 class="font-semibold text-xl">
                      What is User Interface Design?
                    </h3>
                    <p>
                      User experience (UX) design is the process design teams
                      use to create products that provide meaningful and
                      relevant experiences to users. UX design involves the
                      design of the entire process of acquiring and integrating
                      the product, including aspects of branding, design,
                      usability and function.
                    </p>
                  </div>
                  <div data-popper-arrow></div>
                </div>
              </>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
