import React from 'react'

function Hero({values}) {
  const {image,name,profession} = values;
  return (
    <div className='w-52 bg-white rounded-md overflow-hidden'>
      <div className='w-full h-40 bg-sky-200'>
        <img className="w-full h-full object-cover object-center"src={image} alt="" />
      </div>
      <div className="w-full p-3">
        <h3 className='text-xl font-semibold'>{name}</h3>
        <h5 className='text-xs'>{profession}</h5>
       <button onClick= {()=>alert("adding as a friend")}className="px-3 py-1 mt-3 text-xs text-white bg-blue-500 rounded-md font-semibold">Add Friend</button>
      </div>
    </div>
    
  )
}

export default Hero



{/* understand the props 
  function Hero({text,color}) {
  return (
    <button className={`px-3  py-1 m-2  ${color} rounded text-white`}>{text} </button>
  )
}
  */}  