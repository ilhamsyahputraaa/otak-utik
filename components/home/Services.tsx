import Image from 'next/image';
import React from 'react'

const Services = () => {
  return (
    <div className=" px-[120px] py-[100px]">
      <div className="lg:flex gap-5 flex items-center justify-between">
        <div className="w-full">
          <div className="w-full text-white lg:text-5xl font-medium font-['Space Grotesk'] lg:leading-[60px] text-2xl leading-loose">
            Design Services
          </div>
          <div className="mt-6 lg:mt-7 text-white text-opacity-60 text-base font-normal font-['Pathway Extreme'] leading-normal w">
            We’re spread our wings to cover up your needs.
          </div>
        </div>

        {/* section gambar */}
        <button className="mt-10 h-16 px-7 py-4 rounded-lg shadow border border-gray-300 justify-center items-center gap-3 inline-flex w-[160px]">
          Learn More
        </button>
      </div>

      <div className="mt-16 flex gap-8">
        {/* Sosmed */}
        <div className="w-1/3 p-8 bg-black bg-opacity-25 rounded-2xl border-2 border-violet-500 backdrop-blur-[50px] flex-col justify-start items-start inline-flex">
          <div className="w-[314.67px] text-violet-500 text-3xl font-medium font-['Space Grotesk'] leading-[38px] mb-4">
            Social Media Design
          </div>
          <div className="w-[314.67px] text-stone-300 text-base font-normal font-['Pathway Extreme'] leading-normal mb-10">
            Your brand needs a memorable visual identity on social media.
          </div>
          <Image
            src={"/home/ilustration/Sosmed Design.png"}
            alt={"/"}
            width={500}
            height={500}
          />
        </div>
        {/* Sosmed */}
        <div className="w-1/3 p-8 bg-black bg-opacity-25 rounded-2xl border-2 border-sky-500 backdrop-blur-[50px] flex-col justify-start items-start inline-flex">
          <div className="w-[314.67px] text-sky-500 text-3xl font-medium font-['Space Grotesk'] leading-[38px] mb-4">
            Branding
          </div>
          <div className="w-[314.67px] text-stone-300 text-base font-normal font-['Pathway Extreme'] leading-normal mb-10">
            Where a brand is a promise, connection, and memorable identity.
          </div>
          <Image
            src={"/home/ilustration/Branding.png"}
            alt={"/"}
            width={500}
            height={500}
          />
        </div>
        {/* Sosmed */}
        <div className="w-1/3 p-8 bg-black bg-opacity-25 rounded-2xl border-2 border-amber-500 backdrop-blur-[50px] flex-col justify-start items-start inline-flex">
          <div className="w-[314.67px] text-amber-300 text-3xl font-medium font-['Space Grotesk'] leading-[38px] mb-4">
            Web Design & Dev
          </div>
          <div className="w-[314.67px] text-stone-300 text-base font-normal font-['Pathway Extreme'] leading-normal mb-10">
            Engineering digital experiences to elevate your brand.
          </div>
          <Image
            src={"/home/ilustration/Sosmed Design.png"}
            alt={"/"}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default Services
