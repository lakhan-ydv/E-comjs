import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS=()=>{
    let cartProduct = localStorage.getItem("cartProductLS")

    if(!cartProduct){
        return []
    }
    else{
        cartProduct = JSON.parse(cartProduct);
        updateCartValue(cartProduct)
    return cartProduct
    }
}