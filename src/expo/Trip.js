import React from "react";
import { FaWalking } from "react-icons/fa";
import { MdDirectionsBus } from "react-icons/md";
import Footer from "./Footer.js";

const Trip = () => {
  const trips = [
    { time: "7:30 AM", title: "Home - College", icon: <MdDirectionsBus size={40} className="text-teal-500" /> },
    { time: "8:45 AM", title: "College - Library", icon: <FaWalking size={40} className="text-teal-500" /> },
    { time: "9:45 AM", title: "Library - Cafe", icon: <FaWalking size={40} className="text-teal-500" /> },
  ];

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-teal-50 to-teal-100 min-h-screen pt-24 pb-28">
      
      {/* Header */}
      <h1 className="text-3xl font-bold w-full bg-teal-500 text-white py-4 shadow-md text-center fixed top-0">
        Trip Log
      </h1>

      {/* Trip List */}
      <div className="flex flex-col w-full items-center mt-4 gap-6">
        {trips.map((trip, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-3 bg-white/90 backdrop-blur-sm shadow-lg w-[90%] rounded-2xl p-5 hover:scale-[1.02] transition-transform duration-200"
          >
            <p className="text-lg text-gray-600">{trip.time}</p>
            <div className="flex justify-between items-center">
              <p className="text-2xl font-semibold text-gray-800">{trip.title}</p>
              {trip.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="w-full fixed bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Trip;
