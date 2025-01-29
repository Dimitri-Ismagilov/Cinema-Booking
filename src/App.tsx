import { useState } from 'react'
import './App.css'
import MoviePicker from './components/MoviePicker'
import SeatPeacker from './components/SeatSelection'
import SelectedSeats from './components/SelectedSeats'
import SeatLayout from './components/SeatLayout'
import CinemaScren from './components/CinemaScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MoviePicker></MoviePicker>
      <SeatLayout></SeatLayout>
      <CinemaScren></CinemaScren>
      <SeatPeacker></SeatPeacker>
      <SelectedSeats></SelectedSeats>
    </>
  )
}

export default App
