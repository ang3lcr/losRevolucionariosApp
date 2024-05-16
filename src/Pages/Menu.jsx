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

  console.log(food)




  return (
      // <div className='flex flex-col justify-center items-center h-full w-screen'>
      // {categories.map(category => {
      //   if(category.category == "especialidad" || category.category == "parrilla" || category.category == "cocteles"){
      //     return (
      //       <section className='bg-gray-400 w-full flex flex-col items-center mt-16'>
      //         <SpecialText text={category.category}/>
      //         <div className='w-4/6 h-96 bg-green-300 mb-20'>
      //           <img src={category.imageUrl} alt="" className='w-full h-full object-cover object-center'/>
      //         </div>
      //         <ul className='mb-20'>
      //           <li>
      //             <p>öla</p>
      //           </li>
      //         </ul>
      //   </section>
      //     )
      //   }
      // })}
      // </div>
      <div className='bg-slate-100 flex flex-col justify-center items-center w-full'>
        {categories.map(category => {
          if(category.category == "especialidad" || category.category == "parrilla" || category.category == "cocteles")
            return (
              <div className='flex flex-col justify-center items-center w-2/3 bg-slate-50 text-xl'> 
              <SpecialText text={category.category.toUpperCase()} />
              <div className='w-2/3 h-96 bg-black'>
                <img src={category.imageUrl} alt="" className='w-full h-full object-cover'/>
              </div>
              <ul className='w-2/3 m-5 pl-10'>
                {food.map(e => {
                  if(e.foodCategory == category.id){
                    return(
                      <li className='mt-1'>
                        <p className='font-akshar w-fit h-full text-3xl'>{e.name.toUpperCase()}</p>
                        <p className='mt-0 h-fit'>({e.ingredients.toUpperCase()})</p>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
            )
        })}
      </div>     
  )
}

export default Menu