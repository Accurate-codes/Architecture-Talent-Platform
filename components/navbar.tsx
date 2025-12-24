import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <main className="bg-neutral-100 ">
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md absolute top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl rounded-3xl shadow-lg">
        <h1 className="text-3xl font-bold text-black">Archedin</h1>
        <ul className="flex gap-8 text-black font-medium">
          <li><a href="#">About</a></li>
          <li><Link href="/how-it-works">How It Works</Link></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
        <div className="flex gap-4">
          <button className="px-4 py-2 border border-black rounded-s-3xl hover:bg-purple-950 hover:text-white transition">
            Sign In
          </button>
          <button className="px-4 py-2 bg-purple-800 text-white rounded-e-3xl hover:bg-purple-950 transition">
            Sign Up
          </button>
        </div>
      </nav>
    </main>
  )
}

export default Page
