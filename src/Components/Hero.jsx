import React from 'react'

function Hero({text,color}) {
  return (
    <button className={`px-3  py-1 m-2  ${color} rounded text-white`}>{text} </button>
  )
}

export default Hero;



// understand the props 