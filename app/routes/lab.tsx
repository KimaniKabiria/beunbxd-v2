import AboutHero from "~/components/about/AboutHero";
import AboutCompany from "~/components/about/AboutComapany";
import WhyUs from "~/components/about/WhyUs";
import HowWeDo from "~/components/about/HowWeDo";
import HireUs from "~/components/about/HireUs";

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Lab() {
  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="w-full"
    >
      <RoughNotationGroup show={true}>
        <AboutHero />
        <AboutCompany />
        <WhyUs />
        <HireUs />
        <HowWeDo />
      </RoughNotationGroup>
    </div>
  );
}
