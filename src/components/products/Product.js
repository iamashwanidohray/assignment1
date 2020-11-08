import React, {useState} from 'react'
import './Product.css';

function Product({product}) {
    
    const [priceStockIndex, setPriceStockIndex] = useState(0);
    const [priceStock, setPriceStock] = useState(product.price_stock[0]);

    const onSelectItem = (e) => {

        setPriceStockIndex(e.target.value);
        setPriceStock(product.price_stock[e.target.value]);
    }


    return(
        <div className="container">
            <div className="image">
                <img src={product.image_url ? product.image_url : '/images/blank_image.png'} alt={product.product_name} />
            </div>
            <div className="card-content">
                <div className="wrapper">
                    <div className="title">{product.product_name}</div>
                    
                    <span className="price">{
                        (priceStock.mrp !== priceStock.selling_price) ?
                        <del>&#x20B9;{priceStock.mrp}</del> 
                        :  ''
                    } &#x20B9;{priceStock.selling_price}</span>

                    <div className="content option">
                        { product.price_stock.length > 1 &&
                            <select onChange={(e) => onSelectItem(e)} value={priceStockIndex}>
                                {
                                    product.price_stock.map((priceList,index) => {
                                        return(
                                            <option key={index} value={index} >{priceList.name}</option>
                                        )
                                    })
                                }
                            </select>
                        }       
                    </div>
                    <div className="btns">
                        <button>Buy now</button>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
