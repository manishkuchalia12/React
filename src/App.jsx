import React, { useState } from 'react'
import Hero from './Components/Hero'


function App() {
 const data = [
  {
    name: "John",
    profession: "Engineer",
    image: "https://media.istockphoto.com/id/2163867926/photo/hospital-doctor-using-spreadsheet-for-billing-codes-on-desktop.webp?a=1&b=1&s=612x612&w=0&k=20&c=B0Hc29mEPGqj78OFi57emvJoprCUq6SmlMF8TGUHcK8=",
    friends: false,
  },
  {
    name: "Sara",
    profession: "Doctor",
    image: "https://images.unsplash.com/photo-1744124371841-d2723e438bdf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
  ,friends: false,
  },
  {
    name: "Mike",
    profession: "Photographer",
    image: "https://images.unsplash.com/photo-1748837153878-eb127737c417?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
     ,friends: false,
  },
  {
    name: "Emma",
    profession: "Artist",
    image: "https://images.unsplash.com/photo-1749843990645-e3f0c3e02a1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
   ,friends: false,},

];

 const [realdata, setRealData]= useState(data);



  return (
    <>
    <div className='w-full h-screen bg-zinc-400 flex gap-4 items-center justify-center'>
    {realdata.map((item,index)=>(
       
        <Hero key={index}values={item} />
         
      ))}
    
    </div>
    </>
  
  )
}

export default App

{

   
  /*8. <Hero image={item.image} name={item.name} profession={item.profession} /> 
          instead we using    <Hero values={item} />
  
  7. props
  function App() {
  return (
     <div>
    <Hero text='know More'color="bg-green-700"/>
    <Hero text='Download'color="bg-red-700"/>
  </div>
  
  )
}
  6. useState working on array 
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
