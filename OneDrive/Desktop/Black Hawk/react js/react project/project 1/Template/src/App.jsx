import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Dealspage from './pages/Dealspage'
import Loginpage from './pages/Loginpage'
import Registerpage from './pages/Registerpage'
import Cartpage from './pages/Cartpage'

const App = () => {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path="/deals" element={<Dealspage/>}/>
  <Route path="/login" element={<Loginpage/>}/>
  <Route path="/register" element={<Registerpage/>}/>
  <Route path ="/cart" element={<Cartpage/>}/>
</Routes>

</BrowserRouter>
</>
 )
}

export default App