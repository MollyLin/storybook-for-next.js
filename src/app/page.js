import Image from "next/image";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
        <Box
          sx={{
            maxWidth: 480,
            backgroundColor: '#fff',
            padding: '64px 27px 64px 27px',
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
  );
}
