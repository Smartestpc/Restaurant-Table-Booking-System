import { useContext } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { pagecontext } from "./ui/hooks/BookingModalPage";

function UserDetails() {
  const { handleBooking, details } = useContext(pagecontext);
  return (
    <div className="details p-3">
      <div className="w-full h-15 flex items-center justify-between border-b-2 border-gray-300 relative top-0 ">
        <div></div>
        <h2 className="text-lg font-bold mb-2">
          You have successfully booked. Thank you!
        </h2>
        <div
          onClick={() => handleBooking(null)}
          className="flex items-center justify-center p-1"
        >
          <LiaTimesSolid size={20} />
        </div>
      </div>
      <div className="flex  justify-between p-2 border-b-2 border-gray-300">
        <div>
          <p className="p-4">Full Name: {details.fname} {details.lname}</p>
        <p className="p-4">Email: {details.email}</p>
        <p className="p-4">Phone: {details.phone}</p>
        </div>
        <div>
        <p className="p-4">Date: {details.date}</p>
        <p className="p-4">Number of Guests: {details.guests}</p>
        </div>
      </div>
      <div className="flex justify-center items-center p-2">
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => handleBooking(null)}>
            Done!
          </button>
      </div>
    </div>
  );
}

export default UserDetails;
