import React from 'react'
import './SiViSingleButton.css';

export default function SiViSingleButton(props) {
  return (
    <div>
      <button className='SiVisinglebutton'>{props.value}
      </button>
    </div>
  )
}
