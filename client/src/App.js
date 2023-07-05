import './App.css'
import React from 'react'
import Home from './components/Home'
import Navbar from './components/Nav'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Navbar />
      </main>
    </div>
  )
}
export default App
