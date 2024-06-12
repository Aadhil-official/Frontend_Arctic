import React from 'react'
import BackIcon from '../../Components/BackIcon'
import HeaderOne from '../../Components/HeaderOne'
import SerAgFilter from '../../Components/SerAgFilter'
import SerAgSearch from '../../Components/SerAgSearch'
import SerAgThreeInputContainer from '../../Components/SerAgThreeInputContainer'
import Footer from '../../Components/Footer'
import SingleButton from '../../Components/SingleButton'
import { Link } from 'react-router-dom'


export default function ServiceAgreementFive() {
  return (
    <div>
      <Link to="ServiceAgreementFive">
      <BackIcon/></Link>
      <HeaderOne value='Service Agreement List'/>
      <SerAgFilter/>
      <SerAgSearch/>
      <SerAgThreeInputContainer/>
     
      <Footer/>
      
    </div>
  );
}
