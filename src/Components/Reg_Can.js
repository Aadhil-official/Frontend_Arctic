import React from 'react'
import { Link } from 'react-router-dom'

export default function 
Reg_Can() {
  return (
    <div>
       <Link to={"/User_Profile1"}>
       <button className="save" >Register</button>
       </Link>
      <Link to={'/'}>
      <button className="cancel">Cancel</button>
      </Link>
    </div>
  )
}
