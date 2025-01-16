import { useState } from 'react'
import Loginpage from './pages/loginpage'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <>
     <BrowserRouter>
     <Routes>
    <Route path='/login' element={<Loginpage/>}/>
  


     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
