'use client'
import Image from "next/image";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
        <Button variant="text" sx={{ textTransform: 'none', color: 'black' }}>Remove All</Button>
      </Box>
      <Stack spacing={1}>
        <List sx={{ width: '100%', backgroundColor: '#f4f4f4', borderRadius: '0.5rem' }}>
          <ListItem>
            <Box
              sx={{
                borderRadius: '32px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'stretch',
                alignSelf: 'center',
                fontSize: '12px',
                color: 'blank',
                textAlign: 'left',
              }}
            >
              <ListItemAvatar
                sx={{ width: '4rem', mr: 1.5, mt: 0 }}
              >
                <Image
                  alt="Men's Harrington Jacket"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&"
                  width={64}
                  height={64}
                  priority={true}
                ></Image>
              </ListItemAvatar>
              <Box
                sx={{ display: 'flex', flex: '1 1 auto', alignItems: 'center', flexWrap: 'wrap' }}
              >
                <Typography
                  component="p"
                  variant="h6"
                  color="black"
                  fontSize="14px"
                  sx={{ width: '100%'}}
                >
                  {"Men's Coaches Jacket"}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%'
                  }}
                >
                  <ListItemText
                    sx={{
                      display: 'inline-block',
                      color: '#272727'
                    }}
                    disableTypography
                    primary="Size - "
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="black"
                          fontWeight="bold"
                        >
                          M
                        </Typography>
                      </>
                    }
                  ></ListItemText>
                  <ListItemText
                    sx={{
                      display: 'inline-block',
                      color: '#272727'
                    }}
                    disableTypography
                    primary="Color - "
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="black"
                          fontWeight="bold"
                        >
                          Lemon
                        </Typography>
                      </>
                    }
                  ></ListItemText>
                </Box>
              </Box>
              <Box
                sx={{ display: 'flex', flex: '1 1 auto', alignItems: 'center', flexWrap: 'wrap' }}
              >
                <Typography
                  component="span"
                  variant="h6"
                  color="black"
                  fontSize="14px"
                  fontWeight="bold"
                  sx={{
                    width: '100%', textAlign: 'right'
                  }}
                >
                  {"$148"}
                </Typography>
                <ButtonGroup aria-label="Basic button group" sx={{
                  width: '100%', justifyContent: 'flex-end'
                }}>
                  <Fab color="primary" aria-label="add" sx={{
                    width: '24px',
                    height: '24px',
                    minHeight: 'auto',
                    mr: 1
                  }}>
                    <AddIcon fontSize="12px" />
                  </Fab>
                  <Fab color="primary" aria-label="remove" sx={{
                    width: '24px',
                    height: '24px',
                    minHeight: 'auto'
                  }}>
                    <RemoveIcon fontSize="12px" />
                  </Fab>
                </ButtonGroup>
              </Box>
            </Box>
          </ListItem>
        </List>
      </Stack>
    </main>
  );
}
