/* eslint-disable react/prop-types */
import { useState } from "react"
import PropTypes from "prop-types"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChangue = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = () => {
        event.preventDefault()
        const newInputValue = inputValue.trim()
        if(newInputValue.length <= 1) return
        // setCategories(categories => [inputValue, ...categories])
        setInputValue('')
        onNewCategory(newInputValue)
    }
  return (
    <form onSubmit={onSubmit} aria-label="form">
        <input 
            type="text" 
            placeholder="Buscar Gifts"  
            value={inputValue}  
            onChange={onInputChangue}
        />
    </form>
  )
}


AddCategory.propTypes = {
    onNewCategory : PropTypes.func.isRequired
}