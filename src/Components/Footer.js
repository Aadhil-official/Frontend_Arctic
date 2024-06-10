import React from 'react'
import { Grid, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import '../Style/Component/Footer.css'
import { ThemeProvider } from 'styled-components';

function Footer() {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);
    return (
        <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign={'center'} className='foot'>
                {/* sx={{ background: 'linear-gradient(to bottom, rgba(58, 69, 219, 0.758), rgb(20, 20, 133))', padding: '25px', marginBottom: '10px', color: 'white' }} */}
                <ThemeProvider theme={theme}>
                    <Typography variant='body2'>
                        © 2023 • All Rights Reserved
                    </Typography>
                </ThemeProvider>
            </Grid>
        </Grid>
    )
}

export default Footer