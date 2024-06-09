import React from 'react'

export default function Heading_six(props) {
  return (
    <div>
      <h6 style={{
        color:'#4A5568',
        fontSize:'24px',
        fontFamily:'Roboto',
        fontWeight:'400',
        wordWrap:'break-word',
        textAlign:'center'


      }}>{props.item}</h6>
    </div>
  )
}
