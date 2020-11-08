import React from 'react'
import './Category.css';

function Category(props) {
    const {category,active} = props;

    const categoryHandler = () => {
        props.changeSelectedCategory(category.id);
    }
    
    return (
        <div className={active ? "category active" : "category"} onClick={() => categoryHandler()}>
            <img src={category.image!== ''? category.image : '/images/no_image.png'} alt={category.id} name={category.name} />
            <div className="desc">{category.name}</div>
        </div>
    );
}

export default Category;