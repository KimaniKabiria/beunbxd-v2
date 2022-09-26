import React from "react";
import lottie from "lottie-web";

import UiUx from "../../assets/lotties/ui-ux-2.json";

export default function WhatIsUiUx() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#ui-ux"),
      animationData: UiUx,
    });
  }, []);
  return (
    <>
      <section className="flex flex-col mx-auto xl:w-11/12 rounded-2xl">
        <div className="lg:p-20">
          <div className="flex flex-col lg:flex-row">
            <div className="flex items-center md:w-2/3 lg:w-full lg:-ml-20">
              <div id="ui-ux" />
            </div>
            <div className="flex flex-col lg:w-2/3 p-8 lg:p-0 items-center justify-center text-center">
              <h1 className="text-xl lg:text-3xl text-taran-blue font-medium">
                So, what is UX/UI Design?
              </h1>
              <p className="text-base lg:text-xl pt-12">UX/UI Design is designing the user experience and user interface. Or, basically, designing your user’s journey throughout their entire use of your app or website.</p>
              <p className="text-base lg:text-xl pt-12">Common elements of UX/UI design include designing the navigation, information architecture, workflow, and heuristics of your product. This should all be done as you’re making sure all of these elements abide by consistent and relatable branding that encompasses a look and feel that’s tailored to your users.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
