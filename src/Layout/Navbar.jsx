// import React from 'react';
import { Link, Outlet } from "react-router-dom";

function Navbar() {
    return (
    <>
        <nav className="bg-blue-400 text-black-500 py-4 px-6 flex items-center justify-between shadow-lg">
            <div className=" flex">
            <img className="w-12 h-12 rounded-lg" src="/src/assets/pico.png" alt="logo" />
                <h1 className="font-bold text-xl ml-3 mt-3">Damian David</h1>
            </div>
            <ul className="flex space-x-6">
                <li><Link to="/" className="hover:text-gray-300 font-bold">Home</Link></li>
                <li><Link to="about" className="hover:text-gray-300 font-bold">About</Link></li>
                <li><Link to="services" className="hover:text-gray-300 font-bold">Services</Link></li>
                <li><Link to="projects" className="hover:text-gray-300 font-bold">Projects</Link></li>
            </ul>
            <div className="relative"> 
               <input type="text" placeholder="Search..." 
                      className="px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring focus:ring-blue-400" />
               <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                   </svg>
               </button>
           </div>
        </nav>
        <Outlet />
    </>    
    );
}

export default Navbar;
