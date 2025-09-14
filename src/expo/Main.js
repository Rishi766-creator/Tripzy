import React, { useState, useEffect } from "react";
import { MdLocationOn } from "react-icons/md";
import { FaRoad } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);
  }, []);

  function move() {
    navigate("./Login");
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-teal-100 via-teal-200 to-teal-300">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl text-gray-800 p-10 rounded-3xl flex flex-col justify-center items-center max-w-md w-11/12">
        
    
        
        <h1 className="text-5xl font-extrabold mb-4 flex  items-center gap-2">
          <div className="flex  flex-col justify-center items-center">
          <div
            className={`transform transition-all duration-700 ${
              loaded ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
            }`}
          >
            <MdLocationOn size={50} className="text-teal-500 drop-shadow-md" />
          </div>
          <FaRoad size={36} className="text-gray-600" />
          </div>
          <span className="text-teal-700 drop-shadow-sm tracking-wide">
            Tripzy
          </span>
          
          
        </h1>
        

        {/* Tagline */}
        <p className="text-xl text-gray-600 font-medium mb-6 italic text-center">
          Every Journey Counts...
        </p>

        {/* Get Started Button */}
        <button
          onClick={move}
          className="bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold text-lg shadow-lg hover:bg-teal-600 hover:scale-105 transition-all"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Main;
