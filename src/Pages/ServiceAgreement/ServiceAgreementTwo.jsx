import React from 'react'
import BackIcon from '../../Components/BackIcon'
import HeaderOne from '../../Components/HeaderOne'
import HeaderSix from '../../Components/HeaderSix'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
import SerAgFiveInputContainer from '../../Components/SerAgFiveInputContainer'

export default function ServiceAgreementTwo() {
  return (
    <div>
      <Link to="/">
      <BackIcon/>
      </Link>
      <HeaderOne value ="Service Agreement"/>
      <HeaderSix value ="View and edit service agreement details"/>
      <SerAgFiveInputContainer/>
      <Footer/>
      
    </div>
  )
}
