import Navbar from './Navbar';
import { Outlet } from "react-router-dom";
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    if (window.location.pathname === "/") window.location.href = "/about";
  });

  const closePreview = () => {
    document.getElementById("preview-overlay").classList.add("hidden");
    document.getElementById("preview-image").src = ""; 
  }

  return (
    <>
      <div 
        id="preview-overlay" 
        className="hidden bg-light bg-opacity-50 backdrop-blur-md fixed w-screen h-screen z-10 cursor-zoom-out"
        onClick={(event) => {closePreview(event.target)}}>
          <img id="preview-image" src="" alt="" className="relative w-[95%] h-[95%] object-contain top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
      </div>
      
      <div className="pt-12 overflow-x-hidden">
        <div className="relative right-0 left-0 mr-auto ml-auto w-[95%] max-w-[800px] sm:w-3/4 lg:w-1/2 h-full">
          <Navbar />

          <div className="font-jets text-sm hyphens text-blue font-extralight
          leading-relaxed">
            <Outlet />
          </div>

          <footer className="font-anom text-sm text-blue text-center relative w-full bottom-12 mt-40">
            All rights reserved. contact: <a href="mailto:popien.philip@gmail.com" className="underline hover:text-red italic">popien.philip@gmail.com</a>
          </footer>
        </div>
      </div>
    </>

  );
}