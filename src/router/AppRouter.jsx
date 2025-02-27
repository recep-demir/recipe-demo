import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '../components/navbar/Navbar'
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Footer from '../components/footer/Footer';
import Details from '../pages/details/Details';


const AppRouter = () => {
  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/details" element={<Details />} />
       
      </Routes>

      <Footer/>
    
 
    </BrowserRouter>


    
  )
}

export default AppRouter