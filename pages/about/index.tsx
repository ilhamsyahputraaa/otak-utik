import ContactUs from '@/components/aboutus/ContactUs'
import HeroAbout from '@/components/aboutus/HeroAbout'
import OurMission from '@/components/aboutus/OurMission'
import OurService from '@/components/aboutus/OurService'
import OurVision from '@/components/aboutus/OurVision'
import Footer from '@/components/general/Footer'
import HeaderNavigations from '@/components/general/HeaderNavigation'
import React from 'react'

const index = () => {
  return (
    <div>
      <HeaderNavigations />
      <HeroAbout />
      <OurVision />
      <OurMission />
      <OurService />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default index
