import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useStore } from '../store/useStore'


const fetchJobs = (detailsId) => {
  return axios.get(`https://job-finder-json-server.onrender.com/jobs/${detailsId}`)  
}

const jobDetails = () => {

  const navigate = useNavigate() 

  const item = useStore(state => state.item)

  const { detailsId } = useParams()

  const {
    isLoading,
    isError,
    error,
    data,
  } = useQuery (['jobs', detailsId], () => fetchJobs(detailsId))

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  const handleSendCv = () => {
    item === "true" ? null : navigate('/login') 
  } 
   
  const imgsrc = data?.data.imgsrc
  const imgsrc1 = `.${imgsrc}`

  return (
    <>
      <div className="grid grid-cols-2 justify-items-stretch mt-14 mx-8 gap-x-10 xs:grid-cols-1 md:grid-cols-2">
        <div className="bg-white drop-shadow-xl px-11 py-4">
          <p>job_title: {data?.data.name}</p>
          <br></br>
          <p>job_location: {data?.data.location}</p>
          <br></br>
          <img className="w-48 mt-4 border border-emerald-300" src={imgsrc1}/>
          <br></br>
          <p>job_salary: {data?.data.salary}</p>
          <br></br>
          <p className="mb-6">job_date: {data?.data.date}</p>
          <button className="flex justify-center bg-blue-500 text-white px-10 py-2 border border-transparent rounded-lg hover:bg-blue-600 duration-500" onClick={handleSendCv}> Send CV </button>
        </div>
        <div className="grid gap-y-6 bg-white drop-shadow-xl px-11 py-8">
          <div className='bg-white drop-shadow-xl p-4 overflow-auto'> 
            <h1> Desciption for job: </h1>
            <p> {data?.data.description} </p>
          </div>
          <div className='bg-white drop-shadow-xl p-4 overflow-auto'> 
            <h1> Requirements (stack or skills) for job: </h1>
            <p> {data?.data.requirements} </p> 
          </div>
        </div>
      </div>
    </>
  )
}

export default jobDetails