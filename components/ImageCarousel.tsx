// components/ImageCarousel.tsx (Client Component)
'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import img1 from '@/assets/hero-image.jpg'
import img2 from '@/assets/hero-2.jpg'
import img3 from '@/assets/hero-3.jpg'

const images = [img1, img2, img3]

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-center md:justify-end">
      <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
        {images.map((img, index) => {
          const position = (index - current + images.length) % images.length
          return (
            <div
              key={index}
              className={`
                absolute inset-0 transition-all duration-700 ease-in-out
                ${position === 0 ? 'z-30 scale-100 opacity-100' : ''}
                ${position === 1 ? 'z-20 scale-95 translate-x-3 md:translate-x-6 translate-y-3 md:translate-y-6 opacity-80' : ''}
                ${position === 2 ? 'z-10 scale-90 translate-x-6 md:translate-x-12 translate-y-6 md:translate-y-12 opacity-60' : ''}
              `}
            >
              <Image
                src={img}
                alt="Hero slide"
                fill
                className="rounded-3xl shadow-xl"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ImageCarousel