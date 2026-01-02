import { FaLongArrowAltRight } from "react-icons/fa";

function Hero() {
  return (
    <div id="home" className="w-full h-screen">
      <img
        className="w-full h-full object-cover"
        src="img1.jpg"
        alt="Hero Image"
      />
      <div className="w-full h-full absolute top-0 left-0 bg-black/30 flex flex-col justify-center items-center">
        <div className=" p-8  backdrop-blur-sm rounded-md">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 text-center">
            <span>
              Good F<span className="text-blue-600">oo</span>d{" "}
            </span>{" "}
            <br />
            <span>
              Good M<span className="text-blue-600">oo</span>d
            </span>
          </h1>
          <p className="text-white text-center mb-6 uppercase font-semibold">
            Discover the best dining experience
          </p>
          <div className="flex justify-center">
            <a href="#booking">
              <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 uppercase font-bold text-sm flex items-center gap-2">
                <span>Reserve Your Table</span> <span><FaLongArrowAltRight /></span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
