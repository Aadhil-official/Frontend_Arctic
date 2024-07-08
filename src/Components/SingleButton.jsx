import React from 'react'
import './SingleButton.css';

export default function SingleButton(props) {
  return (
    <div>
      <button className='singlebutton'>{props.value}
      </button>
    </div>
  )
}
