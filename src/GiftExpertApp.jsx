/* eslint-disable no-unused-vars */
import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GiftExpertApp = () => {

  // No poner hook en condicionmalesa
  const [categories, setCategories] = useState(['One punch'])

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    console.log(newCategory);
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>GiftExpertApp</h1>
      
      <AddCategory 
        onNewCategory = {onAddCategory}
      />


      {/* Mormalmente no escribimos el return */}
        {
          categories.map( (category) =>  (
            <GifGrid 
              key={category}
              category={category}/>
          ) ) 
        }
    </>
  )
}
