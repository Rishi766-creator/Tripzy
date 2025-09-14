import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaWalking,
  FaCar,
  FaBus,
  FaTrain,
  FaLeaf,
  FaSearchLocation
} from "react-icons/fa";
import Footer from "./Footer";

const Home = () => {
  const Nav = useNavigate();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  // Sample data
  const todaysPlans = [
    { from: "Home", to: "Office", mode: "Bus", cost: "₹15", distance: "4 km" },
    { from: "Office", to: "Market", mode: "Walk", cost: "Free", distance: "1 km" },
  ];

  const nearbyPlaces = [
    { name: "City Park", distance: "2.5 km", recommended: "Walk" },
    { name: "Central Mall", distance: "3.2 km", recommended: "Bus" },
    { name: "Railway Station", distance: "5 km", recommended: "Train" },
  ];

  const handleSearch = () => {
    if (search.trim() !== "") {
      // For now, just simulate a result
      setSearchResult({ name: search, distance: "3.4 km", mode: "Car" });
    }
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-teal-50 via-teal-100 to-teal-200 min-h-screen text-gray-800 pb-28 pt-28">

      {/* Header */}
      <div className="flex justify-between items-center bg-teal-500 text-white w-full px-6 py-3 shadow-lg fixed top-0 z-10">
        <h1 className="text-3xl font-bold tracking-wide">Tripzy</h1>
        <div
          onClick={() => Nav("/User")}
          className="cursor-pointer hover:scale-105 transition-transform"
        >
          <FaUserCircle size={45} className="text-white drop-shadow-md" />
        </div>
      </div>

      {/* Daily Eco Tip */}
      <div className="bg-teal-600 text-white rounded-2xl shadow-lg p-4 w-[95%] mt-4 mb-4 text-center">
        <p className="text-lg font-semibold">
          🌱 Tip: Walk or cycle for short trips today to save fuel and reduce CO₂!
        </p>
      </div>

      {/* Today’s Travel Plans */}
      <div className="bg-white/90 shadow-xl rounded-2xl p-6 w-[95%] mb-6">
        <p className="text-2xl font-semibold mb-4 text-teal-700">Today's Plans</p>
        <div className="flex flex-col gap-3">
          {todaysPlans.map((plan, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-teal-50 rounded-xl p-3 shadow-sm"
            >
              <div>
                <p className="font-medium">
                  {plan.from} → {plan.to}
                </p>
                <p className="text-sm text-gray-600">
                  Mode: {plan.mode} • {plan.distance} • {plan.cost}
                </p>
              </div>
              <div className="text-teal-600 text-xl">
                {plan.mode === "Walk" && <FaWalking />}
                {plan.mode === "Car" && <FaCar />}
                {plan.mode === "Bus" && <FaBus />}
                {plan.mode === "Train" && <FaTrain />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search for Place */}
      <div className="bg-white/90 shadow-xl rounded-2xl p-6 w-[95%] mb-6">
        <p className="text-2xl font-semibold mb-4 text-teal-700">Search a Place</p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter place name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
          >
            <FaSearchLocation />
          </button>
        </div>

        {searchResult && (
          <div className="mt-3 p-3 bg-teal-50 rounded-xl shadow-sm">
            <p className="font-medium text-gray-800">
              📍 {searchResult.name} - {searchResult.distance}
            </p>
            <p className="text-sm text-gray-600">
              Recommended: {searchResult.mode}
            </p>
          </div>
        )}
      </div>

      {/* Nearby Famous Places */}
      <div className="bg-white/90 shadow-xl rounded-2xl p-6 w-[95%] mb-6">
        <p className="text-2xl font-semibold mb-4 text-teal-700">
          Nearby Famous Places
        </p>
        <div className="flex flex-col gap-3">
          {nearbyPlaces.map((place, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-teal-50 rounded-xl p-3 shadow-sm"
            >
              <div>
                <p className="font-medium">{place.name}</p>
                <p className="text-sm text-gray-600">
                  {place.distance} • Recommended: {place.recommended}
                </p>
              </div>
              <div className="text-teal-600 text-xl">
                {place.recommended === "Walk" && <FaWalking />}
                {place.recommended === "Bus" && <FaBus />}
                {place.recommended === "Train" && <FaTrain />}
                {place.recommended === "Car" && <FaCar />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Start Trip Button */}
      <div className="w-full mt-4 mb-6 flex justify-center">
        <button
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-lg px-6 py-4 text-xl transition-all hover:scale-105"
          onClick={() => Nav("/Track")}
        >
          Start Trip
        </button>
      </div>

      {/* Footer */}
      <div className="w-full fixed bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
