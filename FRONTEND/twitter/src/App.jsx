import React from 'react'
import Home from './pages/Home'
import Fotter from './Components/Fotter'
import { Routes,Route } from 'react-router-dom'
import Account from './Pages/Account'
import Header from './Components/Header'

const App = () => {
  return (
    <div>
       <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Account />} />
      </Routes>
      <Fotter />
    </div>
  )
}

export default App