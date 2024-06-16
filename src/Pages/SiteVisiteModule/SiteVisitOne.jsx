import React from 'react'
import BackIcon from '../../Components/BackIcon'
import HeaderOne from '../../Components/HeaderOne'
import SiteVisitFilter from '../../Components/SiteVisitComponents/SiteVisitFilter'
import SiteVisitSearch from '../../Components/SiteVisitComponents/SiteVisitSearch'
import SiteVisitTwoInputContainer from '../../Components/SiteVisitComponents/SiteVisitTwoInputContainer'
import Footer from '../../Components/Footer'


export default function SiteVisitOne() {
  return (
    <div>
      <BackIcon/>
      <HeaderOne value ='Site Visit List'/>
      <SiteVisitFilter/>
      <SiteVisitSearch/>
      <SiteVisitTwoInputContainer/>
   
      <Footer/>
    </div>
  )
}
