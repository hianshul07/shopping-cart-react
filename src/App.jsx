import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' />
          <Route path='/cart' />
        </Routes>
      </Router>
    </div>
  )
}

export default App
