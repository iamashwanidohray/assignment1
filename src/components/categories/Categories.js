import React,{useState, useEffect} from 'react';
import Category from './Category';

function Categories() {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        fetch("https://testing.pogo91.com/api/online-store/category/?store_prefix=cake-shop")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                setCategories(result.category)
            },

            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    },[]);
    return (
        <div>
            
            {
                categories && categories.map((category,index) => {
                    return(
                        <Category key={index} category={category}></Category>
                    );
                })
            }
        </div>
    )
}

export default Categories
