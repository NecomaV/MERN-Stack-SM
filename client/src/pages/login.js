import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../redux/actions/authAction'
import { useDispatch } from 'react-redux'

function Login() {

  const dispatch = useDispatch()

  const initialState = {email: '', password: ''}
  const [userData,setUserData] = useState(initialState)
  const {email, password} = userData
  const [typePass, setTypePass] = useState(false)

  const handleChangeInput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(login(userData))
  }

  return (
    <div className='md:w-full xl:h-screen flex justify-center items-center bg-indigo-50 '>
      <form className="bg-[url('./images/endless-constellation.svg')] w-full max-w-5xl bg-purple-50 rounded-xl shadow-2xl shadow-indigo-700 flex flex-col items-center p-20 md:h-4/6 drop-shadow-3xl md:mt-20 h-screen" onSubmit={handleSubmit}>
        <div className="mt-20">
          <div className="md:flex md:items-center mb-6 w-full">
            <div className="w-80">
              <label className=" text-5xl ml-10 text-gray-900 font-bold md:text-left md:ml-0 md:mb-0 pr-4" htmlFor="inline-full-name">
                Email : 
              </label>
            </div>
            <div className="md:w-1/2">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded ml-10 mt-3 w-56 sm:w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
              type="text" 
              name='email'
              value={email}
              onChange={handleChangeInput}
              placeholder='Email address'/>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6 w-full" >
            <div className="w-80">
              <label className=" text-5xl ml-10 text-gray-900 font-bold md:text-left mb-1 md:ml-0 md:mb-0 pr-4" htmlFor="inline-password">
                Password :
              </label>
            </div>
            <div className="md:w-1/2">
              <input className="bg-gray-200 ml-10 mt-3 w-56 appearance-none border-2 border-gray-200 rounded sm:w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
              id="inline-password"
              type={typePass ? 'text' : 'password'} 
              placeholder="******************" 
              value={password} 
              onChange={handleChangeInput}
              name='password'
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6 w-full">
            <div className="md:w-1"></div>
            <label className="md:w-1/1 flex align-baseline text-gray-500 font-bold ml-10 md:ml-0">
              <input className="w-7 mr-4 rounded-b-2xl" type="checkbox"
              onClick={() => setTypePass(!typePass)}
              />
              <span className="text-xl">
                {typePass ? 'Hide Password' : 'Show Password'}
              </span>
            </label>
          </div>
          <div className="md:flex md:items-center w-full">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white text-2xl font-bold py-2 px-4 rounded w-48 transition-all ml-10 md:ml-0" type="submit" disabled={email && password ? false : true}>
                Login
              </button>
            </div>
          </div>
        </div>
        <p className='mt-20 text-xl  font-semibold'>
          Dont have an account? 
          </p>
          <Link className='mt-2 ml-0  text-center w-full text-lg font-semibold' to="/register"> Register Now</Link>
      </form>
      
    </div>
  )
}

export default Login