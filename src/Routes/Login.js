import React from 'react'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../Firebase/Firebase-Config'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


const Login = ({ user, setUser}) => {
const [logEmail, setLogEmail] = useState("")
const [logPassword, setLogPasword] = useState("")
const [loginError, setLoginError] = useState(false)
const navigate = useNavigate()

useEffect(
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser) 
    }),[]
)

const handleGoogleAuth = async () => {
    try{
        const result = await signInWithPopup(auth, provider)
        console.log(result)
        if(result)
            navigate("/dashboard")
    }catch(err){
        console.log(err)
    }
    
}

const handleLogin = async () => {
    console.log(`${logEmail} ${logPassword}`)
    try{
        const userN = await signInWithEmailAndPassword(auth, logEmail, logPassword)
        console.log(userN)
        navigate("/dashboard")
    }catch(err){
        console.log(err)
        setLoginError(true)
    }

}
  return (
    <div className='grow flex flex-col md:flex-row  justify-start md:justify-evenly items-center mt-2 md:mt-10 px-4 md:px-16'>
        <div className="w-[100%] md:w-[50%] text-center p-5 flex flex-col justify-center items-center">
            <h1 className='text-2xl'>Student Login</h1>
            <p className='text-lg text-gray-500'>make sure your account is secure</p>
            <img className='hidden md:flex' src="https://i.postimg.cc/PfRWv22M/marginalia-productive-work.gif" alt="" />

        </div>
        <div className="w-[100%] p-0 mt-10 md:mt-0 md:p-5 md:w-[50%]  flex flex-col justify-center items-center">
            <img src="https://kode.camp/Images/Home/kodecamp_logo.png" alt="" className='w-32' />
            {loginError && <div className=" w-[50%] bg-red-200 text-white rounded-lg p-3">Invalid Login Credentials</div>}
            <div className='w-[100%] flex justify-center items-center'>
                <input 
                value={logEmail}
                onChange={e=>setLogEmail(e.target.value)}
                type="text" placeholder='Email' required className='border-b-2 w-[75%] md:w-1/2 mt-4 p-4'/><span><i className="fa-solid fa-user text-gray-700"></i></span>
            </div>
            <div className='w-[100%] flex justify-center items-center'>
                <input
                value={logPassword} 
                onChange={e=>setLogPasword(e.target.value)}
                type="password"  placeholder='Password' required className='border-b-2 w-[75%] md:w-1/2 mt-4 p-4'/><span><i className="fa-solid fa-lock text-gray-700"></i></span>
            </div>
            
            <div className='text-blue-500 w-[50%] flex justify-end mt-4 hover:[cursor:pointer]'><h1><span className='text-gray-300 mr-2'>No account ?</span><Link to="/register">Register</Link></h1></div>
            <button 
            onClick={()=> handleLogin()}
            className='px-5 py-2 rounded bg-gradient-to-r from-blue-400 to-lime-300 text-white hover:[cursor:pointer] hover:shadow-lg mt-4 w-[50%]'>Login</button>
            <button
            onClick={()=>handleGoogleAuth()} 
            className='w-[50%] text-blue-400 mt-5'><i className="fa-brands fa-google mr-3"></i>Sign in with Google</button>
        </div>
    </div>
  )
}

export default Login