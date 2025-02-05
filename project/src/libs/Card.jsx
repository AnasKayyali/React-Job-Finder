import { Link } from 'react-router-dom'

const Card = ({id, name, location, date, salary, imgsrc}) => {
  
  return (
    <>
        <div className="group bg-white drop-shadow-xl p-2 border border-x-transparent border-y-transparent rounded-md hover:bg-blue-500 hover:scale-105 duration-500">
            <h1 className="group-hover:text-white"> {name} </h1>
            <h1 className="group-hover:text-white"> {location} </h1>
            <img className="w-24 mt-4 border border-emerald-300" src={imgsrc}/>
            <br></br>
            <div className="flex justify-between items-center">
                <h1 className="group-hover:text-white"> {salary} </h1>
                <h1 className="group-hover:text-white"> {date} </h1>
            </div>
            <div className="flex justify-center mt-8 mb-4">
              <Link className="flex justify-center bg-yellow-200 text-black px-6 py-1 border border-transparent rounded-md group-hover:bg-white hover:border-transparent group-hover:text-black" to={`/users/${id}`}> Apply Now </Link>
            </div>
        </div>
    </>
  )
}

export default Card