import React from "react";
import lottie from "lottie-web";
import { Button } from "@material-tailwind/react";

import Designer from "../../assets/lotties/designer.json";
import WebsiteDesigner from "../../assets/lotties/website-designer.json";
import Ecommerce from "../../assets/lotties/ecommerce.json";

const Tabs = () => {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#designer"),
      animationData: Designer,
    });
    lottie.loadAnimation({
      container: document.querySelector("#website-designer"),
      animationData: WebsiteDesigner,
    });
    lottie.loadAnimation({
      container: document.querySelector("#ecommerce"),
      animationData: Ecommerce,
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
                Unbxing Websites
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
                Unbxing E-Commerce
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
                Unbxing Automation
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
                Unbxing Business Solutions
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
                Unbxing The Market
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-white">
            <div className="p-8 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="flex items-center justify-center flex-col lg:flex-row">
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
                  <div className="flex items-center justify-center flex-col lg:flex-row">
                    <div className="lg:w-1/2">
                      <div id="website-designer" />
                    </div>
                    <div className="p-8 lg:w-1/2">
                      <p>
                        If you want to stand out in a competitive niche, get
                        your business to the next level, and reach a larger
                        audience, you might need a great web presence for your
                        business. Unbxd Creative Lab is a a Creative Web
                        Development Company Focused On Growing Brands Online.
                      </p>
                      <br />
                      <p>
                        We are product developers, advisors and engineers
                        solving business challenges via creating future-ready
                        apps, websites and digital solutions.
                      </p>
                      <br />
                      <p>
                        We provide website development services that are on the
                        cutting edge of today’s technologies. Our Web developers
                        are versed in all Web technologies such as WordPress,
                        Drupal, Magento, Shopify. We even custom develop
                        websites and web applications in React, Laravel Php
                        Python Django, NodeJS, Ruby on Rails, and .NET. Our
                        technical wizards mix a potent combination of nerd
                        learning, geek fest participation, Spock-like technical
                        brainstorm sessions, and endless hours watching online
                        tech conferences and listening to propeller head
                        podcasts. Are these guys geeks? You bet they are!
                      </p>
                      <br />
                      <a href="https://clienthub.beunbxd.com/getunbxd">
                        <Button
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-lg lg:text-xl font-medium text-white bg-gradient-to-r from-taran-blue to-taran-orange border-taran-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-taran-orange"
                          ripple={true}
                        >
                          <p className="flex">START UNBXING YOUR WEBSITE</p>
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="flex items-center justify-center flex-col lg:flex-row">
                    <div className="lg:w-1/2">
                      <div id="ecommerce" />
                    </div>
                    <div className="p-8 lg:w-1/2">
                      <p>
                        Your website is more than a brochure. Your website is
                        meant to inspire action. Unbxd's websites give the user
                        a clear pathway to this action (the sale). Useful
                        information is easy-to-read and compelling, while strong
                        calls to action push them through to the next step of
                        the buyer’s journey. With clean and intuitive UI/UX
                        design, mobile compatibility and fast page load speeds,
                        you’ll see more completed purchases, higher average
                        order value and improved ROI for your online store with
                        our e-commerce website development experience.¸
                      </p>
                      <br />
                      <p>
                        We experience working with the world class e-commerce
                        platforms, we can analyse, collect data and create a
                        suitable package that will perfectly fit your needs and
                        provide a bespoke online experience for your customer
                        and empower them to make that decision to add to cart
                        and buy your products.
                      </p>
                      <br />
                      <p>
                        We provide website development services that are on the
                        cutting edge of today’s technologies. Our Web developers
                        are versed in all Web technologies such as WordPress,
                        Drupal, Magento, Shopify. We even custom develop
                        websites and web applications in React, Laravel Php
                        Python Django, NodeJS, Ruby on Rails, and .NET. Our
                        technical wizards mix a potent combination of nerd
                        learning, geek fest participation, Spock-like technical
                        brainstorm sessions, and endless hours watching online
                        tech conferences and listening to propeller head
                        podcasts. Are these guys geeks? You bet they are!
                      </p>
                      <br />
                      <a href="https://clienthub.beunbxd.com/getunbxd">
                        <Button
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-lg lg:text-xl font-medium text-white bg-gradient-to-r from-taran-blue to-taran-orange border-taran-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-taran-orange"
                          ripple={true}
                        >
                          <p className="flex">START UNBXING YOUR WEBSITE</p>
                        </Button>
                      </a>
                    </div>
                  </div>
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
