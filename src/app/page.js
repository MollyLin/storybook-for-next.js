'use client'
import Image from "next/image";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

const Item = styled.div`
  background-color: #f4f4f4;
  text-align: 'center';
  padding: 10px;
  justify-content: center;
`;

export default function Home() {
  return (
    <main className="max-w-md bg-white py-4 px-7 rounded-[32px]">
      <Box
        sx={{
          borderRadius: '32px',
          display: 'flex',
          alignItems: 'baseline',
          textAlign: 'center',
        }}
      >
        <Fab size="small" color="#F4F4F4" aria-label="back" sx={{
          flex: 'none',
        }}>
          <KeyboardArrowLeftIcon sx={{ color: '#000' }} />
        </Fab>
        <Typography variant="h3" gutterBottom sx={{
          color:'#000',
          fontSize:'1rem',
          fontWeight:'bold',
          width: '100%',
          paddingRight: '40px'
        }}>
          Cart
        </Typography>
      </Box>
      <Box
        sx={{
          textAlign: 'right',
          marginTop: '1.5rem',
        }}
      >
        <Button variant="text" sx={{ textTransform: 'none' }}>Remove All</Button>
      </Box>
      <Stack spacing={1}>
        <Item>Item1</Item>
        <Item>Item2</Item>
      </Stack>
    </main>
  );
}
