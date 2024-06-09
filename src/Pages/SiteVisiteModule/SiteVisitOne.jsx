import React from 'react'
import BackIcon from '../../Components/BackIcon'
import HeaderOne from '../../Components/HeaderOne'
import SiteVisitFilter from '../../Components/SiteVisitComponents/SiteVisitFilter'
import SiteVisitSearch from '../../Components/SiteVisitComponents/SiteVisitSearch'
import SiteVisitTwoInputContainer from '../../Components/SiteVisitComponents/SiteVisitTwoInputContainer'
import SingleButton from '../../Components/SingleButton'
import SiViSingleButton from '../../Components/SiteVisitComponents/SiViSingleButton'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'

export default function SiteVisitOne() {
  return (
    <div>
      <BackIcon/>
      <HeaderOne value ='Site Visit List'/>
      <SiteVisitFilter/>
      <SiteVisitSearch/>
      <SiteVisitTwoInputContainer/>
      <Link to="/SiteVisitTwo">
      <SiViSingleButton value='Add a new Site Visit'/>
      </Link>
      <Footer/>
    </div>
  )
}
