import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './pages/Authentication/Login'
import Register from './pages/Authentication/Register'
import Setup from './pages/Profile/Setup'
import ViewProfile from './pages/Profile/ViewProfile'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/setup-profile" element={<Setup />} />
        <Route path="/profile" element={<ViewProfile />} />
      </Routes>
    </Router>
  )
}

export default App
