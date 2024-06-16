import React from 'react'
import './SiteVisitTwoInputContainer.css'
import SiViSingleButton from './SiViSingleButton'
import { Link } from 'react-router-dom'

export default function SiteVisitTwoInputContainer(props) {
  return (
    <div>
      <button className='SiViButton'>{props.Location}</button>
      <button className='SiViButton'>{props.Location}</button>
      <button className='SiViButton'>{props.Location}</button>
      <button className='SiViButton'>{props.Location}</button>
      <button className='SiViButton'>{props.Location}</button>

      <Link to="/SiteVisitTwo">
      <SiViSingleButton value='Add a new Site Visit'/>
      </Link>

      
      
    </div>
  )
}
