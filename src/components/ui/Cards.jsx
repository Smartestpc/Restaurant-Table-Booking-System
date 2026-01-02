import React from 'react'

function Cards({ title, capacity, onclick }) {
  return (
    <div className='bg-white shadow-lg w-full rounded-lg sm:w-75 h-90 shadow-gray-900'>
        <div className="w-full h-1/2 bg-gray-200 rounded-t-lg"></div>
        <div className="p-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-600">Capacity: {capacity}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={onclick}>
                Book Now
            </button>
        </div>
    </div>
  )
}

export default Cards