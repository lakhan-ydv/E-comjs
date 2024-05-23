import { getCartProductFromLS } from "./getCartProduct";
import { updateCardProdTotal } from "./updateCardProdTotal";

export const incrementDecrement= (event,id,stock,price)=>{
  
     
    const curCardElement = document.querySelector(`#card${id}`)
    const productQuantity = curCardElement.querySelector(".productQuantity")
    const productPrice = curCardElement.querySelector(".productPrice")

    let quantity = 1;
    let localStoragePrice = 0;
    
    let localCartProduct = getCartProductFromLS();

    let existingProd =localCartProduct.find((curpro)=>curpro.id===id)

    if(existingProd){
        quantity =existingProd.quantity;
        localStoragePrice =existingProd.price;
        
    }
    else{
        localStoragePrice =price;
        price=price
    }

    if(event.target.className === 'cartIncrement')
    {
        if(quantity<stock){
            quantity+=1;
        } else if(quantity === stock)
        {
            quantity =stock;
            localStoragePrice = price * stock;
        }
    }

    if(event.target.className === 'cartDecrement')
    {
        if(quantity>1){
            quantity-=1;
        } 
    }

    localStoragePrice = price * quantity;
    localStoragePrice = localStoragePrice.toFixed(3)
//--------------------------------------------------------
    let updateCart ={id,quantity,price:localStoragePrice}
    updateCart= localCartProduct.map(curPro=>{
         return curPro.id===id ? updateCart :curPro;
     })
    //  console.log(updateCart)
     localStorage.setItem("cartProductLS",JSON.stringify(updateCart))



productQuantity.innerText =quantity;
productPrice.innerText = localStoragePrice



updateCardProdTotal()



}