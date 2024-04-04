import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
    

function ButtonSignup() {
  return (
    <div>
    

       <Link to="/">
            <Button variant="contained">
              Signup
            </Button>
        </Link>
    </div>
  )
}

export default ButtonSignup