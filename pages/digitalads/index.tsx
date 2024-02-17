import DigitalAdsService from '@/components/digitalads/DigitalAdsService'
import KolManagementDesc from '@/components/digitalads/KolManagementDesc'
import ServiceList from '@/components/digitalads/ServiceList'
import Footer from '@/components/general/Footer'
import HeaderNavigations from '@/components/general/HeaderNavigation'
import Testimonies from '@/components/home/Testimonies'
import React from 'react'

const index = () => {
  return (
    <div>
      <HeaderNavigations />
      <DigitalAdsService />
      <ServiceList />
      <KolManagementDesc />
      <Testimonies />
      <Footer />
    </div>
  )
}

export default index
