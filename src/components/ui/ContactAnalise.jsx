import React from "react";

function ContactAnalise({ ContactAnalise, ContactAdd }) {
  return (
    <div>
      <div className="w-36 h-36 bg-blue-600 rounded-full mb-4 flex flex-col justify-center items-center text-white shadow-lg shadow-gray-900">
        <h2 className="text-2xl font-bold">{ContactAnalise}</h2>
        <p className="text-sm">{ContactAdd}</p>
      </div>
    </div>
  );
}

export default ContactAnalise;
