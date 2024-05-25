import './BookingList.css';

const BookingList = (props) => {
  
  const bookings = props.bookings

  return (
    <div>
      <h2>Your Bookings</h2>
        <table>
          <thead>
            <tr>
              <th>Property Name</th>
              <th>Dates</th>
              <th>Guests</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking.id} className="booking">
                <td className="booking-property-name">{booking.id/*property.name*/}</td>
                <td className="booking-dates">{booking.startDate} - {booking.endDate}</td>
                <td className="booking-guests">{booking.numGuests}</td>
                <td className="booking-price">${booking.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
    </div>
  );
};

export default BookingList;
