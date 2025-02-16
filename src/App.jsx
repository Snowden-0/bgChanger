import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap
        justify-center top-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center
        gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl'>
            <button 
            onClick={()=>setColor("green")}
            className='outline-none px-4 py-1 rounded-2xl
            text-white shadow-xl'
            style={{backgroundColor: "green"}}>
              Green
            </button>
            <button 
            onClick={()=>setColor("red")}
            className='outline-none px-4 py-1 rounded-2xl
            text-white shadow-xl'
            style={{backgroundColor: "red"}}>
              Red
            </button>
            <button 
            onClick={()=>setColor("blue")}
            className='outline-none px-4 py-1 rounded-2xl
            text-white shadow-xl'
            style={{backgroundColor: "blue"}}>
              blue
            </button>
            <button 
            onClick={()=>setColor("brown")}
            className='outline-none px-4 py-1 rounded-2xl
            text-white shadow-xl'
            style={{backgroundColor: "brown"}}>
              Brown
            </button>
            <button 
            onClick={()=>setColor("yellow")}
            className='outline-none px-4 py-1 rounded-2xl
            text-black shadow-xl'
            style={{backgroundColor: "yellow"}}>
              Yellow
            </button>
            <button 
            onClick={()=>setColor("lavender")}
            className='outline-none px-4 py-1 rounded-2xl
            text-black shadow-xl'
            style={{backgroundColor: "lavender"}}>
              Lavender
            </button>
            <button 
            onClick={()=>setColor("white")}
            className='outline-none px-4 py-1 rounded-2xl
            shadow-xl text-black'
            style={{backgroundColor: "white"}}>
              white
            </button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
