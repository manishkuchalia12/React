import React, { useState } from "react";

function App() {
  const [val, setVal] = useState({ Name: "Manish", isBanned: false });
  return (
    <div className="p-4">
      <h1>name : {val.Name}</h1>
      <h2>banned: {val.isBanned.toString()}</h2>
      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className="px-3 py-1 bg-green-400 rounded-full text-white"
      >
        change
      </button>
    </div>
  );
}

export default App;

{
  /* 1.basic level useState
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
