import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
export default function Signup(){
    const Navigate=useNavigate();
    const [error,setError]=useState();
    const [details,setDetails]=useState({
        name:"",
        age:"",
        gender:"",
        
        password:"",
        confirm:"",
    
    })
    
    function handleChange(e){
        const name=e.target.name;
        const value=e.target.value;
        setDetails({...details,[name]:value});
    }
    function check(e){
        e.preventDefault();
        if (!/^[A-Za-z]+$/.test(details.name)) {
           return setError("Name should only contain alphabets");

    }
    else if (details.age<18){
        return setError("User should be of 18 years or greater")
    }
    else if(details.password.length<6){
        return setError("Password should be of 6 characters or more");
    }
    else if(details.password!==details.confirm){
        return setError("Password should be same in both fields");
    }
    
    setError("");
    Navigate("/login");
}
    return(
        <>
            <div className="bg-gradient-to-r from-green-200 via-green-300 to-green-400 min-h-screen flex justify-center items-center">
                <form className="bg-white flex flex-col items-center justify-center w-full rounded-xl max-w-sm " onSubmit={check}>
                    <h1 className="mt-5 text-4xl mb-4">Signup</h1>
                    {error && <p className="text-red-500 text-lg">{error}</p>}
                    <input type="text" placeholder="Name" name="name" className="mb-4 p-2   focus:outline-none focus:ring-2 focus:ring-blue-400  transition-all duration-300" onChange={handleChange} />
                    <input type="number" placeholder="Age" name="age" className="mb-4 p-2   focus:outline-none focus:ring-2 focus:ring-blue-400  transition-all duration-300" onChange={handleChange}/>
                    <div className="flex flex-row gap-2 mb-4">
                    <label className="flex gap-1"> <input type="radio" name="gender" value="male" onChange={handleChange}/>Male</label>
                     <label className="flex gap-1"><input type="radio" name="gender" value="female" onChange={handleChange} />Female</label>
                    <label className="flex gap-1"><input type="radio" name="gender" value="other" onChange={handleChange} />Other</label>
                    </div>
                    <input type="password" placeholder="Password" name="password" onChange={handleChange} className="mb-6 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400  transition-all duration-300"/>
                    <input type="password" placeholder="Confirm Password"  name="confirm" onChange={handleChange} className="mb-4 p-2   focus:outline-none focus:ring-2 focus:ring-blue-400  transition-all duration-300"/>
                    
                     <button className="w-1/2 bg-green-400 mb-4 h-9">Signup</button>


                </form>
            </div>


        </>
    )
    
}