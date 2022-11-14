import DesignHero from "~/components/design/DesignHero";
import WhatWeDesign from "~/components/design/WhatWeDesign";
import DesignProcess from "~/components/design/DesignProcess";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function DesignIndex() {
  const colors = ["#fcf6f5", "#23074d", "#cc5333", "#3B82F6"];
  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="w-full -mt-20"
    >
      <RoughNotationGroup show={true}>
        <DesignHero />

        <section className="flex bg-gradient-to-r from-taran-orange to-taran-blue text-white mx-auto items-center justify-start mt-4 mb-16 px-4 py-20 rounded-3xl">
          <div className="flex lg:p-32 p-12 justify-center items-center">
            <h1 className="lg:text-6xl text-3xl">
              You deserve a{" "}
              <RoughNotation
                type="underline"
                color={colors[0]}
                padding={0}
                iterations={5}
              >
                <span className="text-taran-blue font-medium">
                  {" "}
                  dedicated partner
                </span>
              </RoughNotation>{" "}
              to help you design{" "}
              <RoughNotation
                type="underline"
                color={colors[0]}
                padding={0}
                iterations={5}
              >
                <span className="text-taran-blue font-medium">
                  growth-oriented products
                </span>
              </RoughNotation>{" "}
              that create impact for your customers.
            </h1>
          </div>
        </section>

      <WhatIsUiUx />
      
      <DesignProcess />

    </div>
  );
}
