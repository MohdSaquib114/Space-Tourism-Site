// import React from 'react'
import NavBar from './Component/NavBar'
import Home from './Component/Home'
import Crew from './Component/Crew'
import Technology from './Component/Technology'
import Destination from './Component/Destination'
import useCurrentWidth from './Component/useCurrentWidth'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'

const App = () => {
  const width = useCurrentWidth();
     return (
    <main>
      <BrowserRouter>
      <NavBar width={width} />
<Routes>
    <Route path='/' element={<Home />}/>
    <Route path='destination' element={<Destination />}/>
    <Route path='crew' element={<Crew />}/>
    <Route path='technology' element={<Technology />}/>
</Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
