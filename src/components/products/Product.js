import React from 'react'
import './Product.css';

function Product({product}) {

    return (
            <div className="card">
                <img src={product.image_url ? product.image_url : '/images/blank_image.png'} alt="Denim Jeans" />
                <p className="productName">{product.product_name}</p>
                <p className="price">Rs.{product.price_stock[0].mrp}</p>
                <p><button>Add to Cart</button></p>
            </div>
    )
}

export default Product
