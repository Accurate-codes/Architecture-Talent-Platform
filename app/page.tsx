import React from "react"
import ImageCarousel from "../components/ImageCarousel"
import Image from "next/image"
import residential from "@/assets/images/residential.jpg"
import commercial from "@/assets/images/commercial.jpg"
import theatre from "@/assets/images/theatre.jpg"
import educational from "@/assets/images/educational.jpg"
import healthcare from "@/assets/images/healthcare.jpg"
import hospitality from "@/assets/images/hospitality.jpg"

const Hero = () => {
return (
    <>
      {/* Hero Section  */}
      <section className="min-h-screen flex items-center px-4 md:px-8 pt-20 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-7xl mx-auto items-center w-full">
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Build Your Architecture Career <br />
              With Real Projects
            </h1>

            <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              Archedin connects architectural students with real-world projects
              that strengthen portfolios and build experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 bg-purple-800 text-white rounded-xl hover:bg-purple-950 transition text-sm md:text-base">
                Get Started
              </button>
              <button className="px-6 py-3 border border-black rounded-xl hover:bg-purple-950 hover:text-white transition text-sm md:text-base">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end mt-8 md:mt-0">
            <ImageCarousel />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
              Featured Projects
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore real-world architecture projects across different categories
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Project Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src={residential}
                  alt="Residential Project"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                <span className="inline-block px-3 py-1 bg-purple-600 rounded-full text-xs md:text-sm mb-2">
                  Residential
                </span>
                <h3 className="text-xl md:text-2xl">Modern Villa Design</h3>
                <p className="text-xs md:text-sm text-gray-200 mt-2">
                  Contemporary residential architecture with sustainable features
                </p>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src={commercial}
                  alt="Commercial Project"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                <span className="inline-block px-3 py-1 bg-purple-600 rounded-full text-xs md:text-sm mb-2">
                  Commercial
                </span>
                <h3 className="text-xl md:text-2xl">Corporate Office Tower</h3>
                <p className="text-xs md:text-sm text-gray-200 mt-2">
                  Multi-story commercial building with innovative workspace design
                </p>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src={theatre}
                  alt="Theatre Project"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                <span className="inline-block px-3 py-1 bg-purple-600 rounded-full text-xs md:text-sm mb-2">
                  Theatre
                </span>
                <h3 className="text-xl md:text-2xl">Performing Arts Center</h3>
                <p className="text-xs md:text-sm text-gray-200 mt-2">
                  Acoustic-focused design for optimal performance experience
                </p>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src={educational}
                  alt="Educational Project"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                <span className="inline-block px-3 py-1 bg-purple-600 rounded-full text-xs md:text-sm mb-2">
                  Educational
                </span>
                <h3 className="text-xl md:text-2xl">University Library</h3>
                <p className="text-xs md:text-sm text-gray-200 mt-2">
                  Modern learning space with collaborative work areas
                </p>
              </div>
            </div>

            {/* Project Card 5 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src={healthcare}
                  alt="Healthcare Project"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                <span className="inline-block px-3 py-1 bg-purple-600 rounded-full text-xs md:text-sm mb-2">
                  Healthcare
                </span>
                <h3 className="text-xl md:text-2xl">Medical Wellness Center</h3>
                <p className="text-xs md:text-sm text-gray-200 mt-2">
                  Patient-centered design with healing environments
                </p>
              </div>
            </div>

            {/* Project Card 6 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src={hospitality}
                  alt="Hospitality Project"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                <span className="inline-block px-3 py-1 bg-purple-600 rounded-full text-xs md:text-sm mb-2">
                  Hospitality
                </span>
                <h3 className="text-xl md:text-2xl">Luxury Boutique Hotel</h3>
                <p className="text-xs md:text-sm text-gray-200 mt-2">
                  Five-star accommodation with unique local character
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <button className="px-6 md:px-8 py-3 bg-purple-800 text-white rounded-xl hover:bg-purple-950 transition text-sm md:text-base">
              View All Projects
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
