import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ProtectedRoutes from './components/ProtectedRoutes'
import AccountDropdownCard from './components/ui/AccountDropdown'
import Wishlist from './pages/wishlist'
import ProductCard from './components/ProductCard'
import Cart from './pages/Cart'
import Checkout from './pages/checkout'
import About from './pages/about'
import Contact from './pages/contact'
import ErrorPage from './components/ui/error'
import ProductDetails from './pages/productdetails'

function App() {

  return (
    <Routes>
      <Route path='/' element={
        
          <Home/>
       
      }/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/user' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart/Checkout' element={<Checkout/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/error' element={<ErrorPage/>}/>
      <Route path='/productdetails' element={<ProductDetails/>}/>
      </Routes>
  )
}

export default App
