import Hero from "~/components/landing/Hero";
import Services from "~/components/landing/Services";
import HireUs from "~/components/about/HireUs";
import OurApproach from "~/components/landing/Approach";
import ProductFeatures from "~/components/landing/ProductFeatures";
import CompaniesSlider from "~/components/landing/CompaniesSlider";
import UnbxdHero from "~/components/landing/UnbxdHero";
import ProblemIntro from "~/components/landing/ProblemIntro";
import GetUnbxd from "~/components/landing/GetUnbxd";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }} className="w-full -mt-20">
      <UnbxdHero />
      <div className="flex flex-col justify-center items center">
        <ProblemIntro />
        <GetUnbxd />
        <Services />
        <ProductFeatures />
        {/* <HireUs /> */}
        <OurApproach />
        <CompaniesSlider />
      </div>
    </div>
  );
}
