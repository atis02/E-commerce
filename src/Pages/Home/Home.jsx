import { Box, Stack, Button, Container, Typography } from "@mui/material";
import React from "react";
import Products from "../Products/Products";
import Image2 from '../../../public/images/desktop1.png'
import { Image } from "mui-image";

export default function Home() {


  return (
    <>
      <Box>
        <Box
          sx={{ display: { lg: 'flex', sm: 'flex', xs: 'column' }, alignItems: 'center', justifyContent: { lg: 'space-between', sm: 'center', xs: 'space-between' } }}
          lg={{ direction: 'row' }}
          spacing={3}
          height='80vh'
        >
          <Stack>
            <Typography fontSize={{ lg: "55px", sm: "35px", xs: "20px" }}>
              NEW SEASON ARRIVALS
            </Typography>
            <Typography fontSize={{ lg: "25px", sm: "15px", xs: "10px" }}>
              CHECK OUT ALL THE TRENDS
            </Typography>
          </Stack>
          <Stack >
            <Image alt='' sx={{ mt: '20px' }} lg={{ width: '600px', height: '400px' }} sm={{ width: '400px', height: '300px' }} xs={{ width: '100px', height: '100px' }} src={Image2} />
          </Stack>
        </Box >
        <Box>
          <Products />
        </Box>
      </Box>
    </>
  );
}