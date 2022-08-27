import Hero from "~/components/landing/Hero";
import Services from "~/components/landing/Services";
import HireUs from "~/components/landing/HireUs";
import OurApproach from "~/components/landing/Approach";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }} className="w-full">
      <Hero />
      <Services />
      <HireUs />
      <OurApproach />
    </div>
  );
}
