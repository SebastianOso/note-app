import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import RateLimitedUI from "../components/RateLimitedUI"
const HomePage = () => {
  const [isRateLimited, setRateLimited] = useState(true)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch("http://localhost:4002/api/notes")
        const data = await res.json();
        console.log(data)
      } catch (error){
        console.log("Error fetching notes")

      }
    }

    fetchNotes()
  }, [])

  return (
  <div className='min-h-screen'>
    <Navbar />

    {isRateLimited && <RateLimitedUI/>}
  </div>
  )
}

export default HomePage