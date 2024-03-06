import Image from 'next/image'
import React from 'react'

const HeroHome = () => {
  return (
    <div className='h-[100vh]  items-center justify-center px-4 lg:px-[120px] gap-5 w-full lg:flex grid'>
      {/* Section content */}
      <div className='lg:w-1/2 w-full'>
      <div className=" text-neutral-50 lg:text-7xl font-medium font-['Space Grotesk'] lg:leading-[90px]  text-4xl leading-[44px]">Otakutik Redefines Branding with Graphic Brilliance</div>
      <div className="mt-5 lg:mt-7 text-stone-300 text-xl font-normal font-['Pathway Extreme'] leading-[30px]">We helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</div>
      {/* section gambar */}
      <button className='mt-10 h-16 px-7 py-4 rounded-lg shadow border border-gray-300 justify-center items-center gap-3 inline-flex'>
        Let's Connect
      </button>
      </div>
      {/* section gambar */}
      <div className='lg:w-1/2 lg:order-last order-first'>
        <Image src={'/home/otak.png'} alt={'OtakUtik'} width={1000} height={1000} className='w-full'/>
      </div>
    </div>
  )
}

export default HeroHome
