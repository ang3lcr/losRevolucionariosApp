import React from 'react'
import CategoryForm from '../Components/Form/CategoryForm'
import FoodForm from '../Components/Form/FoodForm'

const Admin = () => {
  return (
    <div className='flex justify-center h-screen'>
        <CategoryForm />
        <FoodForm />
    </div>
  )
}

export default Admin