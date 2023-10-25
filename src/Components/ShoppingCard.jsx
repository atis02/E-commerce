import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "mui-image";
import { addCart, delCart } from "./redux/action";

export default function ShoppingCard() {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleDel = (item) => {
    dispatch(delCart(item));
  };
  const handleAdd = (item) => {
    dispatch(addCart(item));
  };

  const emptyShoppingCart = () => {
    return <Stack>Your cart is Empty</Stack>;
  };

  const cartProducts = (product, index) => {
    return (
      <>
      <Box>

        <Stack
            direction={{lg:'row',sm:'row',xs:'column'}}
            alignItems= "center"
            gap= "30px"
            m= "40px 0 40px 0 "
            
          key={index}
        >
          <Stack>
            <Image src={product.image} alt="" width="200px" maxHeight="100%" />
          </Stack>
          <Stack textAlign='center'>
            <Typography fontSize={{lg:'25px',sm:'20px',xs:'15px'}} fontWeight="bolder">
              {product.title}
            </Typography>
            <Stack ml='10px' direction="row" alignItems="center" gap="10px" fontSize={{lg:'25px',sm:'20px',xs:'15px'}}>
              {product.quantity} X {product.price} TMT ={" "}
              <Typography fontSize={{lg:'25px',sm:'20px',xs:'15px'}} color="#5959b3" fontWeight="bold">
                {product.quantity * product.price} TMT
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
              onClick={() => handleDel(product)}
              sx={{
                backgroundColor: "#5959b3",
                color: "white",
                "&:hover": { backgroundColor: "red", color: "#fff" },

              }}
            >
              -
            </Button>
            <Button onClick={() => handleAdd(product)}
            sx={{
              backgroundColor: "#5959b3",
              color: "white",
              "&:hover": { backgroundColor: "green", color: "#fff" },
            }}
            >
              +
            </Button>
          </Stack>
        </Stack>
      </Box>
      </>
    );
  };

  return (
    <Box>
      <Typography textAlign="center" fontSize={{lg:'35px',sm:'30px',xs:'25px'}}>
        Shopping card
      </Typography>
      <Stack>
        {state.length === 0 && emptyShoppingCart()}
        {state.length !== 0 && state.map(cartProducts)}
      </Stack>
    </Box>
  );
}
