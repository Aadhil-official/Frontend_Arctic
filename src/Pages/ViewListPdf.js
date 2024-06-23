import { Grid } from '@mui/material'
import React from 'react'
import FormView from '../Components/FormView'

function ViewListPdf() {
  return (
    <div>
        <Grid container>
            <Grid xs={12} justifyContent='center' textAlign='center'>
                <FormView/>
            </Grid>
        </Grid>
    </div>
  )
}

export default ViewListPdf