import React from 'react'
import './Category.css';

function Category(props) {
    const {category,active} = props;

    const categoryHandler = () => {
        props.changeSelectedCategory(category.id);
    }
    
    return (
        <div className={active ? "category active" : "category"} onClick={() => categoryHandler()}>
            {
                category.id === 0 ? <img src={category.image!== ''? category.image : '/images/home_image.png'} alt={category.id} name={category.name} /> : (category.image !== '' ? <img src={category.image } alt={category.id} name={category.name} />: <h3>{category.name.charAt(0)}</h3>) 
            }
            
            <div className="desc">{category.name}</div>
        </div>
    );
}

export default Category;