import axios from 'axios'
import React, { useEffect, useState } from 'react'


const FoodForm = () => {

  const [name, setName] = useState('')
  const [category, setCategory] = useState()
  const [ingredients, setIngredients] = useState([])
  const [currentIngredient, setCurrentIngredient] = useState("")
  const [categories, setCategories] = useState([])

  let nextId = 0


  useEffect(() => {
    axios.get("https://losrevolucionariosapi.onrender.com/api/v1/categories").then(res => setCategories(res.data))
    // axios.get("http://localhost:8000/api/v1/categories").then(res => setCategories(res.data))
  }, [])

  
  const submit = async event => {
    let ingredientsArray = ingredients.map(ingredient => ingredient.value)
    let data = {
      "name": name,
      "foodCategory": category,
      "ingredients": ingredientsArray.join()
    }
    axios.post("https://losrevolucionariosapi.onrender.com/api/v1/food",data).then(res => console.log(res))
    // axios.post("http://localhost:8000/api/v1/food",data).then(res => console.log(res))
    setIngredients([])
}

  const addIngredient = () => {
    let ingredient = {
      id: nextId++,
      value: currentIngredient
    }
    setIngredients([...ingredients, ingredient])
    setCurrentIngredient("")
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='bg-gray-600 p-2 rounded-lg flex justify-center flex-col items-center gap-1'>
      <h1 className='text-3xl text-white'>Platillos</h1>
      <input type="text" placeholder='Nombre del platillo' className='w-full bg-gray-800 text-white p-2 rounded' onChange={(e) => setName(e.target.value)}/>
        <select name="" id="" className='m-5 w-full' onChange={(e) => setCategory(e.target.value)}>
          {categories.map(category => (
            <option value={category.id} key={category.id}>{category.category.charAt(0).toUpperCase()+category.category.slice(1)}</option>
          ))}
        </select>
      <div className='flex justify-center flex-col'>
        <div className='flex justify-center'>
          <input type="text" className='w-full bg-gray-800 text-white p-2 rounded m-5' value={currentIngredient} placeholder='Ingredientes' onChange={(e) => setCurrentIngredient(e.target.value)}/>
          <button onClick={() => addIngredient()}>Add</button>
        </div>
        <ul className='flex justify-center w-full max-w-full min-h-20 flex-wrap'>
          {ingredients.map(e => (
            <li key={e.id} id={e.id} className='border-solid border-2 border-red-700 p-2 rounded-xl m-2 flex justify-center items-center h-fit'>{e.value}</li>
          ))}
        </ul>
      </div>
      <button className='relative left-0  border-solid border-2 border-red-700 p-2 rounded-xl m-2 w-fit hover:bg-red-700 hover:text-green-500 text-xl text-center flex justify-center items-center h-fit' onClick={() => submit()}>Submit</button>
      </div>
    </div>
  )
}

export default FoodForm