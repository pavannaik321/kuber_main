'use client'

import OurStorySection from '@/components/aboutus'
import CategoryGrid from '@/components/entitycomponent'
import UniversityNavbar from '@/components/header'
import HeroSection from '@/components/HeroSection'
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


    </div>
  )
}













