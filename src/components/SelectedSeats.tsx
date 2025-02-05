function SelectedSeats({count, price}: { count: number, price: number}){
  const total = count * price;

    return(
        <p className="text">
        You have selected <span id="count">{count}</span> seats for a price of $<span
          id="total"
          >{total}</span>
      </p>
    )
}
export default SelectedSeats