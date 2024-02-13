import './App.css'
import { Route, Routes, BrowserRouter, Navigate, Link } from 'react-router-dom'
import Home from './pages/home/Home'
import Menu from './components/Menu/Menu'
import { useContext } from 'react'
import { ThemeProvider, ThemeContext } from './context/Theme'

function App() {
    

  return (
    <ThemeProvider>
      <Menu/>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Home/>}/> 
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
