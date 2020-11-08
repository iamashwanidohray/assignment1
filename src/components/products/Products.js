import React from 'react'
import Pagination from '../../layouts/Pagination';
import Product from './Product';
import './Products.css';

function Products({products,activePage,numOfPages,setActivePage}) {


    return (
        <div className="products">
            <div className="row">
                {
                    (products !== null && products.length !== 0) ?  products.map((product,index) => {
                        return (
                            <div className="column" key={index}>
                                <Product  product={product}  />
                            </div>
                        );
                    }) : 

                    <div className="noProductFound">
                        <img src="/images/no_products.png" alt="No Products Found.." />

                    </div>
                    
                }
                
                
            </div>
                {
                    (products !== null  && products.length !== 0 && numOfPages > 1) && <Pagination activePage={activePage} numOfPages={numOfPages} setActivePage={setActivePage}/>
                }
        </div>
    )
}

export default Products;   