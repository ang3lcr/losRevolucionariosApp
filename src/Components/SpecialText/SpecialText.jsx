import React from 'react'

const SpecialText = (props) => {
  return (
    <div className='flex justify-center items-center mt-10 mb-10 bg-red-900 w-full md:w-2/3 rounded-3xl'>
      <p className='text-white text-center text-4xl md:text-7xl font-sancreek p-3 uppercase'>{props.text}</p>
    </div>
  )
}

export default SpecialText
