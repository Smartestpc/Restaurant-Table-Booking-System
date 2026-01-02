import React, { useContext } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { pagecontext } from "./hooks/BookingModalPage";
function ConfirmPageTwo() {
  const { handleBooking } = useContext(pagecontext);
  return (
     <div className="book z-30 shadow-lg">
      <div className="w-full h-20 flex items-center justify-between border-b-2 border-gray-300 relative top-0 ">
        <div></div>
        <h2 className="text-lg font-bold mb-2">
          Please enter your details to confirm your booking for Table 2:
        </h2>
        <div
          onClick={() => handleBooking(null)}
          className="flex items-center justify-center p-1"
        >
          <LiaTimesSolid size={20} />
        </div>
      </div>
      <div className="w-full h-3/4 mt-4 flex flex-col items-center justify-center gap-4">
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name">First Name:</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="name">Last Name:</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="date">Phone:</label>
              <input
                type="date"
                id="date"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="date">Number of Guests:</label>
              <input
                type="number"
                id="number"
                max={4}
                min={1}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </form>
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPageTwo;
