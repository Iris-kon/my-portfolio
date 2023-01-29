import React from 'react'
import { About } from './components/About'
import { Home } from './components/Home'
import { NavbAr } from './components/Navbar'
import { Skills } from './components/Skills'
import { Work } from './components/Work'

function App() {
  return (
    <div>
      <NavbAr />
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  )
}

export default App
