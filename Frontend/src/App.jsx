import { useState } from 'react'
import Loginpage from './pages/loginpage'
import Signup_page from './pages/signup_page'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import './App.css'
import Home from './pages/home'

function App() {
  
  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path='/login' element={<Loginpage/>}/>
       <Route path='/signup' element ={<Signup_page/>}/>
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
