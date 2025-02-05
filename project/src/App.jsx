import { QueryClientProvider, QueryClient } from "react-query"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SearchBar from "./main/SearchBar"
import Navbar from "./navbar/Navbar"
import JobDetails from "./main/JobDetails"
import WantLogin from "./auth/WantLogin"
import SignUp from "./signup/Signup"
import WantPostJob from "./auth/WantPostJob"

const queryClient = new QueryClient()

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}> 
        <Router>
          <Navbar />  
          <Routes>
            <Route path="/" element={<SearchBar />} />
            <Route path="/users/:detailsId" element={<JobDetails />} />
            <Route path="/login" element={<WantLogin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/postjob" element={<WantPostJob />} />
          </Routes>  
        </Router>
      </QueryClientProvider>
    </>
  )
}