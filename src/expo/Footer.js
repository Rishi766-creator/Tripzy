import React from 'react';
import { FaHome,FaHistory,FaChartLine,FaGift} from "react-icons/fa";
import {useNavigate} from 'react-router-dom';






const Footer = () => {
    const Nav=useNavigate();
  return (
    <div className="flex justify-between items-center bg-green-400 p-1">
      <div className="flex flex-col justify-center items-center"><FaHome size={30} className="text-gray-800 ml-3" onClick={()=>{Nav('./Home')}}/><p className="font-medium">Home</p></div>
      <div className="flex flex-col justify-center items-center"><FaHistory size={30} className="text-gray-800" onClick={()=>{Nav('./Trip')}}/><p className="font-medium">Logs</p></div>
      <div className="flex flex-col justify-center items-center"><FaChartLine size={30} className="text-gray-800" onClick={()=>{Nav('./Stat')}}/><p className="font-medium">Stats</p></div>
      <div className="flex flex-col justify-center items-center"><FaGift size={30} className="text-gray-800 mr-3" onClick={()=>{Nav('./Reward')}}/><p className="font-medium">Rewards</p></div>
    </div>
  )
}

export default Footer
