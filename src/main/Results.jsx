import Card from "../libs/Card"
import { React } from "react"
import { useQuery } from 'react-query'
import axios from 'axios'
import { useStore } from "../store/useStore";

const fetchJobs = () => {
  return axios.get('https://job-finder-json-server.onrender.com/jobs')  
}

export const Results = () => { 

  const name = useStore((state) => state.name);
  const location = useStore((state) => state.location);
  
  const {
    isLoading,
    isError,
    error,
    data,
  } = useQuery ('jobs', fetchJobs)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  const anas1 = name !== '' && name !== undefined ? data?.data.filter((job) => job.name === name) : null
  const anas2 = location !== '' && location !== undefined ? data?.data.filter((job) => job.location === location) : null
  const anas3 = location !== '' && location !== undefined && name !== '' && name !== undefined ? data?.data.filter((job) => job.location === location && job.name === name) : null

  return (
    <>        
      <div className="grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-10">
        { 
          (name !== '' && name !== undefined &&  location === '') || (name !== '' && name !== undefined && location === undefined) ? 
          anas1?.map( job => 
          (
            <Card key={job.id} 
              id={job.id}
              name={job.name} 
              location={job.location} 
              date={job.date} 
              salary={job.salary} 
              imgsrc={job.imgsrc}
            />
          ))
          :
          (location !== '' && location !== undefined && name === '') || (location !== '' && location !== undefined && name === undefined) ?
          anas2?.map( job => 
          (
            <Card key={job.id} 
              id={job.id}
              name={job.name} 
              location={job.location} 
              date={job.date} 
              salary={job.salary} 
              imgsrc={job.imgsrc}
            />
          ))
          :
          (location !== '' && location !== undefined && name !== '' && name !== undefined) ?
          anas3?.map( job => 
          (
            <Card key={job.id} 
              id={job.id}
              name={job.name} 
              location={job.location} 
              date={job.date} 
              salary={job.salary} 
              imgsrc={job.imgsrc}
            />
          ))
          :
          data?.data.map( job => 
          (
            <Card key={job.id} 
              id={job.id}
              name={job.name} 
              location={job.location} 
              date={job.date} 
              salary={job.salary} 
              imgsrc={job.imgsrc}
            />
          ))
        }
      </div>
      <br></br>
    </>
  )
}

