export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product =>  sum +=  product.precio)
    return sum
}