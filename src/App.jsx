import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Card from './pages/card/Card'
import Error from './pages/Error/Error'
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/card/:slug' element={<Card></Card>}></Route>
      <Route path='*' element={<Error></Error>}></Route>
     </Routes>
    </>
  )
}

export default App
