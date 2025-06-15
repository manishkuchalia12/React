import React from 'react'
import Hero from './Components/Hero'


function App() {
  return (
     <div>
    <Hero text='know More'color="bg-green-700"/>
    <Hero text='Download'color="bg-red-700"/>
  </div>
  
  )
}

export default App

{
  /* 6. useState working on array 
  import React, { useState } from "react";

function App() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div className="p-5">
      {val.map((item) => (
        <h1>{item}</h1>
      ))}
      <button
        onClick={() =>
          setVal(() =>val.filter((iten, index)=>index != val.length-1))
        }
        className="px-2 py-1 text-xs text-white rounded-full bg-pink-400"
      >
        click
      </button>
    </div>
  );
}

export default App; 
   5.add another value  5. import React, { useState } from "react";

function App() {
  const [val, setVal] = useState({ name: "kuchalia", age: 22 });
  return (
    <div>
      <button onClick={ () => {
         setVal({ ...val, gender: "male" }) 
         console.log(val)}}>click</button>
    </div>
  );
}

export default App;
  
  // 4. useState mastering like to change the btn color change 
   import React, { useState } from "react";

function App() {
  const [val, setVal] = useState({ Name: "Manish", isBanned: false });
  return (
    <div className="p-4">
      <h1>name : {val.Name}</h1>
      <h2>banned: {val.isBanned.toString()}</h2>
      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })} 
        
        className={`px-3 py-1 ${val.isBanned ? "bg-blue-500" : "bg-red-500"}  rounded-full text-xs text-white`}
      >
        change
      </button>
    </div>
  );
}

export default App;
   1.basic level useState
  <div className="p-4">
      <h1>{banned.toString()}</h1>
      <button onClick={() =>setBanned(!banned)} className=" px-2 py-1 mt-2 rounded bg-blue-500 text-white">Do it ban</button>
    </div>

    //2.intermediate level of useState

    function App() {
    const [val, setVal] = useState(0);
     return (
    <div className='p-4'>
      <h1>{val}</h1>
      <button onClick={()=>setVal((prev)=>prev+1)} className='px-3 py-1 bg-pink-400 rounded-full'>Change it</button>
      </div>

      // 3.Advance level or usestate

      function App() {
 const [val, setVal] = useState({Name: "Manish" , isBanned: false });
  return (
    <div className='p-4'>
      <h1>name : {val.Name}</h1>
      <h2>banned: {val.isBanned.toString()}</h2>
      <button onClick={()=>setVal({...val, isBanned: !val.isBanned})} className='px-3 py-1 bg-green-400 rounded-full text-white'>change</button>
    </div>
  )
    */
}
