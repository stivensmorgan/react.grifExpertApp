import React, { useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    // const categories = ['Obe Ounch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState( ['One Punch'] );

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'new item'] );
    //     setCategories( cats => [ ...cats, 'New Category' ] );
    // } 

    return (
        <>
            <h2>Gif Expert App</h2>

            <CategoryAdd setCategories={ setCategories } />

            <hr/>

            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map( (category, idx) => (
                        <GifGrid 
                            key={ idx + 1 } 
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;