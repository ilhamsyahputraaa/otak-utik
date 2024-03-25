import Image from "next/image";
import React from "react";

const DigitalBrandingTrivia = () => {
  return (
    <div className="lg:p-[120px] flex items-center justify-center gap-[120px] ">
      <div className="lg:w-1/2 w-full">
        <Image
          src={"/home/ilustration/section2.png"}
          alt={""}
          width={1000}
          height={1000}
        />
        <div className="w-[499px] text-neutral-50 text-6xl font-medium font-['Space Grotesk'] leading-[72px]">
          Digital Branding Trivia
        </div>
        <div className="w-[499px] text-stone-300 text-lg font-normal font-['Pathway Extreme'] leading-7">
          We believe that the best way to create successful marketing campaigns
          is to work closely with our clients to understand their goals and
          challenges.
        </div>
        {/* section gambar */}
        <button className="mt-10 h-16 px-7 py-4 rounded-lg shadow border border-gray-300 justify-center items-center gap-3 inline-flex">
          Learn More
        </button>
      </div>
      <div className="w-1/2 flex flex-col gap-10">
        {/* Item 1 */}
        <div className="flex gap-3">
          <div className="">
            <Image
              src={"/home/icons/discovery.svg"}
              alt={"discovery"}
              width={200}
              height={200}
              className="w-[200px]"
            />
          </div>
          <div>
            <div className="text-pink-500 text-2xl font-medium font-['Space Grotesk'] leading-loose">
              Discovery
            </div>
            <div className=" text-rose-100 text-lg font-normal font-['Pathway Extreme'] leading-7">
              We meet with you to learn about your business, your goals, and
              your target audience.
            </div>
          </div>
        </div>
        {/* Item 2 */}
        <div className="flex gap-3">
          <div className="">
            <Image
              src={"/home/icons/strategy.svg"}
              alt={"discovery"}
              width={200}
              height={200}
              className="w-[200px]"
            />
          </div>
          <div>
            <div className="text-red-500 text-2xl font-medium font-['Space Grotesk'] leading-loose">
              Strategy
            </div>
            <div className=" text-red-200 text-lg font-normal font-['Pathway Extreme'] leading-7">
              We develop a customized marketing strategy that is based on your
              unique needs and goals.
            </div>
          </div>
        </div>
        {/* Item 3 */}
        <div className="flex gap-3">
          <div className="">
            <Image
              src={"/home/icons/execution.svg"}
              alt={"discovery"}
              width={200}
              height={200}
              className="w-[200px]"
            />
          </div>
          <div>
            <div className="text-sky-500 text-2xl font-medium font-['Space Grotesk'] leading-loose">
              Execution
            </div>
            <div className=" text-blue-100 text-lg font-normal font-['Pathway Extreme'] leading-7">
              We execute our strategy using the latest digital marketing tools
              and techniques.
            </div>
          </div>
        </div>
        {/* Item 4 */}
        <div className="flex gap-3">
          <div className="">
            <Image
              src={"/home/icons/measurement.svg"}
              alt={"discovery"}
              width={200}
              height={200}
              className="w-[200px]"
            />
          </div>
          <div>
            <div className="text-amber-300 text-2xl font-medium font-['Space Grotesk'] leading-loose">
              Measurement
            </div>
            <div className=" text-amber-100 text-lg font-normal font-['Pathway Extreme'] leading-7">
              We track the results of our campaigns so that we can make
              adjustments as needed.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalBrandingTrivia;
