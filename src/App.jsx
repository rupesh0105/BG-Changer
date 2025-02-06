import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("white")
  // const [text, settext] = useState("Default")

  return (
    <>
    <div className='w-full h-screen duration-200 flex flex-wrap justify-center'
    style={{backgroundColor: color}}>
      {/* <div className="text-2xl font-bold">{text}</div> */}
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-full'>
        <button onClick={()=>setcolor("red")} className='outline-none px-4 shadow-xl rounded-full aria-label' style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>setcolor("green")} className='outline-none px-4 shadow-xl rounded-full' style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=>setcolor("blue")} className='outline-none px-4 shadow-xl rounded-full' style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=>setcolor("white")} className='outline-none px-4 shadow-xl rounded-full' style={{backgroundColor:"white"}}>White</button>
        <button onClick={()=>setcolor("pink")} className='outline-none px-4 shadow-xl rounded-full' style={{backgroundColor:"pink"}}>Pink</button>
        <button onClick={()=>setcolor("grey")} className='outline-none px-4 shadow-xl rounded-full' style={{backgroundColor:"grey"}}>Grey</button>
      </div>
      </div></div>      
    </>
  )
}

export default App
