import React from 'react';
import styled  from '@emotion/styled';
import Box from '@mui/material/Box';
import {Paper} from '@mui/material';
import Grid from '@mui/material/Grid';

const Home=()=>
{
    const Item = styled(Paper)(({ theme }) => ({
       
        textAlign: 'center',
      }));
      
 
        return (
            <>
            <div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Item sx={{my:'1rem',bgcolor:'blue',p:5}}>blue</Item>
              </Grid>
              <Grid item xs={4}>
                <Item sx={{my:'1rem',bgcolor:'gold',p:5}}>gold</Item>
              </Grid>
              <Grid item xs={8}>
                <Item sx={{my:'1rem',bgcolor:'blueviolet',p:5}}>blueviolet</Item>
              </Grid>
              <Grid item xs={8}>
                <Item sx={{my:'1rem',bgcolor:'green',p:5}}>green</Item>
              </Grid>
            </Grid>
          </Box>

          </div>
         </>
        )
      }
    

export default Home;