import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// shrink nav on scroll
function handleScrollNav(){
  const nav = document.querySelector('.site-nav')
  if(!nav) return
  if(window.scrollY > 60) nav.classList.add('scrolled')
  else nav.classList.remove('scrolled')
}

window.addEventListener('scroll', handleScrollNav, { passive: true })
handleScrollNav()
