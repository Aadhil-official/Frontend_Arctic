import React from 'react'
import BackIcon from '../../Components/BackIcon'
import HeaderOne from '../../Components/HeaderOne'
import SiteVisitInputContainer from '../../Components/SiteVisitComponents/SiteVisitInputContainer'
import SiViSingleButton from '../../Components/SiteVisitComponents/SiViSingleButton'
import Footer from '../../Components/Footer'

export default function SiteVisitSix() {
  return (
    <div>
      <BackIcon/>
      <HeaderOne value='Site Visit Details'/>
      <SiteVisitInputContainer/>
      <SiViSingleButton value='Update'/>
      <Footer/>
      
    </div>
  )
}
