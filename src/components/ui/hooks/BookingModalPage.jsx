import { createContext, useEffect, useState } from "react";

export let pagecontext = createContext();
function BookingModalPage({ children }) {
  const [bookingpage, setBookingpage] = useState(null);
  const handleBooking = (id) => {
    setBookingpage(id);
  };
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setDetails({...details,[e.target.name]: e.target.value});
  };
  useEffect(function() {
    console.log(details);
  }, [details]);

  const clearDetails = () => {
  setDetails({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
  });
};
  return (
    <pagecontext.Provider value={{ bookingpage, handleBooking, handleChange, details, clearDetails }}>
      {children}
    </pagecontext.Provider>
  );
}

export default BookingModalPage;
