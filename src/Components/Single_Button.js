import React from 'react'

export default function Single_Button(props) {

  return (
    <div>
      <button  style={{
        width: '25%',
        height: '30px',
        alignItems:'center',
        backgroundColor:'#667EEA',
        border:'0',
        color:'white',
        cursor: 'pointer',
        position:'relative',
        left:"500px"

      }}>{props.value}

      </button>
    </div>
  )
}