import React from 'react'
import './SerAgThreeInputContainer.css';
import SingleButton from '../../Components/SingleButton'
import { Link } from 'react-router-dom'





export default function SerAgThreeInputContainer(props) {
      
  return (
    <div>
      <button className='SerAgButton'>{props.customerName}</button>
      <button className='SerAgButton'>{props.customerName}</button>
      <button className='SerAgButton'>{props.customerName}</button>
      <button className='SerAgButton'>{props.customerName}</button>
      <button className='SerAgButton'>{props.customerName}</button>

      <Link to ="/">
      <SingleButton value= 'Add a new Service Agreement'/></Link>

      

      
    </div>
  )
}
