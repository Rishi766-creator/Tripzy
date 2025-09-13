import React from 'react';
import { MdLocationOn } from "react-icons/md";
import { FaRoad } from "react-icons/fa";
import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';



const Main=()=>{
    const [loaded,setLoaded]=useState(false);
    useEffect(()=>{setLoaded(true);})
    const Nav=useNavigate();
    function move(){
        Nav('./Login');
    }
    return(
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-green-200 via-green-300 to-green-400">
 

            <div className="bg-white/80 shadow-xl text-gray-800 p-10 rounded-xl flex flex-col justify-center items-center ">
            <h1 className="text-5xl font-semibold mb-2 flex items-center"><div className="flex flex-col justify-center items-center"><div className={`transform transition-transform duration-700 ${loaded?"translate-y-0 opacity-100":"-translate-y-20 opacity-0"}`}> <MdLocationOn size={40} className="text-green-400" />    </div><FaRoad size={40} className="text-gray-700 " /></div>Tripzy</h1>
            <p className="text-2xl font-medium mb-5 italic">Every Journey Counts...</p>
            <button className="p-3 bg-green-400  font-medium text-lg rounded-lg mb-3 " onClick={move} >Get Started</button>
            </div>
            


        </div>

    )

}
export default Main;