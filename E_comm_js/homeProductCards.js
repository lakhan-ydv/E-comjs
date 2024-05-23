import { AddToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer =document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate")
export const showProductContainer = (products)=>{
    if(!products)
    {
        return false;
    }
    products.forEach((curElem) => {
        const { brand,category,description,image,price,stock,id,name} =curElem;
        const productClone = document.importNode(productTemplate.content,true);

        productClone.querySelector('#cardValue').setAttribute('id',`card${id}`)

        productClone.querySelector('.category').textContent =category;
        productClone.querySelector('.productName').textContent=name;
        productClone.querySelector('.productImage').src =image;
        productClone.querySelector('.productImage').alt =name;
        productClone.querySelector('.productStock').textContent = stock;
        productClone.querySelector('.productDescription').textContent=description;
        productClone.querySelector('.productPrice').textContent =`₹${price}`;
        productClone.querySelector('.productActualPrice').textContent =`₹${price*2.5}`;
        // productClone.querySelector('.productBrand').textContent =brand;

        productClone.querySelector(".stockElement").addEventListener("click",(e)=>{
                  homeQuantityToggle(e,id,stock)
                //   console.log(e,id)
               
        })

        productClone.querySelector(".add-to-cart-button").addEventListener("click",(e)=>{
       AddToCart(e,id,stock);
        })
        // productClone.querySelector(".navlink")
        productContainer.append(productClone)

    });
}