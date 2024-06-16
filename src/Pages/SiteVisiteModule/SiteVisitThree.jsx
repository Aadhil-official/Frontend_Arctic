import React from 'react'
import BackIcon from '../../Components/BackIcon'
import HeaderOne from '../../Components/HeaderOne'
import SiteVisitThreeInputContainer from '../../Components/SiteVisitComponents/SiteVisitThreeInputContainer'
import Footer from '../../Components/Footer'
//import SiViSingleButton from '../../Components/SiteVisitComponents/SiViSingleButton'
import { Link } from 'react-router-dom'

export default function SiteVisitThree() {
  return (
    <div>
      <Link to="/SiteVisitTwo">
      <BackIcon/>
      </Link>
      <HeaderOne value='Site Visit Details'></HeaderOne>
      <SiteVisitThreeInputContainer/>
     
      <Footer/>
    </div>
  )
}
