import  React  from 'react'
import  Selecter  from '../libs/Selecter'
import  Home  from '../home/Home'
import  { Results }  from '../main/Results' 
import Footer from '../footer/Footer'


const SearchBar = () => {

    const selecter1 = [
      {
        value: 'Front-End',
        label: 'Front-End',
      },
      {
        value: 'Back-End',
        label: 'Back-End',
      },
      {
        value: 'Full-Stack',
        label: 'Full-Stack',
      },
      {
        value: 'Flutter',
        label: 'Flutter',
      },
    ]
    const selecter2 = [
      {
        value: 'USA',
        label: 'USA',
      },
      {
        value: 'Germany',
        label: 'Germany',
      },
      {
        value: 'French',
        label: 'French',
      },
      {
        value: 'Italy',
        label: 'Italy',
      },
      {
        value: 'UAE',
        label: 'UAE',
      },
      {
        value: 'Finland',
        label: 'Finland',
      },
      {
        value: 'Egypt',
        label: 'Egypt',
      },
      {
        value: 'Saudi-Arabia',
        label: 'Saudi-Arabia',
      },
    ]

    return (
        <>
          <Home />
          <div className="flex justify-center mt-4">
            <h1 className="flex justify-center bg-blue-500 text-white py-2 w-40 border border-transparent rounded-t-md text-lg" style={{fontFamily:'Cuprum'}}>Search Bar</h1>
          </div>        
          <div className="flex justify-center bg-blue-500 py-6 mb-14 gap-x-20 gap-y-8 xs:flex-col xs:items-center xs:mx-12 xs:gap-x-8 sm:flex-row sm:mx-24 sm:gap-x-14 md:mx-36 md:gap-x-20 lg:mx-72 xl:mx-[400px] xxl:mx-[450px] border border-transparent rounded-md">
            <Selecter placeholder='search for jop title' number={1} selecter={selecter1}/>
            <Selecter placeholder='search for jop location' number={2} selecter={selecter2} />
          </div>     
          <Results />
          <Footer />
        </>
  )
}

export default SearchBar 