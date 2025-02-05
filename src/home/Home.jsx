import React from 'react'

const Home = () => {
  return (
    <div>
        <div className="grid mt-20 mb-20 bg-white drop-shadow-lg py-8 xs:grid-cols-1 md:grid-cols-2">
          <div className="ml-16 xl:mt-8">
            <p className="xs:hidden md:flex md:text-6xl min-[900px]:text-7xl min-[900px]:mt-6 min-[1200px]:mt-16 xxl:mt-10 xxl:text-8xl" style={{fontFamily:'Cuprum'}}>Find  your  dream  job  with  us</p>
          </div>
          <div className="xs:mx-6">
            <img src="/assets/undraw_interview_re_e5jn.svg"/>
          </div>
        </div>
    </div>    
  )
}

export default Home