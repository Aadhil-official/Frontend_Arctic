import React from 'react'

export default function Heading_One(props) {
  return (
    <div>
        <h1 style={{
         color:'#081A6D',
         fontSize:'64px',
         fontFamily:'Roboto',
         fontWeight:'700',
         wordWrap:'break-word',
         textAlign:'center'
       }}
       >{props.item}</h1>
      
    </div>
  )
}
