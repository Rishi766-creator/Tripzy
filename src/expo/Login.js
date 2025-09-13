import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login(){
    const navigate=useNavigate();
    function sign(){
        navigate('/Signup')

    }
    function login(){
        navigate('/Home')
    }
    return(
        <>
            <div className="bg-gradient-to-r from-green-200 via-green-300 to-green-400  min-h-screen flex justify-center items-center">
                <form className="bg-white flex flex-col items-center justify-center w-full rounded-xl max-w-sm ">
                    <h1 className="mt-5 text-4xl mb-4">Login</h1>
                    <input type="text" placeholder="Username" className="mb-4 p-2   focus:outline-none focus:ring-2 focus:ring-blue-400  transition-all duration-300"/>
                    <input type="password" placeholder="Password" className="mb-6 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400  transition-all duration-300"/>
                    <button className="border-1 border-solid p-2 bg-green-400 w-1/2 mb-2" onClick={login}>Login</button>
                    <p className="mb-2">Don't have an account?<button className="text-blue-500" onClick={sign}>Signup</button></p>

                </form>
            </div>


        </>
    )
    
}