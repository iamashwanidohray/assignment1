import React, {useState, useEffect} from 'react'

function Products() {

    const [products, setProducts] = useState(null);
    const [numOfPages, setNumOfPages] = useState(null);
    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        fetch('https://testing.pogo91.com/api/online-store/category/product/?store_prefix=cake-shop&page=1&category_id=0').then(response => response.json()).then(result => {
            setProducts(result.products);
            setNumOfPages(result.num_pages);
        })
    },[])

    console.log(products);
    return (
        <div>

        </div>
    )
}

export default Products;   