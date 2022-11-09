import { BsCheck2Circle } from "react-icons/bs";
import { RoughNotation } from "react-rough-notation";

export default function WhyUs() {
  const colors = ["#009193", "#23074d", "#cc5333", "#3B82F6"];
  return (
    <section className="flex flex-col mx-auto lg:w-11/12 rounded-2xl">
      <div className="flex flex-col justify-center items-center p-12 lg:p-20">
        <div className="flex p-3">
          <RoughNotation type="circle" color={colors[2]} padding={2}>
            <h1 className="inline-block text-taran-blue p-3 lg:text-5xl text-3xl font-bold mb-2 lg:mb-4">
              Why Us ?
            </h1>
          </RoughNotation>
        </div>
        <div className="flex text-center justify-center items-center px-6">
          <div className="xl:w-2/3">
            <p className="text-lg font-medium mb-4">
              We believe we are best equiped to handle your project. With a
              combined experience of over 12+ years, our team have become
              masters at their skills and we know a thing or two about what we
              do.
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:px-20 py-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-10 lg:w-full justify-center items-center">
            <div className="flex flex-col shadow-2xl hover:shadow-xl mx-auto w-full bg-red-100/30 dark:bg-red-100/10 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md my-4">
              <div className="flex flex-row font-bold">
                <BsCheck2Circle className="w-8 h-8 text-taran-blue" />
                <RoughNotation
                  type="underline"
                  color={colors[1]}
                  padding={0}
                  iterations={4}
                >
                  <p className="px-4 text-xl lg:text-2xl text-taran-orange">
                    Adaptable Designs
                  </p>
                </RoughNotation>
              </div>
              <p className="mt-4 lg:pl-12">
                We love to create. Our designers have excuisite taste and a good
                eye for something bespoke. So you should expect that level of
                design work on your project.
              </p>
            </div>
            <div className="flex flex-col shadow-2xl  hover:shadow-xl mx-auto w-full bg-yellow-100/30 dark:bg-yellow-100/10 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md my-4">
              <div className="flex flex-row font-bold">
                <BsCheck2Circle className="w-8 h-8 text-taran-blue" />
                <RoughNotation
                  type="underline"
                  color={colors[1]}
                  padding={0}
                  iterations={4}
                >
                  <p className="px-4 text-xl lg:text-2xl text-taran-orange">
                    Great Developers
                  </p>
                </RoughNotation>
              </div>
              <p className="mt-4 lg:pl-12">
                The most valuable part of our company is the people. Our
                devopers love technology and thats why we create it. We invest
                in learning to help everyone grow faster.
              </p>
            </div>
            {/* </div>
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-10 lg:w-full justify-center items-center mt-6 lg:mt-8"> */}
            <div className="flex flex-col shadow-2xl  hover:shadow-xl mx-auto w-full bg-blue-300/20 dark:bg-red-100/10 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md my-4">
              <div className="flex flex-row font-bold">
                <BsCheck2Circle className="w-8 h-8 text-taran-blue" />
                <RoughNotation
                  type="underline"
                  color={colors[1]}
                  padding={0}
                  iterations={4}
                >
                  <p className="px-4 text-xl lg:text-2xl text-taran-orange">
                    Always there to help you
                  </p>
                </RoughNotation>
              </div>
              <p className="mt-4 lg:pl-12">
                Building strong, long-lasting relations is crucial for our
                business. We want you to succeed and grow with us. We`ll do our
                best to make it happen.
              </p>
            </div>
            <div className="flex flex-col shadow-2xl hover:shadow-xl mx-auto w-full bg-purple-100/20 dark:bg-red-100/10 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md my-4">
              <div className="flex flex-row font-bold">
                <BsCheck2Circle className="w-8 h-8 text-taran-blue" />
                <RoughNotation
                  type="underline"
                  color={colors[1]}
                  padding={0}
                  iterations={4}
                >
                  <p className="px-4 text-xl lg:text-2xl text-taran-orange">
                    Faster than Agile
                  </p>
                </RoughNotation>
              </div>
              <p className="mt-4 lg:pl-12">
                By working on different kinds of projects and teams, we have
                come up with a working process that promises to deliver as fast
                as possible while being efficient in our work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
