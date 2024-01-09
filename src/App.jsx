import './App.css'
import { Route, Routes, BrowserRouter, Navigate, Link } from 'react-router-dom'
import Home from './pages/home/Home'
import Menu from './components/Menu/Menu'

function App() {
  

  return (
    <>
    <Menu/>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Home/>}/> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
