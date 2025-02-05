import { SetStateAction, useEffect, useState } from 'react'
import MoviePicker from './components/MoviePicker'
import SeatPicker from './components/SeatPicker'
import SelectedSeats from './components/SelectedSeats'
import SeatLayout from './components/SeatLayout'
import CinemaScren from './components/CinemaScreen'


function App() {
  // const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  // const [pricePerSeat, setPricePerSeat] = useState<number>(0);
  interface Movie {
    seatSelectionID: number;
    Price: number;
    // Add other properties if needed
  }

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);


  const handleMovieChange = (movie) => {
    setSelectedMovie(movie);  // Uppdaterar den valda filmen
    console.log("Selected movie in parent component:", movie);  // Här ska den valda filmen loggas i konsolen
  };

  // const handleSeatSelection = (rowIndex: number, seatIndex: number) =>{
  //   const seatID = rowIndex * 8 + seatIndex;
  //   setSelectedSeats(prevSelected => {
  //     const updatedSeats = [...prevSelected];
  //     if (updatedSeats.includes(seatID)) {
  //       updatedSeats.splice(updatedSeats.indexOf(seatID), 1);
  //     }
  //     else {
  //       updatedSeats.push(seatID);
  //     }
  //     return updatedSeats;
  //   });
  // };

//   useEffect(() => {
//     console.log('Selected seats:', selectedSeats.length);
//     console.log('Total price:', pricePerSeat);
// }, [selectedSeats, pricePerSeat]);

  return (
    <>
      <MoviePicker onMovieChange={handleMovieChange}></MoviePicker>

      <SeatLayout></SeatLayout>
      <CinemaScren></CinemaScren>
      {/* <SeatPicker handleSeatClick={handleSeatSelection}></SeatPicker>
      <SelectedSeats count={selectedSeats.length} pricePerSeat={pricePerSeat}></SelectedSeats> */}
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
