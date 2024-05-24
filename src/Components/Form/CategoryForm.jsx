import axios from 'axios'
import React, { useState } from 'react'


const CategoryForm = () => {
  const [file, setFile] = useState()
  const [category, setCategory] = useState("")
  const [categoriesList, setCategoriesList] = useState([])

  const submit = async event => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("image", file)
    formData.append("category", category)
    // await axios.post("http://localhost:8000/api/v1/categories", formData, { headers: {'Content-Type': 'multipart/form-data'}})
    await axios.post("https://losrevolucionariosapi.onrender.com/api/v1/categories/", formData, { headers: {'Content-Type': 'multipart/form-data'}})
    alert("Categoria creada")
  }


  return (
    <div className="flex items-center justify-center w-1/2">
      <div className="bg-gray-600 p-6 rounded-lg h-2/4 w-2/4 flex flex-col justify-center items-center">
        <h1 className='text-3xl text-white'>Categorias</h1>
        <form onSubmit={submit} className="space-y-4">
      <input
        onChange={(e) => setFile(e.target.files[0])}
        type="file"
        accept="image/*"
        name="image"
        className="w-full bg-gray-800 text-white p-2 rounded mt-5"
      />
      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        type="text"
        placeholder="Categoria"
        name="category"
        className="w-full bg-gray-800 text-white p-2 rounded"
      />
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

export default CategoryForm