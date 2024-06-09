import React from 'react'

export default function EmployeeName({name}) {
  return (
    <div>
        <button style={{
            backgroundColor:"#EDF2F7",
            width:"100%",
            padding:"20px",
            borderBlockColor:"white",
            textAlign:'left',
            height:' 50px',
            marginBottom:'10px',
            // borderLeft:'0',
            // borderBottom:'0'
            border:0

        }}>{name}</button>
      
    </div>
  )
}
