import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SpecialText from "../Components/SpecialText/SpecialText"


const Menu = () => {
  const [categories, setCategories] = useState([])
  const [food, setFood] = useState([])
  useEffect(() => {
    axios.get("https://losrevolucionariosapi.onrender.com/api/v1/categories")
      .then(res => setCategories(res.data))
    axios.get("https://losrevolucionariosapi.onrender.com/api/v1/food")
      .then(res => setFood(res.data))
  },[])
  return (

    <div className='bg-slate-100 flex flex-col justify-center items-center w-full'>
    {categories.map(category => {
      if(category.category === "especialidad" || category.category === "parrilla" || category.category === "cocteles") {
        return (
          <div key={category.id} className='w-full md:w-2/3 lg:w-1/2 xl:w-2/3 flex flex-col justify-center items-center bg-slate-50 text-xl p-4'>
            <div className='w-full flex justify-center'>
              <SpecialText text={category.category.toUpperCase()}/>
            </div>
            <div className='w-full h-60 md:h-80 lg:h-96 xl:w-2/3 bg-black'>
              <img src={category.imageUrl} alt="" className='w-full h-full object-cover'/>
            </div>
            <ul className='w-full m-3 md:m-5 pl-5 md:pl-10 xl:w-2/3 flex flex-col justify-center'>
              {food.map(e => {
                if(e.foodCategory === category.id){
                  return (
                    <li key={e.id} className='mt-1 xl:w-2/3'>
                      <p className='font-akshar text-2xl md:text-3xl lg:text-4xl'>{e.name.toUpperCase()}</p>
                      <p className='mt-0 text-xs md:text-sm'>({e.ingredients.toUpperCase()})</p>
                    </li>
                  )
                }
              })}
            </ul>
          </div>
        )
      }
      return null;
    })}
    
  </div>
      
  )
}

export default Menu