import React, { useState, useRef, useEffect } from 'react'

const REQUIRED_PIN = "1738"
const STORAGE_KEY = "costar_mortgages_pin_auth"

export default function PinProtection({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem(STORAGE_KEY) === "true" || window.location.pathname.startsWith('/admin')
  })

  const [digits, setDigits] = useState(['', '', '', ''])
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]

  useEffect(() => {
    if (!isAuthenticated && inputRefs[0].current) {
      inputRefs[0].current.focus()
    }
  }, [isAuthenticated])

  const handleDigitChange = (index, value) => {
    if (!/^\d*$/.test(value)) return

    const newDigits = [...digits]
    const val = value.slice(-1)
    newDigits[index] = val
    setDigits(newDigits)
    setError(false)

    if (val !== '' && index < 3) {
      inputRefs[index + 1].current?.focus()
    }

    const currentPin = newDigits.join('')
    if (currentPin.length === 4) {
      if (currentPin === REQUIRED_PIN) {
        sessionStorage.setItem(STORAGE_KEY, "true")
        setIsAuthenticated(true)
      } else {
        setError(true)
        setShake(true)
        setTimeout(() => setShake(false), 500)
        setTimeout(() => {
          setDigits(['', '', '', ''])
          inputRefs[0].current?.focus()
        }, 400)
      }
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs[index - 1].current?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').trim()
    if (/^\d{4}$/.test(pastedData)) {
      const pasteArr = pastedData.split('')
      setDigits(pasteArr)
      if (pastedData === REQUIRED_PIN) {
        sessionStorage.setItem(STORAGE_KEY, "true")
        setIsAuthenticated(true)
      } else {
        setError(true)
        setShake(true)
        setTimeout(() => setShake(false), 500)
        setTimeout(() => {
          setDigits(['', '', '', ''])
          inputRefs[0].current?.focus()
        }, 400)
      }
    }
  }

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="fixed inset-0 z-[99999] bg-slate-950 flex items-center justify-center p-4 font-sans text-slate-100">
      <div 
        className={`w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl text-center transition-transform ${
          shake ? 'animate-bounce' : ''
        }`}
      >
        <div className="mx-auto w-14 h-14 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-2xl flex items-center justify-center mb-5 shadow-inner">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-white mb-1">
          Client Preview Access
        </h2>
        <p className="text-sm text-slate-400 mb-8">
          Enter the 4-digit PIN to view the Co Star Mortgages preview site.
        </p>

        <div className="flex justify-center gap-3 mb-6" onPaste={handlePaste}>
          {digits.map((digit, idx) => (
            <input
              key={idx}
              ref={inputRefs[idx]}
              type="password"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleDigitChange(idx, e.target.value)}
              onKeyDown={(e) => handleKeyDown(idx, e)}
              className={`w-14 h-16 text-center text-2xl font-bold bg-slate-950 border rounded-xl outline-none transition-all duration-150 ${
                error 
                  ? 'border-red-500 text-red-400 focus:ring-2 focus:ring-red-500/50' 
                  : 'border-slate-700 text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/40'
              }`}
            />
          ))}
        </div>

        {error ? (
          <p className="text-xs text-red-400 font-medium animate-pulse">
            Incorrect PIN. Please try again.
          </p>
        ) : (
          <p className="text-xs text-slate-500">
            Protected preview environment
          </p>
        )}
      </div>
    </div>
  )
}
