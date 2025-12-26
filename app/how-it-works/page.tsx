import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            How Archedin Works
          </h1>
          <p className="text-xl md:text-2xl text-black max-w-3xl mx-auto">
            A simple 3-step process that connects students with real projects, 
            builds stunning portfolios, and connects talent with firms.
          </p>
        </div>
      </section>

      {/* The Loop Visualization */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-purple-50/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-purple-300/60">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 text-center mb-12">
              The Project → Portfolio → Hiring Loop
            </h2>
            
            {/* Flow Diagram */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Projects */}
              <div className="flex-1 text-center">
                <div className="w-24 h-24 mx-auto bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">Real Projects</h3>
                <p className="text-purple-900 text-sm">Students work on authentic challenges</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block">
                <svg className="w-12 h-12 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Portfolio */}
              <div className="flex-1 text-center">
                <div className="w-24 h-24 mx-auto bg-purple-400 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">Verified Portfolio</h3>
                <p className="text-purple-900 text-sm">Work becomes showcased proof</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block">
                <svg className="w-12 h-12 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Hiring */}
              <div className="flex-1 text-center">
                <div className="w-24 h-24 mx-auto bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">Get Hired</h3>
                <p className="text-purple-900 text-sm">Firms discover and recruit talent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">
            Three Simple Steps
          </h2>

          {/* Step 1 - Build */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Icon Side */}
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="purple" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-300 rounded-full opacity-20 blur-xl"></div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-2/3 text-center md:text-left">
                <div className="inline-block px-4 py-1 bg-purple-500 rounded-full text-black font-semibold text-sm mb-4">
                  Step 1
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  Build
                </h3>
                <p className="text-lg md:text-xl text-purple-900 mb-6 leading-relaxed">
                  Students complete real architectural projects and challenges posted by firms. 
                  Work on diverse projects from residential design to commercial developments, 
                  gaining hands-on experience while studying.
                </p>
                <ul className="space-y-3 text-purple-900">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access projects across multiple categories and difficulty levels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Receive mentorship and feedback from experienced architects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Work on your own schedule while building practical skills</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2 - Showcase */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
              {/* Icon Side */}
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="purple" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-300 rounded-full opacity-20 blur-xl"></div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-2/3 text-center md:text-left">
                <div className="inline-block px-4 py-1 bg-blue-500 rounded-full text-black font-semibold text-sm mb-4">
                  Step 2
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  Showcase
                </h3>
                <p className="text-lg md:text-xl text-purple-900 mb-6 leading-relaxed">
                  Each completed project becomes a verified portfolio piece visible to architecture firms. 
                  Build a comprehensive showcase of your work that demonstrates real capabilities, 
                  not just theoretical knowledge.
                </p>
                <ul className="space-y-3 text-purple-900">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automatically organized portfolio with project details and images</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Verified badges showing completed projects and skills gained</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Publicly shareable profile link for job applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3 - Hire */}
          <div>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Icon Side */}
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="purple" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-green-500 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-300 rounded-full opacity-20 blur-xl"></div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-2/3 text-center md:text-left">
                <div className="inline-block px-4 py-1 bg-green-500 rounded-full text-black font-semibold text-sm mb-4">
                  Step 3
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  Get Hired
                </h3>
                <p className="text-lg md:text-xl text-purple-900 mb-6 leading-relaxed">
                  Architecture firms browse portfolios, review verified work, and hire based on proven 
                  capabilities. Students get discovered by top firms looking for talent with 
                  demonstrated skills and real project experience.
                </p>
                <ul className="space-y-3 text-purple-900">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Direct messages from firms interested in your work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Interview requests for internships and full-time positions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Career opportunities matched to your skills and interests</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-purple-800 backdrop-blur-lg rounded-3xl p-10 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Building Your Career?
            </h2>
            <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of architecture students who are building real portfolios 
              and landing their dream jobs through Archedin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105">
                Get Started Free →
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all">
                Browse Projects
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
