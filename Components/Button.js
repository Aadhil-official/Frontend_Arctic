import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function ContainedButtons() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'rgba(227, 226, 249, 0.1)', // Optional: light background color for better visibility
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
        <Link to="/wl" style={{ textDecoration: 'none' }}> {/* Ensure no underline on the link */}
          <Button variant="contained">
            Login
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
