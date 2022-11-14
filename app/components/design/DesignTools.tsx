import { RoughNotation } from "react-rough-notation";
import {
  SiAdobexd,
  SiSketch,
  SiInvision,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import { CgFigma } from "react-icons/cg";

export default function DesignTools() {
  return (
    <>
      <section class="py-8">
        <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 class="mb-8 lg:mb-16 text-3xl font-semibold tracking-tight leading-tight text-center text-taran-orange lg:text-4xl">
            <RoughNotation
              type="circle"
              // show = {true}
              padding={30}
              color="#008080"
              iterations={4}
            >
              {" "}
              Our cutting-edge Design tools
            </RoughNotation>
          </h2>
          <div class="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 text-taran-blue">
            <>
              <a href="#" class="flex justify-center items-center" data-tooltip-target="tooltip-figma" >
                <CgFigma className="w-20 h-20" size="fa-3x" />
              </a>
              <div
                id="tooltip-figma"
                role="tooltip"
                class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gradient-to-r from-taran-orange to-taran-blue rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
              >
                Figma
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </>
            <>
              <a href="#" class="flex justify-center items-center" data-tooltip-target="tooltip-xd" >
                <SiAdobexd className="w-20 h-20" size="fa-3x" />
              </a>
              <div
                id="tooltip-xd"
                role="tooltip"
                class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gradient-to-r from-taran-orange to-taran-blue rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
              >
                Adobe XD
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </>
            <>
              <a href="#" class="flex justify-center items-center" data-tooltip-target="tooltip-sketch" >
                <SiSketch className="w-20 h-20" size="fa-3x" />
              </a>
              <div
                id="tooltip-sketch"
                role="tooltip"
                class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gradient-to-r from-taran-orange to-taran-blue rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
              >
                Sketch
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </>
            <>
              <a href="#" class="flex justify-center items-center" data-tooltip-target="tooltip-inv" >
                <SiInvision className="w-20 h-20" size="fa-3x" />
              </a>
              <div
                id="tooltip-inv"
                role="tooltip"
                class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gradient-to-r from-taran-orange to-taran-blue rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
              >
                In-Vision
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </>
            <>
              <a href="#" class="flex justify-center items-center" data-tooltip-target="tooltip-photoshop" >
                <SiAdobephotoshop className="w-20 h-20" size="fa-3x" />
              </a>
              <div
                id="tooltip-photoshop"
                role="tooltip"
                class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gradient-to-r from-taran-orange to-taran-blue rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
              >
                Adobe Photoshop
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </>
            <>
              <a href="#" class="flex justify-center items-center" data-tooltip-target="tooltip-illustrator" >
                <SiAdobeillustrator className="w-20 h-20" size="fa-3x" />
              </a>
              <div
                id="tooltip-illustrator"
                role="tooltip"
                class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gradient-to-r from-taran-orange to-taran-blue rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
              >
                Adobe Illustrator
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </>
          </div>
        </div>
      </section>
    </>
  );
}
