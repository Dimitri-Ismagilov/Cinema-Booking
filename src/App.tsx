import { useState } from 'react'
import MoviePicker from './components/MoviePicker'
import SeatPicker from './components/SeatPicker'
import SeatLayout from './components/SeatLayout'
import CinemaScren from './components/CinemaScreen'

function App() {
  interface Movie {
    seatSelectionID: number;
    Price: number;
  }

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

const handleMovieChange = (movie) => {
    setSelectedMovie(movie);  
    console.log("Selected movie in parent component:", movie);  
  };

return (
    <>
      <MoviePicker onMovieChange={handleMovieChange}></MoviePicker>
      <SeatLayout></SeatLayout>
      <CinemaScren></CinemaScren>
      {selectedMovie && (
        <SeatPicker
          seatSelectionID={selectedMovie.seatSelectionID}
          price={selectedMovie.Price}
        />
      )}
    </>
  )
}

export default App
