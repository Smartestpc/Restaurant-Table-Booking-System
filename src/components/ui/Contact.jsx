import React from "react";
import ContactAnalise from "./ContactAnalise";

function Contact() {
  return (
    <div id="contact" className="w-full h-screen bg-white scroll-mt-20">
      <div className="p-4">
        <h3 className="text-lg font-semibold">Contact Us</h3>
        <p className="text-gray-600">We would love to hear from you!</p>
      </div>
      <div className="w-full h-3/4 flex gap-4 justify-center items-center p-4">
        <div className="h-full w-1/2 bg-gray-200 ronded-t-lg flex flex-col justify-between p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex  items-center justify-evenly  p-2">
            <ContactAnalise ContactAnalise={247} ContactAdd={"Support"} />
            <ContactAnalise ContactAnalise={500} ContactAdd={"Clients"} />
            <ContactAnalise ContactAnalise={8000} ContactAdd={"Dishes"} />
          </div>
          <div className="w-full flex flex-col justify-center items-start p-4 shadow-gray-900">
            <h2 className="text-3xl font-bold">Our Contact Info</h2>
            <button className="bg-blue-600 text-white px-4 py-2 m-2 rounded hover:bg-blue-700 uppercase font-bold text-sm">
              Read More
            </button>
          </div>
        </div>
        <div className="h-full w-1/2 bg-gray-200 rounded-t-lg flex items-center justify-center">
          <div className="p-4 flex flex-col gap-4 w-full">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded h-32"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
