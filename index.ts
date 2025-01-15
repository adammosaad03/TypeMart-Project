import products from "./products";

const productName: string = "shirt";
let shipping: number;
let taxPercent: number;
let total: number;
let shippingAddress: string = '123 Main st New York City, New York'
const product = products.find((product) => product.name === productName);


if (product && product.preOrder) {
  console.log("There on there way!");
  
      if(Number(product.price) >= 25){
  shipping = 0
  console.log('We provided free shipping')
}     else{
  shipping = 5
  console.log(`We have a $${shipping} fee`)
}
    if(shippingAddress.includes('New York')){
  total = Number(product.price) * 1.10 + shipping
  taxPercent = 10
  console.log(`The total price is $${total} due to a 10% tax charge and shipping.`)
  console.log(`Here is order detals:
  1.${product.name}
  2.${shippingAddress}
  3.$${Number(product.price)}
  4.${taxPercent}%
  5.${shipping}
  6.${total}`)
}
else{
  total = Number(product.price) * 1.05 + shipping
  taxPercent = 5
  console.log(`The total price is $${total} due to a 5% tax charge.`)
  console.log(`Here is order detals:
  1.${product.name}
  2.${shippingAddress}
  3.$${Number(product.price)}
  4.${taxPercent}%
  5.${shipping}
  6.${total}`)

}

}
