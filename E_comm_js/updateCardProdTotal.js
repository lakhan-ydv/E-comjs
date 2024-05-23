import { getCartProductFromLS } from "./getCartProduct"

export const updateCardProdTotal =()=>{

  let productSubTotal = document.querySelector(".productSubTotal");

  let productFinalTotal = document.querySelector(".productFinalTotal")


    let localCartProduct = getCartProductFromLS()
      let initialValue = 0;
      let totalProductPrice = localCartProduct.reduce((acc,curElm)=>{
        let productPrice=parseInt(curElm.price) || 0;
        return acc+productPrice;
      },initialValue)
      productSubTotal.textContent=`₹${totalProductPrice}`
      productFinalTotal.textContent= `₹${totalProductPrice + 50}`
}