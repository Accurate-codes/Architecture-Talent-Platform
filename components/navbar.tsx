'use client'

import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <main className="bg-neutral-100">
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-md absolute top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-6xl rounded-3xl shadow-lg z-50">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">Archedin</h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-black font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/how-it-works">How It Works</Link></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="px-4 py-2 border border-black rounded-s-3xl hover:bg-purple-950 hover:text-white transition">
            Sign In
          </button>
          <button className="px-4 py-2 bg-purple-800 text-white rounded-e-3xl hover:bg-purple-950 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-black p-2 hover:bg-gray-100 rounded-lg transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          ref={menuRef}
          className="md:hidden fixed top-16 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl bg-white rounded-3xl shadow-lg z-50 border border-gray-200 animate-in slide-in-from-top-2 duration-200"
        >
          <ul className="flex flex-col gap-4 p-6 text-black font-medium">
            <li><Link href="/" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-purple-600 transition">Home</Link></li>
            <li><Link href="/how-it-works" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-purple-600 transition">How It Works</Link></li>
            <li><a href="#" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-purple-600 transition">Features</a></li>
            <li><a href="#" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-purple-600 transition">Pricing</a></li>
          </ul>
          <div className="flex flex-col gap-4 p-6 pt-0 border-t border-gray-100">
            <button className="px-4 py-2 border border-black rounded-xl hover:bg-purple-950 hover:text-white transition w-full">
              Sign In
            </button>
            <button className="px-4 py-2 bg-purple-800 text-white rounded-xl hover:bg-purple-950 transition w-full">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default Page
