const cartValue =document.querySelector("#cartValue");
// console.log(cartValue)
export const updateCartValue = (cartProduct)=>{
return cartValue.innerHTML =`<i class="fa-solid fa-cart-shopping" > ${cartProduct.length}</i>`
}