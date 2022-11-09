import React from "react"
import lottie from "lottie-web"
import startup from "../../assets/images/startup.png"

import Team from "../../assets/lotties/team.json"

export default function AboutCompany() {
    React.useEffect(() => {
      lottie.loadAnimation({
        container: document.querySelector("#team"),
        animationData: Team
      });
    }, []);
return (
  <section className="flex items-center mx-auto">
        <div className="flex bg-gradient-to-r from-taran-orange to-taran-blue text-white mx-auto items-center justify-center mt-4 mb-16 py-8 px-4 rounded-3xl">
            <div className="flex flex-col xl:flex-row p-8 lg:p-20">
                <div className="xl:w-2/3">
                    <h1 className="flex items-center justify-center">
                        <div id="team"/>
                    </h1>
                </div>
                <div className="flex mt-4 xl:mt-0 w-full xl:w-1/2 items-center justify-center lg:pl-4 xl:px-12 pb-6">
                    <div className="">
                        <p className="mt-4 lg:text-xl text-base text-center lg:text-left leading-relaxed">
                            We are a well oiled machine comprised of a team of talented individuals who are gurus in their field of work and masters of their skill.
                            Here we have a belief in being at the very top of our game.
                        </p>
                        <p className="mt-4 lg:text-xl text-base text-center lg:text-left leading-relaxed">
                            We believe we are always learning, and whilst we may have refined a process that can deliver exceptional results every time, we are always excited in technological advancements if it can help us continually improve.
                        </p>
                        <p className="mt-4 lg:text-xl text-base text-center lg:text-left leading-relaxed">
                            We seek to learn intimately about you and your users and understand the success criteria for your project. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
</section>


)};