import React from 'react'
import { Link } from 'react-router-dom'

const single = ({ dcourse }) => {
  return (
    <div className='w-[100vw]'>
    <div className='w-full [height:200px] flex'>
        <img 
        className='[object-fit:cover] w-full'
        src="https://static.vecteezy.com/system/resources/previews/002/272/094/original/happy-women-student-gratuated-from-education-background-concept-free-vector.jpg" alt="" />
    </div> 
    <div className='flex flex-col sm:flex-row justify-between px-10 sm:px-20 w-full items-center mt-10'>
        <div className='w-1/2 flex justify-start items-center' >
            <h1 className='text-2xl md:text-4xl text-blue-300'>Introduction to {dcourse.name}</h1>
        </div>
        <Link to="/dashboard"
        className='mt-4 sm:mt-0 px-5 py-2 rounded bg-gradient-to-r from-blue-400 to-lime-300 text-white hover:[cursor:pointer] hover:shadow-lg'>
            Back to Dashboard
        </Link>
    </div>
    <div className='mt-4 px-10 sm:px-20 text-lg w-full lg:w-1/2'>
       {dcourse.details.intro} 
    </div>
    <h1 className='ml-10 sm:ml-20 text-2xl text-blue-300 mt-10'>Branches</h1>
    <div className='w-full mb-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 px-10 sm:px-20 gap-4'>
        {dcourse.details.branches.map(x =>
            <div className='p-2 bg-blue-300 shadow-xl text-white text-sm'>{x}</div>)}
    </div>
    </div>
  )
}

export default single