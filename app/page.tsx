import React from "react"
import Image from "next/image"

import ImageCarousel from "../components/ImageCarousel"

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
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-black mb-4">
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

     {/* Benefits Section */}
     <section className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-bold text-black mb-4">
             Why Choose Archedin?
           </h2>
           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
             Connect with real projects and build the portfolio that launches your architecture career
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-purple-50 transition-all duration-300 hover:shadow-lg">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
              <svg className="w-7 h-7 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Real-World Experience</h3>
            <p className="text-gray-600">
              Work on actual architecture projects with real clients and deadlines, building practical skills that matter.
            </p>
          </div>
          
           <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-purple-50 transition-all duration-300 hover:shadow-lg">
             <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
               <svg className="w-7 h-7 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
               </svg>
             </div>
              <h3 className="text-xl font-bold text-black mb-3">Build Your Portfolio</h3>
               <p className="text-gray-600">
                 Create a compelling portfolio with diverse projects that showcase your skills to potential employers.
               </p>
           </div>

      <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-purple-50 transition-all duration-300 hover:shadow-lg">
        <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
          <svg className="w-7 h-7 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-black mb-3">Expert Mentorship</h3>
        <p className="text-gray-600">
          Learn from experienced architects who guide you through projects and provide valuable industry insights.
        </p>
      </div>

      <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-purple-50 transition-all duration-300 hover:shadow-lg">
        <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
          <svg className="w-7 h-7 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-black mb-3">Flexible Schedule</h3>
        <p className="text-gray-600">
          Work on projects that fit your academic schedule, balancing studies with practical experience.
        </p>
      </div>

      <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-purple-50 transition-all duration-300 hover:shadow-lg">
        <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
          <svg className="w-7 h-7 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-black mb-3">Career Advancement</h3>
        <p className="text-gray-600">
          Gain competitive advantage with hands-on experience that sets you apart in job applications.
        </p>
      </div>

      <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-purple-50 transition-all duration-300 hover:shadow-lg">
        <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
          <svg className="w-7 h-7 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-black mb-3">Industry Network</h3>
        <p className="text-gray-600">
          Connect with architecture firms and professionals, building relationships that can lead to future opportunities.
        </p>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Hero

