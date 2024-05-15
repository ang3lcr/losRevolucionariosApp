import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FoodForm = () => {
    const [name, setName] = useState()
    const [ingredients, setIngredients] = useState()
    const [category, setCategory] = useState()
    const [categoriesList, setCategoriesList] = useState()

    const submit = async event => {
        event.preventDefault()
        const formData = new FormData();

        formData.append("name", name)
        formData.append("category", category)
        formData.append("ingredients", ingredients)
        // await axios.post("http://localhost:8000/api/v1/categories", formData, { headers: {'Content-Type': 'multipart/form-data'}})

        console.log(formData.get("ingredients"))
        
        

    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/categories")
             .then(res => setCategoriesList(res.data))
    }, [])

    console.log(categoriesList)

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
  <div className="bg-gray-600 p-6 rounded-lg w-1/3">
    <form onSubmit={submit} className="space-y-4">
      <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Nombre" name="name" className="w-full bg-gray-800 text-white p-2 rounded"/>
     
      <input onChange={(e) => setIngredients(e.target.value)} type="text" placeholder="Ingredientes" name="ingredients" className="w-full bg-gray-800 text-white p-2 rounded"/>
     
      <select id="categories" className="w-full bg-gray-800 text-white p-2 rounded" onChange={(e) => setCategory(e.target.value)}>
        {categoriesList?.map(category => (
            <option key={category.id} className='capitalize' value={category.id}>{category.category.toUpperCase()}</option>
        ))}
     </select>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  </div>
</div>
  )
}

export default FoodForm