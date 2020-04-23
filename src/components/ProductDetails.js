import React from 'react';

const ProductDetails = ({product}) => {
    console.log(product)
    return (
        <div className="card z-depth-0">
            <div className="card-content">
               <span className="card-title">{product.title}</span>
               <p>Quantity: {product.quantityAvailable}</p>
               <p>Type: {product.paintType}</p>
               <p>Price: {product.price} Rs</p> 
            </div>
        </div>
    );
}

export default ProductDetails;
