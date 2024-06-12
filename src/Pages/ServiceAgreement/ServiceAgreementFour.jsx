import React from 'react'
import BackIcon from '../../Components/BackIcon'
import HeaderOne from '../../Components/HeaderOne'
import SerAgFilter from '../../Components/SerAgFilter'
import SerAgSearch from '../../Components/SerAgSearch'
import SerAgSixInputContainer from '../../Components/SerAgSixInputContainer'
import Footer from '../../Components/Footer'

export default function ServiceAgreementFour() {
  return (
    <div>
      <BackIcon/>
      <HeaderOne value= "Service agreement List"/>
      <SerAgFilter/>
      <SerAgSearch/>
      <SerAgSixInputContainer/>
      <Footer/>


    </div>
  )
}
