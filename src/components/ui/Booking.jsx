import { useContext } from "react";
import Cards from "./Cards";
import { pagecontext } from "./hooks/BookingModalPage";

function Booking() {
  let { handleBooking } = useContext(pagecontext);
  return (
    <div id="booking" className="w-full h-screen bg-blue-600 scroll-mt-20">
      <h1 className="w-full h-20 text-white text-3xl flex items-center pl-4 font-bold">
        Available Tables
      </h1>
      <div className="w-full h-9/10 flex justify-center items-start relative">
        <div className="w-full grid md:flex p-5 gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10 justify-center">
          <Cards
            title="Table 1"
            capacity="2 people"
            onclick={() => handleBooking(1)}
          />
          <Cards
            title="Table 2"
            capacity="4 people"
            onclick={() => handleBooking(2)}
          />
          <Cards
            title="Table 3"
            capacity="8 people"
            onclick={() => handleBooking(3)}
          />
        </div>
      </div>
    </div>
  );
}

export default Booking;
