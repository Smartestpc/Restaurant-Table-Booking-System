import { useContext, useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { pagecontext } from "./hooks/BookingModalPage";

function ConfirmPageThree() {
  const { handleBooking, handleChange, details } = useContext(pagecontext);
  return (
    <div className="book z-30 shadow-lg">
      <div className="w-full h-20 flex items-center justify-between border-b-2 border-gray-300 relative top-0 ">
        <div></div>
        <h2 className="text-lg font-bold mb-2">
          Please enter your details to confirm your booking for Table 3:
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
                required
                onChange={handleChange}
                type="text"
                value={details.fname}
                name="fname"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="name">Last Name:</label>
              <input
                required
                onChange={handleChange}
                value={details.lname}
                type="text"
                name="lname"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                required
                onChange={handleChange}
                value={details.email}
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="phone">Phone:</label>
              <input
                required
                onChange={handleChange}
                value={details.phone}
                type="tel"
                name="phone"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="date">Date:</label>
              <input
                required
                onChange={handleChange}
                value={details.date}
                type="date"
                name="date"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="guests">Number of Guests:</label>
              <input
                required
                title="Max"
                onChange={handleChange}
                value={details.guests}
                type="number"
                name="guests"
                max={8}
                min={1}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </form>
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => handleBooking(4)}>
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPageThree;
