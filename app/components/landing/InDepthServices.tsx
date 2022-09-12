import React from "react";
import lottie from "lottie-web";
import { Button } from "@material-tailwind/react";

import Designer from "../../assets/lotties/designer.json";

const Tabs = () => {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#designer"),
      animationData: Designer,
    });
  }, []);
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-taran-orange"
                    : "text-taran-blue bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Unbxing Design
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-taran-orange"
                    : "text-taran-blue bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Settings
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-taran-orange"
                    : "text-taran-blue bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Options
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-taran-orange"
                    : "text-taran-blue bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Unbxing Design
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 5
                    ? "text-white bg-taran-orange"
                    : "text-taran-blue bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                Settings
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 6
                    ? "text-white bg-taran-orange"
                    : "text-taran-blue bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link6"
                role="tablist"
              >
                Options
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-white">
            <div className="p-8 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2">
                      <div id="designer" />
                    </div>
                    <div className="p-8 lg:w-1/2">
                      <p>
                        UI/UX design is a defining factor for any digital
                        product these days. We're a user experience and UI
                        design agency focused on improving conversion and
                        increasing customer engagement. Our UI/UX design
                        capabilities don't stop at mobile apps, web
                        applications, or multi‑platform digital experiences. As
                        a UX design agency, we create products and services that
                        provide outstanding usability while fully embracing your
                        brand's personality.
                      </p>
                      <br />
                      <p>
                        There's a purpose to web and app design and we're
                        experts at creating the stunning visuals that work. Our
                        UI/UX design skills will help you to monetize your
                        platforms better.
                      </p>
                      <br />
                      <p>
                        We create meaningful brands by tailoring design
                        strategies around business needs, including User
                        Interface design for digital products, User Experience
                        design, logos, identity systems, icons, mascots, and
                        more.
                      </p>
                      <br />
                      <p>
                        We have helped reshape and rebrand clients all over the
                        spectrum. From an online store with just a basic intent
                        of selling to giving them a full fledged platform where
                        instead of just a store to sell, they can give stories
                        to their products. We have created success stories of
                        turning a simple dream idea for an app into a working
                        prototype, and later shipped it into a ready market
                        product with a bespoke design to help it sell.
                      </p>
                      <br />
                      <a href="https://clienthub.beunbxd.com/getunbxd">
                        <Button
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-lg lg:text-xl font-medium text-white bg-gradient-to-r from-taran-blue to-taran-orange border-taran-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-taran-orange"
                          ripple={true}
                        >
                          <p className="flex">START UNBXING YOUR DESIGN</p>
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function InDepthServices() {
  return (
    <>
      <section className="flex flex-col justify-center items-center lg:w-11/12 px-8 lg:px-0 py-8 mx-auto bg-opacity-70 mb-20">
        <div>
          <h2 className="text-xl lg:text-3xl text-taran-blue font font-medium text-center">
            Have an In-Depth Look at what we can do for you.
          </h2>
        </div>
        <div className="lg:p-12">
          <Tabs />
        </div>
      </section>
    </>
  );
}
