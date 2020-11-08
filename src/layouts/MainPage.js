import React, {useState, useEffect} from 'react';
import Products from '../components/products/Products';
import Categories from '../components/categories/Categories';

import './MainPage.css';

function MainPage() {

    const [categories, setCategories] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(0);

    const [products, setProducts] = useState(null);
    const [numOfPages, setNumOfPages] = useState(null);
    const [activePage, setActivePage] = useState(1);


    useEffect(() => {
        fetch("https://testing.pogo91.com/api/online-store/category/?store_prefix=cake-shop")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                setCategories(result.category);
            },

            // Handle error 
            (error) => {
            },
        )
    },[]);

    useEffect(() => {
        fetch(`https://testing.pogo91.com/api/online-store/category/product/?store_prefix=cake-shop&page=${activePage}&category_id=${selectedCategory}`).then(response => response.json()).then(result => {
            setProducts(result.products);
            setNumOfPages(result.num_pages);
        })
    },[selectedCategory,activePage]);

    return (
        <div className="mainPage">
            <div className="sidenav">
                <h3>Categories</h3>
                <Categories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </div>

            <div className="main">
                <h2>Products List</h2>
                <Products products={products} numOfPages={numOfPages} activePage={activePage} setActivePage={setActivePage}/>
            </div>
        </div>
    )
}

export default MainPage
