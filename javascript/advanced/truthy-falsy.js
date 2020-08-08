const products = [];
const product = products[0];



// console.log(product !== undefined ? 'product found' : 'product not found');

//Truthy - values that resolve to true in boolean context
//falsy - values that resolve to false in boolean context
//falsy values- false , 0, empty string, null, undefined, NaN
if(product){
    console.log('Product found')
} else {
    console.log('Product not found');
}