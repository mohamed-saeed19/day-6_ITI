import React from 'react'
import img from '../Image/bg.jpg'
const Home = () => {
  return (
    <div className=' w-100 vh-100 position-relative'>
        <img src={img} className='w-100 h-100' />
        <div className='me position-absolute '>
            <h1 className='text-white px-5 mx-5'> ABO SAEED</h1>
            <h1 className='text-danger'>Web Developer & Designer</h1>
            <button className='button'>Contact Me</button>
        </div>

  
    </div>
  )
}

export default Home