import React from 'react'
import BackIcon from '../../Components/BackIcon'
import HeaderOne from '../../Components/HeaderOne'
import SerAgTwoInputContainer from '../../Components/SerAgTwoInputContainer'
import Footer from '../../Components/Footer'
import HeaderSix from '../../Components/HeaderSix'
import { Link } from 'react-router-dom'

export default function ServiceAgreementThree() {
  return (
    <div>
      <Link to="/ServiceAgreementTwo">
      <BackIcon/>
      </Link>
      <HeaderOne value= "Service Agreement"/>
      <HeaderSix value ="Edit service agreement details"/>
      <SerAgTwoInputContainer/>
      
      <Footer/>

    </div>
  )
}
