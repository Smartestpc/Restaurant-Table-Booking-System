import { Children, createContext, useState } from "react";

export let pagecontext = createContext();
function BookingModalPage({ children }) {
  const [bookingpage, setBookingpage] = useState(null);
  const handleBooking = (id) => {
    setBookingpage(id);
  };
  return (
    <pagecontext.Provider value={{ bookingpage, handleBooking }}>
      {children}
    </pagecontext.Provider>
  );
}

export default BookingModalPage;
