import React from 'react'
import BackIcon from '../../Components/BackIcon'
import HeaderOne from '../../Components/HeaderOne'
import HeaderSix from '../../Components/HeaderSix'
import Calender from '../../Components/SiteVisitComponents/Calender'
import SiteVisitHorizontal from '../../Components/SiteVisitComponents/SiteVisitHorizontal'
import Time from '../../Components/SiteVisitComponents/Time'
import Footer from '../../Components/Footer'
import SiViSingleButton from '../../Components/SiteVisitComponents/SiViSingleButton'

export default function SiteVisitSeven () {
  return (
    <div>
      <BackIcon/>
      <HeaderOne value='Scheduling Site Visit'/>
      <HeaderSix value='Scheduling Your Site Visit Here!'/>
      <SiteVisitHorizontal/>
      <Calender/>
      <Time/>
      <SiViSingleButton value='Update'/>
      <Footer/>
      
    </div>
  )
}
