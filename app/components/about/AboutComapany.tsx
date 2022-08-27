import startup from "../../assets/images/startup.png"

export default function AboutCompany() {
return (
  <section className="flex px-4 lg:px-12">
        <div className="flex bg-gradient-to-r from-taran-orange to-taran-blue text-white mx-auto items-center justify-center mt-4 mb-16 py-6 lg:py-0 rounded-2xl">
            <div className="flex flex-col lg:flex-row p-4 lg:p-20">
                <div className="lg:w-1/2 lg:px-12">
                    <h1 className="flex items-center justify-center">
                        <img
                            alt="Designers"
                            className="block w-full mx-auto"
                            src={startup}
                        />
                    </h1>
                </div>
                <div className="flex mt-4 lg:mt-0 w-full lg:w-1/2 items-center justify-center lg:px-20 pb-6">
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