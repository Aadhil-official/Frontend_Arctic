import React from 'react'
import BackIcon from '../../Components/BackIcon'
import HeaderOne from '../../Components/HeaderOne'
import SiteVisitInputContainer from '../../Components/SiteVisitComponents/SiteVisitInputContainer'
import Footer from '../../Components/Footer'
import SiViSingleButton from '../../Components/SiteVisitComponents/SiViSingleButton'
import { Link } from 'react-router-dom'

export default function SiteVisitTwo() {
  return (
    <div>
      <Link to="/SiteVisitOne">
      <BackIcon/>
      </Link>
      <HeaderOne value='Site Visit Details'></HeaderOne>
      <SiteVisitInputContainer/>
      <Link to="/SiteVisitThree">
      <SiViSingleButton value='Edit Details'/>
      </Link>
      <Footer/>
    </div>
  );
}
