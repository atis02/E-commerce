import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Products from "../Products/Products";

export default function Home() {
 

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Typography fontSize={{ lg: "55px", sm: "35px", xs: "20px" }}>
          NEW SEASON ARRIVALS
        </Typography>
        <Typography fontSize={{ lg: "25px", sm: "15px", xs: "10px" }}>
          CHECK OUT ALL THE TRENDS
        </Typography>
      </Box>
      <Box>
        <Products />
      </Box>
    </>
  );
}
