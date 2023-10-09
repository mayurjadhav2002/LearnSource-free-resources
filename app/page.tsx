import React from 'react'
import Hero from './Landing/Hero'
import Deals from './Landing/Deals'
import Features from './Landing/Feature'
import Companies from './Landing/Companies'
function page() {
  return (
    <div>
      
      <Hero />
      <Features/>
    
      <Deals/>

<header className="bg-blue-500 text-white py-8">
        <div className="container mx-auto text-center flex justify-center items-center gap-6 px-5">
        <blockquote className="text-2xl font-semibold italic mb-4">
          {"Empowering you with knowledge and resources, one byte at a time."}
        </blockquote>
        <p className="text-white text-end">- The Qbytespace Team</p>          
        </div>
      </header>
      <Companies/>
    </div>
  )
}

export default page
