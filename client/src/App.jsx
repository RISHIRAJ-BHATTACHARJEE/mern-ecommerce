import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  return (
    <Routes>
      <Route path='/' element={
        <ProtectedRoutes>
          <Home/>
        </ProtectedRoutes>
      }/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default App
