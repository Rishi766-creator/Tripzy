import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from './expo/Main.js';
import Home from './expo/Home.js';
import Footer from './expo/Footer.js';
import Trip from './expo/Trip.js';
import Login from './expo/Login.js';
import Signup from './expo/Signup.js';
import Track from './expo/Track.js';
import Stat from './expo/Stat.js';
import Reward from './expo/Reward.js';
import User from './expo/User.js';
const App=()=>{
  return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Main />}></Route>
    <Route path='/Home' element={<Home />}></Route>
    <Route path='/Footer' element={<Footer />}></Route>
    <Route path='/Trip' element={<Trip />}></Route>
    <Route path='/Login' element={<Login />}></Route>
    <Route path='/Signup' element={<Signup />}></Route>
    <Route path='/Track' element={<Track />}></Route>
    <Route path='/Stat' element={<Stat />}></Route>
    <Route path='/Reward' element={<Reward />}></Route>
    <Route path='/User'element={<User />}></Route>
  </Routes>
  </BrowserRouter>
  )
}
export default App;