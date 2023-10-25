import React, { useEffect, useState } from "react";
import {useDispatch} from 'react-redux';
import { addCart } from "../../Components/redux/action";
import { Box, Stack, Typography, Button, useMediaQuery, useTheme, CircularProgress } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import data from "../../Components/Data/data";
import Image from "mui-image";
import axios from "axios";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) =>{
    dispatch(addCart(product));
  }
  const theme = useTheme();
  const isResponsive = useMediaQuery(theme.breakpoints.down("sm"));
  const baseUrl = `https://simpleapistore.vercel.app/api/products/${id}`;
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await axios.get(baseUrl).then((response) => {
        setProduct(response.data);
        console.log(response.data);
        setLoading(false);
      });
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <Stack alignItems='center' sx={{gap:'10px'}}><CircularProgress />Loading...</Stack>
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "85px",
          mb:'30px',
           ...(isResponsive ? { display: "column" } : { display: "flex" }),
        }}
      >
        <Stack>
          <Image alt="" src={product.image} sx={{ xs:{ width: "300px"},xs:{height:"100%"}}} maxHeight="100%" />
        </Stack>
        <Stack spacing={4}>
          <Typography fontSize={{ lg: "35px", sm: "25px", xs: "15px" }} textAlign={{lg:'left',sm:'center',xs:'center'}} fontWeight="bold">
            {product.title}
          </Typography>
          <Typography fontSize={{ lg: "45px", sm: "25px", xs: "15px" }}  fontWeight="bold" textAlign={{lg:'left',sm:'center',xs:'center'}}>
            {product.price} TMT
          </Typography>
          <Typography fontSize={{ lg: "20px", sm: "15px", xs: "10px" }}  textAlign={{lg:'left',sm:'center',xs:'center'}}>
            {product.description}
          </Typography>
          <Stack direction="row" justifyContent={{lg:'flex-start',xs:'space-evenly'}} spacing={3}>
            <Button
              sx={{
                backgroundColor: "#fff",
                width: "120px",
                color: "#000",
                transition: "all ease 0.4s",
                border: "1px solid black",
                "&:hover": { backgroundColor: "#000", color: "#fff" },
              }}
               
                onClick={()=>{addProduct(product)}}
             
            >
              Add to Cart
            </Button>
            <Link className="link" to='/shopping-card'>
            <Button
              sx={{
                backgroundColor: "#000",
                width: "120px",
                color: "#fff",
                transition: "all ease 0.4s",
                border: "1px solid black",
                "&:hover": { backgroundColor: "#fff", color: "#000" },
              }}
            >
              Go to Cart
            </Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    );
  };

  return <Box>{loading ? <Loading /> : <ShowProduct />}</Box>;
}
