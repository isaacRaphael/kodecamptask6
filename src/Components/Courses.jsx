import React from 'react'
import course from '../Data/Courses'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <div className='w-[100%] lg:w-[85%] h-[90%] lg:h-[100%] p-10 overflow-y-scroll'>
        <div className="w-full bg-white rounded-xl shadow-xl h-[auto] p-6 md:p-10 flex flex-col">
            <h1 className='text-4xl text-blue-300'>Course List</h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet.</p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 justify-between">
            {course.map(c => 
            <Link to={`/dashboard/course/${c.id}`} className={c.id % 2 == 0 ? 'bg-blue-200 p-6 h-[180px] flex flex-col justify-around items-center shadow-xl' : 'bg-lime-300 p-6 h-[180px] flex flex-col justify-around items-center shadow-xl'}>
            <div className='w-[50px] h-[50px] bg-white flex justify-center items-center p-2 rounded-full'>
                <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h1 className='text-xl'>{c.name}</h1>
            </Link>)}
            </div>
        </div>
    </div>
  )
}

export default Courses