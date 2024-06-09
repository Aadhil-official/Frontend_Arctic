import React from 'react'
import BackIcon from '../../Components/BackIcon'
import HeaderOne from '../../Components/HeaderOne'
import SerAgFilter from '../../Components/SerAgFilter'
import SerAgSearch from '../../Components/SerAgSearch'
import SerAgThreeInputContainer from '../../Components/SerAgThreeInputContainer'
import Footer from '../../Components/Footer'

export default function ServiceAgreementFour() {
  return (
    <div>
      <BackIcon/>
      <HeaderOne value= "Service agreement List"/>
      <SerAgFilter/>
      <SerAgSearch/>
      <SerAgThreeInputContainer/>
      <Footer/>


    </div>
  )
}
