import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Divider } from 'antd'
import { AiOutlineEye } from 'react-icons/ai' 
import { AiOutlineEyeInvisible } from 'react-icons/ai' 

const Login = () => {

  const [secure, setSecure] = useState("show")
  const navigate = useNavigate()

  const setItem = useStore(state => state.setItem)

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("loginInfo",true)
    setItem(localStorage.getItem("loginInfo"))
    navigate(-1);
  } 

  const handleSecure = (e) => {
   secure === "show" ? setSecure("hide") : setSecure("show")
  } 

  return (
    <>
      <div className="grid justify-items-stretch gap-x-10 mx-8 xs:grid-cols-1 md:grid-cols-2">
        <div className="grid grid-cols-1 justify-items-center py-4">
          <h1 className="xs:text-2xl md:text-3xl lg:text-4xl mb-10">let,s dive with a lot of Jobs</h1>
          <form className="grid justify-items-center" onSubmit={handleSubmit}>
            <label className="grid mb-4 text-sm">
              Email
              <input required type="email" className="ml-2 w-[268px] px-3 py-[12.5px] border border-gray-300 focus:outline-blue-300 caret-gray-400 rounded-md text-md mt-2"/>
            </label>
            <label className="grid text-sm">
              password
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
            <input type="submit" value="Login" className="ml-2 w-[270px] py-2 mt-4 mb-4 text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-400"/>
            <Divider className="px-2">or</Divider>
          </form>
          <div className="flex justify-center items-center gap-2 cursor-pointer mb-4 ml-2 w-[270px] py-2 text-black bg-white border border-gray-300 rounded-md hover:bg-gray-100" onClick={console.log("5")}>
            <img src="../assets/google-logo.png" className="w-7"/>
            Sign in with Google
          </div>
          <Link className="flex justify-center w-[270px] py-[10px] ml-2 text-black bg-white border border-gray-300 rounded-md hover:bg-gray-100" to="/signup"> New to Job Finder? Join Now </Link>
        </div>
        <div className="xs:max-md:hidden mt-24 mr-20">
          <img src='../assets/undraw_login_re_4vu2.svg' width="800"/>
        </div>
      </div>
    </>
  )
}

export default Login