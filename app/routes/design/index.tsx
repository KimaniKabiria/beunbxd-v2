import DesignHero from "~/components/design/DesignHero";

export default function DesignIndex() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }} className="w-full">
      <DesignHero />

      <div className="flex lg:p-32 p-12 justify-center items-center">
            <h1 className="lg:text-6xl text-3xl">You deserve a <span className="text-taran-blue underline font-medium"> dedicated partner</span> to help you design <span className="text-taran-orange underline font-medium"> growth-oriented products</span> that create impact for your customers.</h1>
        </div>
    </div>
  );
}
