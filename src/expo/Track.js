import React, { useState } from "react";
import { FaWalking, FaCar, FaBus, FaTrain } from "react-icons/fa";
import { FiMapPin, FiNavigation } from "react-icons/fi";

const Track = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [mode, setMode] = useState("Walk");
  const [tripStarted, setTripStarted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 flex flex-col items-center pt-24 pb-24">
      
      {/* Trip Details Card */}
      <div className="w-[95%] bg-teal-100/50 rounded-2xl p-6 shadow-xl border border-teal-200 flex flex-col gap-4">
        
        {/* Origin & Destination Input */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <FiMapPin className="text-teal-700" />
            <input
              type="text"
              placeholder="Origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="flex-1 px-3 py-2 rounded-lg border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div className="flex items-center gap-2">
            <FiMapPin className="text-teal-700" />
            <input
              type="text"
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="flex-1 px-3 py-2 rounded-lg border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
        </div>

        {/* Mode of Transport */}
        <div className="flex gap-2 flex-wrap">
          {["Walk", "Car", "Bus", "Train"].map((m) => (
            <button
              key={m}
              className={`px-4 py-2 rounded-full flex items-center gap-2 text-white font-medium shadow-md transition ${
                mode === m ? "bg-teal-700" : "bg-teal-300 hover:bg-teal-400"
              }`}
              onClick={() => setMode(m)}
            >
              {m === "Walk" && <FaWalking />}
              {m === "Car" && <FaCar />}
              {m === "Bus" && <FaBus />}
              {m === "Train" && <FaTrain />}
              {m}
            </button>
          ))}
        </div>

        {/* Travelers Info */}
        <div className="text-white font-medium">
          Travelers: <span className="font-bold">1</span>
        </div>

        {/* Start / End Trip Button */}
        <div className="flex justify-center mt-4">
          {!tripStarted ? (
            <button
              onClick={() => setTripStarted(true)}
              className="w-full bg-white text-teal-700 font-semibold py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
            >
              Start Trip
            </button>
          ) : (
            <button
              onClick={() => setTripStarted(false)}
              className="w-full bg-red-500 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-red-600 transition"
            >
              End Trip
            </button>
          )}
        </div>
      </div>
          <div className="text-4xl mt-10 mb-10 text-teal-100 font-semibold">or</div>
      {/* Use Current Location Button (Separate / Out of Card) */}
      <div className="w-[95%] mt-6">
        <button className="w-full bg-teal-100/50 text-white py-3 rounded-xl shadow-md flex items-center justify-center gap-2 hover:bg-teal-700 transition">
          <FiNavigation /> Use Current Location
        </button>
      </div>
    </div>
  );
};

export default Track;
