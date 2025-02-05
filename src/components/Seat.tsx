interface SeatProperties{
    seatID: string;
    status: string;
    rowIndex: number;
    seatIndex: number;
    handleSeatClick: (rowIndex: number, seatIndex: number) => void;
}

function Seat ({seatID, status, rowIndex, seatIndex, handleSeatClick}: SeatProperties){
    return(
        <div className={`seat ${status}`} id={seatID} onClick={() => handleSeatClick(rowIndex, seatIndex)}></div>
    ); }

    export default Seat;