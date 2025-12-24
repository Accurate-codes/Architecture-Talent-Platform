'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navbar from '@/components/navbar'

// Images
import img1 from '@/assets/hero-image.jpg'
import img2 from '@/assets/hero-2.jpg'
import img3 from '@/assets/hero-3.jpg'

const images = [img1, img2, img3]

const Hero = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Navbar />

      <section className="min-h-screen pt-32 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-black leading-tight">
              Build Your Architecture Career <br />
              With Real Projects
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              Archedin connects architectural students with real-world projects
              that strengthen portfolios and build experience.
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-purple-800 text-white rounded-xl hover:bg-purple-950 transition">
                Get Started
              </button>
              <button className="px-6 py-3 border border-black rounded-xl hover:bg-purple-950 hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-[420px] h-[420px]">
              {images.map((img, index) => {
                const position =
                  (index - current + images.length) % images.length

                return (
                  <div
                    key={index}
                    className={`
                      absolute inset-0
                      transition-all duration-700 ease-in-out
                      ${
                        position === 0
                          ? 'z-30 scale-100 opacity-100'
                          : ''
                      }
                      ${
                        position === 1
                          ? 'z-20 scale-95 translate-x-6 translate-y-6 opacity-80'
                          : ''
                      }
                      ${
                        position === 2
                          ? 'z-10 scale-90 translate-x-12 translate-y-12 opacity-60'
                          : ''
                      }
                    `}
                  >
                    <Image
                      src={img}
                      alt="Hero slide"
                      fill
                      className="rounded-3xl shadow-xl cursor-pointer transition-transform duration-700 hover:rotate-[360deg]"
                    />
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Hero
