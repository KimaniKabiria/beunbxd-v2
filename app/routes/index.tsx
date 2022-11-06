import Hero from "~/components/landing/Hero";
import Services from "~/components/landing/Services";
import HireUs from "~/components/landing/HireUs";
import OurApproach from "~/components/landing/Approach";
import ProductFeatures from "~/components/landing/ProductFeatures";
import InDepthServices from "~/components/landing/InDepthServices";
import CompaniesSlider from "~/components/landing/CompaniesSlider";
import UnbxdHero from "~/components/landing/UnbxdHero";
import ProblemIntro from "~/components/landing/ProblemIntro";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }} className="w-full -mt-20">
      <UnbxdHero />
      <div className="flex flex-col justify-center items center">
        <ProblemIntro />
        <Services />
        {/* <InDepthServices /> */}
        <HireUs />
        <OurApproach />
        <ProductFeatures />
        <CompaniesSlider />
      </div>
    </div>
  );
}
