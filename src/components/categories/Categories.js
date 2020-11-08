import React,{useState, useEffect} from 'react';
import Category from './Category';

function Categories() {
    const [categories, setCategories] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(0);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [error, setError] = useState(null);


    useEffect(() => {
        fetch("https://testing.pogo91.com/api/online-store/category/?store_prefix=cake-shop")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                setCategories(result.category);
                // setIsLoaded(true);
            },

            // Handle error 
            (error) => {
                // setIsLoaded(true);
                // setError(error);
            },
        )
    },[]);


console.log(selectedCategory);

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
