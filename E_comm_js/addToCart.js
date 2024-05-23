import { getCartProductFromLS } from "./getCartProduct";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();
export const AddToCart = (e,id,stock)=>{
    const curProElem = document.querySelector(`#card${id}`)
    // console.log(curProElem)
    // console.log(`card${id}`)

    let arrLocalStoragePro = getCartProductFromLS();

    let quantity = curProElem.querySelector(".productQuantity").innerText;
    let price =curProElem.querySelector(".productPrice").textContent
    // console.log(price,quantity)

    price = price.replace("₹",'')

    let existingProd = arrLocalStoragePro.find(curPro=>curPro.id===id)

    if(existingProd && quantity > 1){
        // quantity = existingProd.quantity+ +quantity;
        quantity = Number(existingProd.quantity)+ Number(quantity);
        price = parseFloat(price * quantity).toFixed(3)
      
        let updateCart ={id,quantity,price}
       updateCart= arrLocalStoragePro.map(curPro=>{
            return curPro.id===id ? updateCart :curPro;
        })
        console.log(updateCart)
        localStorage.setItem("cartProductLS",JSON.stringify(updateCart))
        showToast("add",id);
    }
    if(existingProd){
        // alert("This Product is Already Choosen By You...")
        
        return false
    }

    price = parseFloat(price * quantity).toFixed(3)
    quantity = Number(quantity)

    let updateCart ={id,quantity,price}
    arrLocalStoragePro.push(updateCart)
    localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStoragePro))
    updateCartValue(arrLocalStoragePro);
    showToast("add",id)
}