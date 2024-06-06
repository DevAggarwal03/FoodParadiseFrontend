import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Review from './pages/Review'
import Menu from './pages/Menu'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Order from './pages/Order'
import MainOutlet from './pages/MainOutlet'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import AddDish from './pages/AddDish'
import { useState } from 'react'
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'
import axios from 'axios'

function App() {

  const {token, setLoggedIn, loggedIn} = useContext(AppContext);
    
  
  useEffect(() => {
      const isLoggedIn = async() => {    
          try {
              const request = await axios.get(`${import.meta.env.BACKEND_URL}/api/v1/isCustomer`, {
                  headers: {
                    Authorization : `Bearer ${token}`
                  }
              })
    
              console.log(request)
              setLoggedIn(request.data.success);
    
          } catch (error) {
              console.log('token not set')
          }
        }
        if (token) {
          isLoggedIn();
        }
    }, [token])

  return (
    <div className='w-full'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainOutlet/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/review' element={<Review/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/addDish' element={<AddDish/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
