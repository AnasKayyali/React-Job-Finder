import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Divider } from 'antd'
import { AiOutlineEye } from 'react-icons/ai' 
import { AiOutlineEyeInvisible } from 'react-icons/ai' 


const SignUp = () => {

  const [secure, setSecure] = useState("show")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(-1)
  } 

  const handleSecure = (e) => {
   secure === "show" ? setSecure("hide") : setSecure("show")
  } 

  return (
    <>
        <div className="grid grid-cols-1 justify-items-center py-8 rounded-lg bg-white md:drop-shadow-2xl md:mx-48 lg:mx-[19rem] xl:mx-[30rem] md:mt-12">
          <h1 className="xs:text-2xl md:text-3xl lg:text-4xl mb-10">Welcome to our Society</h1>
          <form className="grid justify-items-center" onSubmit={handleSubmit}>
            <label className="grid mb-4 text-sm">
              Email or Phone:
              <input required type="text" className="ml-2 w-[268px] px-3 py-[12.5px] border border-gray-300 focus:outline-blue-300 caret-gray-400 rounded-md text-md mt-2"/>
            </label>
            <label className="grid text-sm">
              <div className="relative">
                {
                  secure === "show" ?
                  <AiOutlineEye className="absolute right-3 bottom-[11px] text-2xl" onClick={handleSecure}/>
                  :
                  <AiOutlineEyeInvisible className="absolute right-3 bottom-[11px] text-2xl" onClick={handleSecure}/>
                }
                <input required type={secure === "show" ? "text" : "password"} className="ml-2 w-[268px] pl-4 pr-11 py-2 border border-gray-300 focus:outline-blue-300 caret-gray-400 rounded-md text-lg mt-2"/>
              </div>
            </label>
            <input type="submit" value="Agree & Join" className="ml-2 w-[270px] py-2 mt-4 mb-4 text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-400"/>
            <Divider className="px-2">or</Divider>
          </form>
          <div className="flex justify-center items-center gap-2 cursor-pointer mb-4 ml-2 w-[270px] py-2 text-black bg-white border border-gray-300 rounded-md hover:bg-gray-100">
            <img src="/assets/google-logo.png" className="w-7"/>
            Continue with Google
          </div>
          <p className="ml-2"> Already on Job-Finder? <Link to="/login" className="text-blue-600 font-semibold">Login</Link> </p>
        </div>
    </>
  )
}


export default SignUp