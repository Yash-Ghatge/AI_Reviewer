import React from 'react'
import Home from './Home'
import Code from './Code'
import { Route, Routes} from 'react-router-dom'
import './App.css'
const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/code-review' element={<Code/>} />
      </Routes>
    </>
  )
}

export default App
