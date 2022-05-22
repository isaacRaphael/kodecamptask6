import React from 'react'

const dash = ({ user }) => {

  return (
    <div className='w-[100%] lg:w-[85%] h-[100%] p-10'>
        <div className="w-full bg-white rounded-xl shadow-xl h-[100%] p-4 md:p-10 flex justify-center">
            <div className="w-[90%] bg-gradient-to-r from-blue-400 to-lime-300 rounded-xl shadow-xl h-[55%] text-white flex flex-col md:flex-row">
                <div className='w-full md:w-[40%] p-10 flex flex-col'>
                    <h1 className='text-lg lg:text-4xl font-bold'>Welcome <br></br>{user.displayName}</h1>
                    <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur.</p>
                    <button className='w-[80%] md:w-[40%] px-4 py-2 bg-white text-blue-400 rounded-full mt-4 shadow-xl'>Start Now</button>
                </div>
                <div className='w-full md:w-[60%] h-[100%] flex justify-end px-10 py-2 -translate-y-6'>
                    <img 
                    className='w-[100%] [object-fit:contain]'
                     src="https://i.postimg.cc/tTXLBTXd/business-3d-black-young-woman-in-glasses-sitting-and-drinking-coffee.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default dash