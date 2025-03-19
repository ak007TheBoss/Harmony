import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Booknowpage from './pages/Booknowpage'
import Facilites from './pages/Facilites'
import Rules from './pages/Rules'

const App = () => {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/about' element={<Aboutpage/>}/>
            <Route path='/book' element={<Booknowpage/>}/>
            <Route path='/facilites' element={<Facilites/>}/>
            <Route path='/rules' element={<Rules/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App