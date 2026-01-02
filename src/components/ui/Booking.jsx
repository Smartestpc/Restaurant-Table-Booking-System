import Cards from "./Cards";

function Booking() {
  return (
    <div id="booking" className="w-full h-screen bg-blue-600 scroll-mt-20">
      <h1 className="w-full h-20 text-white text-3xl flex items-center pl-4 font-bold">
        Available Tables
      </h1>
      <div className="w-full h-9/10 flex justify-center items-start relative">
        <div className="w-full grid md:flex p-5 gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10 justify-center">
          <Cards title="Table 1" capacity="4 people" />
          <div className="mt-6">
            <Cards title="Table 2" capacity="6 people" />
          </div>
          <Cards title="Table 3" capacity="8 people" />
        </div>
      </div>
    </div>
  );
}

export default Booking;
