import React from 'react'
import image from "./desarrolloImg.jpeg"
import SpecialText from '../SpecialText/SpecialText'

const Desarrollo = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img src={image} alt="" className='w-full md:w-2/3 h-auto max-h-600'/>
      <SpecialText text="Desde XXXX"/>
      <p className='w-full md:w-2/3 text-lg md:text-xl text-center md:text-justify font-akshar'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime animi ea quaerat odit laborum officia a neque modi fuga itaque!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime animi ea quaerat odit laborum officia a neque modi fuga itaque!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime animi ea quaerat odit laborum officia a neque modi fuga itaque!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime animi ea quaerat odit laborum officia a neque modi fuga itaque!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime animi ea quaerat odit laborum officia a neque modi fuga itaque!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime animi ea quaerat odit laborum officia a neque modi fuga itaque!
        Lorem
      </p>
    </div>
  )
}

export default Desarrollo
