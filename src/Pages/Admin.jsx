import React, { useEffect, useState } from 'react'
import CategoryForm from '../Components/Form/CategoryForm'
import FoodForm from '../Components/Form/FoodForm'
import Table from "react-bootstrap/Table";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Admin = () => {

  const [food, setFood] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get("https://losrevolucionariosapi.onrender.com/api/v1/food").then(res => setFood(res.data))
  }, [])


  useEffect(() => {
    axios.get("https://losrevolucionariosapi.onrender.com/api/v1/categories").then(res => setCategories(res.data))
  }, [])

  const deleteFood = (id) => {
    let data = {
        "id": id
    };

    let headers = {
        "Access-Control-Allow-Origin": "*"
    };

    axios.delete("https://losrevolucionariosapi.onrender.com/api/v1/food", {
        data: data,
        headers: headers
    })
    .then(response => {
        console.log("Eliminado exitosamente");
    })
    .catch(error => {
        console.error("Error al eliminar:", error);
    });
};



  return (
    <div id="main-container" className='w-full h-scree'>
      <div id='dashboards' className='flex justify-center flex-wrap'>
        <CategoryForm />
        <FoodForm />
      </div>
      <div id='table' className='flex w-full justify-center'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th className="px-6">#</th>
          <th className="px-6">Nombre</th>
          <th className="px-6">Ingredientes</th>
          <th className="px-6">Categoria</th>
          <th className="px-6">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {food.map(e => (
        <tr>
          <td className="px-6">{e.id}</td>
          <td className="px-6">{e.name}</td>
          <td className="px-6">{e.ingredients}</td>
          <td className="px-6">{e.foodCategory}</td>
          <td className="px-6"><FontAwesomeIcon icon={faTrash} onClick={() => deleteFood(e.id)}/></td>
        </tr>
        ))}
      </tbody>
    </Table>
      </div>
    </div>




  )
}

export default Admin