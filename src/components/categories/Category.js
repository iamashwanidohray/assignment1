import React from 'react'
import './Category.css';

function Category({category}) {
    return (
        <div className="category">
            <a href={category.image}><img src={category.image!== ''? category.image : '/images/no_image.png'} alt={category.id} name={category.name} /></a>
            <div className="desc">{category.name}</div>
        </div>
    );
}

export default Category;