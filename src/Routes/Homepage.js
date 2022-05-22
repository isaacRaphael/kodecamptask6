import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='grow flex flex-col md:flex-row justify-evenly items-center'>
        <div className='w-[100%] p-5  mt-5 md:mt-0 md:w-[50%] flex justify-center align-center flex-col'>
            <div>
                <h1 className='text-4xl mb-5 font-bold'> <span className='text-lime-300'>Learn</span> on your<br></br> class <span className='text-blue-700'>schedule</span></h1>
            </div>
            <div>
                <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Voluptas odio eaque deserunt asperiores repudiandae nisi 
                    iure velit voluptatem, commodi adipisci dolore tenetur nulla
                     suscipit modi facere quia quas 
                    officia excepturi nostrum. Officia veritatis corrupti libero.
                </p>
                <Link 
                className='px-5 py-2 rounded bg-gradient-to-r from-blue-400 to-lime-300 text-white hover:[cursor:pointer] hover:shadow-lg'
                to="/register">Register</Link>
            </div>
            
        </div> 
        <div className='w-50% h-[80%] p-10 flex'>
            <img src="https://i.postimg.cc/rmN6HBb5/pexels-christina-morillo-1181574.jpg"  className="w-96 rounded-xl shadow-xl [object-fit:cover]" alt="" />
        </div>
    </div>
  )
}

export default Homepage