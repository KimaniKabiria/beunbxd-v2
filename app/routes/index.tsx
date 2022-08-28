import Hero from "~/components/landing/Hero";
import Services from "~/components/landing/Services";
import HireUs from "~/components/landing/HireUs";
import OurApproach from "~/components/landing/Approach";
import ProductFeatures from "~/components/landing/ProductFeatures";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }} className="w-full -mt-20">
      <Hero />
      <div className="flex flex-col justify-center items center">
        <Services />
        <HireUs />
        <OurApproach />
        <ProductFeatures />
      </div>
    </div>
  );
}
