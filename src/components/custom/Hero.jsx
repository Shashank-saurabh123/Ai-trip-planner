import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
  <h1 className='font-extrabold text-[38px] text-center mt-16'>
    <span className='text-[#f56551]'>Discover Your Next Adventure with AI:</span>
    <br />
    Personalized
    Itineraries at Your
    Fingertips
  </h1>

  <p className='text-xl text-gray-500 text-center no-wrap'>Your Personal trip Planner and travel curator,creating itineraries tailored to your interests and budget</p>
 

    <img src="/landing.png" className='-mt-2 shadow-md object-cover'/>
    <Link to={'/create-trip'}>
   <Button className='mb-2'>Get Started, it's Free</Button>
   </Link>

</div>

  )
}

export default Hero
