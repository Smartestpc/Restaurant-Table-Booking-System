function Navbar() {
  return (
    <div className="w-screen h-20 flex items-center justify-between p-4 bg-black shadow-md fixed top-0 left-0 z-10">
      <div className=" animate-bounce flex items-center justify-center text-blue-600 font-bold uppercase text-3xl">
        SR
      </div>
      <div className="flex gap-6 items-center">
        <ul className="flex gap-3 text-white  font-semibold uppercase items-center">
          <a href="#home">
            <li className="hover:font-bold transition duration-200 hover:text-blue-600">
              home
            </li>
          </a>
          <a href="#about">
            <li className="hover:font-bold transition duration-200 hover:text-blue-600">
              about
            </li>
          </a>
          <a href="#booking">
            <li className="hover:font-bold transition duration-200 hover:text-blue-600">
              booking
            </li>
          </a>
          <a href="#contact">
            <li className="hover:font-bold transition duration-200 hover:text-blue-600">
              contact
            </li>
          </a>
        </ul>
        <a href="#booking">
          <button className="bg-blue-600 text-white px-4 py-2 m-2 rounded hover:bg-blue-700 uppercase font-bold text-sm">
            book a table
          </button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
