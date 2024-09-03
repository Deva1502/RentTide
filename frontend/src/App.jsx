import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from './Pages/Homepage'
import Register from './Pages/Register'
import Login from './Pages/Login'

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </BrowserRouter>
}

export default App
