import { FaLongArrowAltRight } from "react-icons/fa";

function About() {
  return (
    <div id="about" className="w-full h-screen bg-white scroll-mt-20 flex">
      <div className="w-1/2 max-h-full ">
        <img className="w-full h-full" src="img2.jpg" alt="chef" />
      </div>
      <div className="w-1/2 flex justify-center items-start flex-col p-4 gap-5">
        <h1 className="font-bold text-3xl capitalize">Chef's Story</h1>
        <p className="max-w-5/6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta atque
          cumque sunt nihil repellendus reprehenderit. Nisi, nemo, voluptas
          obcaecati porro illum voluptatum earum corporis delectus hic odit
          totam omnis perspiciatis voluptatem eum consectetur qui ipsa suscipit.
          Corporis suscipit vitae ipsa quia fugiat assumenda laborum debitis
          eligendi, odio, distinctio beatae, voluptates earum nesciunt quis.
        </p>
      <a href="#booking">
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 uppercase font-bold text-sm flex items-center gap-2">
          <span>Reserve Your Table</span>{" "}
          <span>
            <FaLongArrowAltRight />
          </span>
        </button>
      </a>
      </div>
    </div>
  );
}

export default About;
