import { RemoveProductFromCart } from './RemoveProductFromCart';
import products from './api/products.json'
import { fetchQuantityFromCartLS } from './fetchQuantityFromCartLS';
import { getCartProductFromLS } from './getCartProduct'
import { incrementDecrement } from './incrementDecrement';
import { updateCardProdTotal } from './updateCardProdTotal';

let cartProducts = getCartProductFromLS();

// let {id,category}=cartProducts

let filterProducts = products.filter((curprod)=>{
return cartProducts.some((curElm)=>curElm.id===curprod.id)
})
console.log(filterProducts)


const cartElement =document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");




const showCartProduct = ()=>{
    filterProducts.forEach((curprod)=>{
        const {category,id,image,name,stock,price}= curprod;
        let productClone = document.importNode(templateContainer.content,true)

let lSActualData = fetchQuantityFromCartLS(id,stock)


 productClone.querySelector("#cardValue").setAttribute("id",`card${id}`)
 productClone.querySelector(".category").textContent = category;
 productClone.querySelector(".productName").textContent = name;
 productClone.querySelector(".productImage").src = image
 productClone.querySelector(".productQuantity").textContent = lSActualData.quantity;

 productClone.querySelector(".productPrice").textContent = lSActualData.price

 productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
    incrementDecrement(event,id,stock,price)
 })

 productClone.querySelector(".remove-to-cart-button").addEventListener("click",()=>RemoveProductFromCart(id))

        cartElement.appendChild(productClone)
    })
}




updateCardProdTotal()

showCartProduct();