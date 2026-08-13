import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import PinProtection from './components/PinProtection'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PinProtection>
        <App />
      </PinProtection>
    </BrowserRouter>
  </React.StrictMode>
)

// remove preloader once app mounts / is ready
function showKeyhole(){
  const pre = document.getElementById('preloader')
  if(!pre) return
  pre.classList.add('show')
}

function removePreloader(){
  const pre = document.getElementById('preloader')
  document.body.classList.remove('preloader-active')
  if(!pre) return
  pre.classList.add('fade-out')
  setTimeout(()=> pre.remove(), 420)
}

// show logo animation then fade out
setTimeout(()=>{
  showKeyhole()
  setTimeout(removePreloader, 1200)
}, 150)

// shrink nav on scroll
function handleScrollNav(){
  const nav = document.querySelector('.site-nav')
  if(!nav) return
  if(window.scrollY > 60) nav.classList.add('scrolled')
  else nav.classList.remove('scrolled')
}

window.addEventListener('scroll', handleScrollNav, { passive: true })
// initialize
handleScrollNav()
