import { useState, useEffect } from "react";
import Seat from "./Seat";
import SelectedSeats from "./SelectedSeats";

interface SeatSelectionProps {
  seatSelectionID: number;
  price: number;
}

function SeatPicker( {seatSelectionID, price}: SeatSelectionProps){

  const rows = 6;
  const seatsInRow = 8;

  const [seats, setSeats] = useState(
    Array.from({length: rows}, () => 
      Array.from({ length: seatsInRow}, () => "available")
    )
  );

  const [selectedCount, setSelectedCount] = useState(0);
  
  useEffect(() => {
    if (seatSelectionID) {
      fetch(`http://localhost:3000/seatSelection?seatSelectionID=${seatSelectionID}`)
        .then((response) => response.json())
        .then((data) => {
          const seatData = data[0]?.seats || {};
          const newSeats = Array.from({ length: rows }, (_, rowIndex) =>
            Array.from({ length: seatsInRow }, (_, seatIndex) => {
              const seatID = `seat${rowIndex + 1}${seatIndex + 1}`;
              return seatData[seatID]?.status || "available";
            })
          );
          setSeats(newSeats);
          setSelectedCount(0);
        })
        .catch((error) => console.error("Error fetching seats:", error));
    }
  }, [seatSelectionID]);

  const handleLocalSeatClick = (rowIndex: number, seatIndex: number) => {
    const newSeats = [...seats];
    const currentStatus = newSeats[rowIndex][seatIndex];
    const newStatus = currentStatus === "available" ? "selected" : "available";
    newSeats[rowIndex][seatIndex] = newSeats[rowIndex][seatIndex] === "available" ? "selected" : "available";
    setSeats(newSeats);
    newSeats[rowIndex][seatIndex] = newStatus;
    setSeats(newSeats);

    const newSelectedCount = newStatus === "selected" ? selectedCount + 1 : selectedCount - 1;
    setSelectedCount(newSelectedCount);
  }

  const seatLayout = Array.from({length: rows}, (_, rowIndex) =>
  Array.from({length: seatsInRow}, (_, seatIndex) => 
  `seat${rowIndex + 1}${seatIndex + 1}`)
  );

  return (
    <div className="container">
      {seatLayout.map ((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((seatID, seatIndex) => {
            const status = seats[rowIndex][seatIndex];
            return (
              <Seat seatID={seatID} status={status} rowIndex={rowIndex} seatIndex={seatIndex} handleSeatClick={handleLocalSeatClick} key={seatID}
              ></Seat>
            );
          })}            
        </div>
      ))}
       <SelectedSeats count={selectedCount} price={price}/>
    </div>
  );
}

export default SeatPicker;