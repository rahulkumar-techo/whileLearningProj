import React, { useState } from 'react'

function App() {

const [bg,setbg] =useState({background:"transparent"});

console.log(bg)
  return (
    <div className=' flex  items-end  justify-center mb-8' style={{height:"96vh",background:bg.background}} >
    <div className=''>
      <button className='bg-yellow-700 py-2 px-4 rounded me-1' onClick={(e) =>{setbg({background:"yellow"})}}> Green </button>
      <button className='bg-green-700 py-2 px-4 rounded me-1' onClick={(e) =>{setbg({background:"green"})}} > Green </button>
      <button className='bg-blue-700 py-2 px-4 rounded me-1' onClick={(e) =>{setbg({background:"blue"})}}> Green </button>
      <button className='bg-cyan-700 py-2 px-4 rounded me-1' onClick={(e) =>{setbg({background:"cyan"})}}> Green </button>
      <button className='bg-orange-500 py-2 px-4 rounded me-1' onClick={(e) =>{setbg({background:"orange"})}}> Green </button>
    </div>
    </div>
  )
}
export default App