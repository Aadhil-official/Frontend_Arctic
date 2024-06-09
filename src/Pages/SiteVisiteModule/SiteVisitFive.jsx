import React from 'react'
import BackIcon from '../../Components/BackIcon'
import PrintMsgIcon from '../../Components/SiteVisitComponents/PrintMsgIcon'
import Footer from '../../Components/Footer'
import HeaderOne from '../../Components/HeaderOne'
import { Link } from 'react-router-dom'


export default function SiteVisitFive() {
  return (
    <div>
      <Link to="/SiteVisitFour">
      <BackIcon/>
      </Link>
      <PrintMsgIcon/>
      <HeaderOne value='Site Visit Scheduled Successfully!'/>
      <Footer/>
      
    </div>
  )
}
