import { useContext } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { pagecontext } from "./ui/hooks/BookingModalPage";


function UserDetails() {
    const { handleBooking } = useContext(pagecontext);
  return (
    <div className='details'>
        <div className="w-full h-20 flex items-center justify-between border-b-2 border-gray-300 relative top-0 ">
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
    </div>
  )
}

export default UserDetails