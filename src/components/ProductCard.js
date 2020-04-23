import React from 'react'
import ProductDetails from './ProductDetails'

const ProductCard = ({products}) => {
    console.log(products);
    return (
        <div className="container">
            {products.length && products.map((product) => {
                console.log(product)
                return (
                    <ProductDetails product={product} key={product.id} />
                )
            })}
        </div>   
    )
}

export default ProductCard