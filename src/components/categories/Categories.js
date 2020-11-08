import React from 'react';
import Category from './Category';

function Categories({categories,selectedCategory,setSelectedCategory}) {
    
    return (
        <div>
            
            {
                categories && categories.map((category,index) => {
                    return(
                        <Category key={index} category={category} active={selectedCategory === category.id ? true : false} changeSelectedCategory={setSelectedCategory} />
                    );
                })
            }
        </div>
    )
}

export default Categories
