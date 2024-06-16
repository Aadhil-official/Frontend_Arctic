import React from 'react'
import './SerAgThreeInputContainer.css';
import SingleButton from '../Components/SingleButton';
import { Link } from 'react-router-dom'





export default function SerAgThreeInputContainer(props) {
      
  return (
    <div>
      <button className='SerAgButton'>{props.customerName}</button>
      <button className='SerAgButton'>{props.customerName}</button>
      <button className='SerAgButton'>{props.customerName}</button>
      <button className='SerAgButton'>{props.customerName}</button>
      <button className='SerAgButton'>{props.customerName}</button>


      <button value="save"  style={{
                backgroundColor:"rgba(60, 108, 230, 0.647)",
                color:"aliceblue",
                border:"none",
                textAlign:"center",
                cursor:"pointer",
                fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
                borderRadius:"5px",
                width:"400px",
                height:"60px",
                margin:"2em"
              }}>Add a new Service Agreement</button>


    

      {/* <Link to ="/">
      <SingleButton value= 'Add a new Service Agreement'/></Link> */}

      

      
    </div>
  )
}
