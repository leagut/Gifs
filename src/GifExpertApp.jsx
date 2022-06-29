import {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories]= useState(['dragon ball']);

    

    const onAddCategory = (newCategory) =>{
        if (categories.includes(newCategory)) return;
        setCategories([   newCategory,...categories ])
    }

  return ( 
    <>
    <h3>GifExpertApp</h3>
    
    <AddCategory  onNewCategory={onAddCategory}/>
    

    
        {categories.map( (x)=> ( 
             <GifGrid key={x} x={x}/>
        ))
        }
   
    </>
  )
}
