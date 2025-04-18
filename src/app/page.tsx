'use client'

import OurStorySection from '@/components/aboutus'
import CategoryGrid from '@/components/entitycomponent'
import Footer from '@/components/footer'
import UniversityNavbar from '@/components/header'
import HeroSection from '@/components/HeroSection'
import Ourteam from '@/components/Outeam'
import StatsSection from '@/components/StatsSection'


// import Image from 'next/image'

export default function Home() {

  return (
    <div>



      <UniversityNavbar />
      <HeroSection />
      <CategoryGrid />
      <StatsSection />
      <OurStorySection />
      <StatsSection />
      <Ourteam />
      <Footer />

    </div>
  )
}













