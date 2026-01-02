import React from "react";

function ConfirmPageOne() {
  return <div className="book">
    <div className="w-full h-20 flex items-center justify-center border-b-2 border-gray-300 relative top-0">
        <h1 className="font-bold uppercase">Confirm Booking: Table 1</h1>
    </div>
    <div className="w-full h-3/4 flex flex-col items-center justify-center gap-4">
        <p className="text-lg">Please confirm your booking for Table 1.</p>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Confirm Booking
        </button>
    </div>
  </div>
}

export default ConfirmPageOne;
