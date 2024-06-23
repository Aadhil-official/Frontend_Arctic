import React from 'react'
import './HeaderOne.css'


export default function HeaderOne(props) {
  return (
    <div className='headerone'>
      <h1>{props.value}</h1>
    </div>
  )
}
