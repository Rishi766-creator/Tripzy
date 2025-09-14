import React from "react";
import Footer from "./Footer";
import { FaWalking, FaRoad, FaLeaf, FaCar } from "react-icons/fa";
import { MdDirectionsBus, MdTrain } from "react-icons/md";

const Stat = () => {
  return (
    <div className="bg-gradient-to-b from-teal-50 to-teal-100 min-h-screen flex flex-col items-center text-gray-800 pb-28 pt-28">
      
      {/* Header */}
      <h1 className="bg-teal-500 text-white text-3xl text-center py-4 mb-8 font-bold w-full shadow-md fixed top-0">
        Stats
      </h1>

      {/* Weekly Distance */}
      <div className="bg-white/90 backdrop-blur-sm shadow-lg w-[90%] rounded-2xl mb-8 p-8 text-center hover:scale-[1.02] transition-transform">
        <p className="text-2xl font-semibold text-teal-700 mb-2">This Week</p>
        <p className="text-4xl font-bold text-gray-800">32 KM</p>
      </div>

      {/* Most Common Route */}
      <div className="bg-white/90 backdrop-blur-sm shadow-lg w-[90%] rounded-2xl mb-8 p-8 hover:scale-[1.02] transition-transform">
        <p className="text-2xl font-semibold text-teal-700 mb-6">
          Most Common Route
        </p>
        <div className="flex items-center justify-center gap-3">
          <FaRoad size={45} className="text-teal-500" />
          <p className="text-3xl font-medium text-gray-800">Ongole - Podhili</p>
        </div>
      </div>

      {/* Mode of Transport (Mini Bar Graph) */}
      <div className="bg-white/90 backdrop-blur-sm shadow-lg w-[90%] rounded-2xl mb-8 p-8">
        <h1 className="text-2xl font-semibold text-teal-700 mb-5 text-center">
          Mode of Transport
        </h1>
        <div className="flex items-end gap-x-12 justify-center">
          <div className="flex flex-col gap-y-3 items-center">
            <div className="w-10 h-20 bg-teal-400 rounded-md shadow-md"></div>
            <MdDirectionsBus size={40} className="text-teal-500" />
          </div>
          <div className="flex flex-col gap-y-3 items-center">
            <div className="w-10 h-40 bg-teal-500 rounded-md shadow-md"></div>
            <FaWalking size={40} className="text-teal-500" />
          </div>
          <div className="flex flex-col gap-y-3 items-center">
            <div className="w-10 h-32 bg-teal-400 rounded-md shadow-md"></div>
            <FaCar size={40} className="text-teal-500" />
          </div>
          <div className="flex flex-col gap-y-3 items-center">
            <div className="w-10 h-10 bg-teal-300 rounded-md shadow-md"></div>
            <MdTrain size={40} className="text-teal-500" />
          </div>
        </div>
      </div>

      {/* Most Common Mode */}
      <div className="bg-white/90 backdrop-blur-sm shadow-lg w-[90%] rounded-2xl mb-8 p-8 hover:scale-[1.02] transition-transform">
        <p className="text-2xl font-semibold text-teal-700 mb-6">
          Most Common Mode
        </p>
        <div className="flex items-center justify-center gap-3">
          <FaWalking size={45} className="text-teal-500" />
          <p className="text-3xl font-medium text-gray-800">Walking</p>
        </div>
      </div>

      {/* CO2 Savings */}
      <div className="bg-white/90 backdrop-blur-sm shadow-lg w-[90%] rounded-2xl flex p-6 items-center justify-center gap-4 hover:scale-[1.02] transition-transform">
        <FaLeaf size={45} className="text-teal-500" />
        <p className="text-2xl font-semibold text-gray-800">
          100 kg of CO₂ Saved
        </p>
      </div>

      {/* Footer */}
      <div className="w-full fixed bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Stat;
