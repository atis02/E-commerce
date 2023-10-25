//add cart
export  const addCart = (product) =>{
    return{
        type : "ADDCART",
        payload : product
    }
}


//delete from cart
export  const delCart = (product) =>{
    return{
        type : "DELCART",
        payload : product
    }
}