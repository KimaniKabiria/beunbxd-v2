import { GiFastArrow } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import { GrCycle } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";

import { RoughNotation } from "react-rough-notation";

export default function HowWeDo() {
  const colors = ["#009193", "#23074d", "#cc5333", "#3B82F6"];
  return (
    <section className="bg-unbxd-bg flex items-center mx-auto lg:w-11/12">
      <div className="flex flex-col justify-center items-center p-12 lg:p-20">
        <div className="flex flex-col p-3">
          <RoughNotation type="box" color={colors[2]} padding={0}>
            <h1 className="inline-block text-taran-orange p-3 lg:text-5xl text-3xl font-bold mb-2 lg:mb-4">
              How we Do it.
            </h1>
          </RoughNotation>
          <p className="text-lg text-center font-medium mb-4">
            It&apos;s not Complicated
          </p>
        </div>
        <div className="flex flex-col xl:px-20">
          <div className="p-4">
            <h2 className="text-xl">
              Our Passionate Team. A well defined process. And of course, the
              design and engineering capabilities we have become masters of. You
              can count on us as a ready to go team at any point of the project.
              We have the end-to-end capabilities in-house.
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 w-full justify-center items-center text-center">
              <div className="flex flex-col justify-center items-center text-center p-4">
                <GiFastArrow className="text-taran-blue w-16 h-16" />
                <p className="text-taran-orange font-semibold mt-2">
                  Fast Prototyping
                </p>
              </div>
              <div className="flex flex-col justify-center items-center text-center p-4">
                <MdDesignServices className="text-taran-blue w-16 h-16" />
                <p className="text-taran-orange font-semibold mt-2">
                  User Centric Design Philosophy
                </p>
              </div>
              <div className="flex flex-col justify-center items-center text-center p-4">
                <GrCycle className="text-taran-blue w-16 h-16" />
                <p className="text-taran-orange font-semibold mt-2">
                  Very Matured Delivery Process
                </p>
              </div>
              <div className="flex flex-col justify-center items-center text-center p-4">
                <IoIosPeople className="text-taran-blue w-16 h-16" />
                <p className="text-taran-orange font-semibold mt-2">
                  A Team that Breathes Innovation
                </p>
              </div>
            </div>
            <div className="flex w-full lg:w-1/3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
