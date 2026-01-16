import React from 'react'
import { Routes,Route } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div>
    <button onClick={()=>toast.success("hello")} className='p-4  text-red-500'>congrats</button>
<h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
      <Routes>
        <Route path= "/" element ={<HomePage/>}/>
        <Route path= "/create" element ={<CreatePage/>}/>
        <Route path= "/notes/:id" element ={<NoteDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App