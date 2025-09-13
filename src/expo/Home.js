import React from 'react';
import {useNavigate} from 'react-router-dom';
import {FaUserCircle} from "react-icons/fa";
import { FaWalking } from "react-icons/fa"; 
import Footer from './Footer.js';
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';






const Home = () => {
  const Nav=useNavigate();
  return (
    <div className="flex flex-col  items-center bg-gray-100 min-h-screen text-gray-800">
      <div className="flex justify-between items-center bg-green-300 w-full px-4 py-2 mb-10">
        <h1 className="text-4xl font-medium">Tripzy</h1>
        <div>    <FaUserCircle size={50} className="text-gray-800" /></div>
      </div>
      <div className=" w-full mb-10 flex justify-center items-center "><button className="bg-green-400 text-white rounded-lg p-2 mx-auto py-5 text-xl px-6" onClick={()=>{Nav('./Track')}}>Start Tracking</button></div>
      <div className="flex flex-col gap-y-2 bg-white/80 shdow-xl rounded-lg p-4 w-[98%] mb-10"><p className="text-2xl font-medium">Today's Trip</p>
      <p className="text-5xl font-medium">3</p>
      <p className="text-lg font-medium">5.4 KM</p></div>
      <div className="flex flex-col gap-y-2 bg-white/80 shdow-xl rounded-lg p-5 w-[98%] mb-10 "><p className="text-2xl font-medium mb-3">Most common mode</p>
      <p className="flex items-center"><div> <FaWalking size={50} className="text-green-400 mr-3" /></div><div className="text-2xl  font-medium">Walking</div></p></div>
      <div >
      </div>
      <div className="w-full fixed bottom-0">
      <Footer  />
      </div>
    </div>
  )
}

export default Home
