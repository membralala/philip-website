import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'react-feather';
import { useState } from 'react';

export default function Navbar() {
  const navElements = ["About", "Works", "Code", "Projects"];
  const [title, setTitle] = useState("");
  
  const select = (element) => {
    setTitle(element.target.textContent); 
  }

  const hideMenu = () => {
    document.getElementById("navbar-items").classList.add("h-0");
    document.getElementById("navbar-items").classList.remove("h-40");
    document.getElementById("show-btn").classList.add("hidden");
    document.getElementById("hide-btn").classList.remove("hidden");
  };

  const showMenu = () => {
    document.getElementById("navbar-items").classList.remove("h-0");
    document.getElementById("navbar-items").classList.add("h-40");
    document.getElementById("show-btn").classList.remove("hidden");
    document.getElementById("hide-btn").classList.add("hidden");
  }

  return (
    <>
      <header className="relative flex w-full">
        <div className="text-red font-anom font-bold text-[46px] leading-[0.9em] w-[150px]
       border-r-[2px] border-black">Philip Popien</div>
        <div className="relative -top-1  w-full overflow-hidden h-24">
          <h1 id="header-title"
            className="relative text-black text-[100px] font-anom font-bold 
            leading-[0.9em]"
            style={{ letterSpacing: `-${title.length * 0.02}em` }}>
            {title}
          </h1>
        </div>
      </header>

      <nav id="navbar" className="font-anom text-blue text-2xl tracking-tighter text-center 
      border-b-2 border-red border-dashed
      sm:text-left sm:border-none
      relative left-0 right-0 ml-auto mr-auto mb-8 sm:mb-20
      ">
        <ul id="navbar-items" 
          className="grid grid-cols-1 sm:flex overflow-y-hidden transition-all h-0 sm:h-auto">
          {navElements.map((elem) => (
            <li
              key={elem}
              data-nav-elem={elem}
              className={`inline sm:mr-8 sm:hover:text-red ${elem === title ? "underline" : ""}`}
              onClick={(element) => select(element)} >
              <Link to={`/${elem.toLowerCase()}`} >
                <span>{elem}</span></Link>
            </li>
          ))}
        </ul>
        <div className="relative right-0 left-0 mr-auto ml-auto -bottom-6">
          <button id="show-btn" onClick={hideMenu} className="bg-red text-white rounded-full hidden sm:hidden">
            <ChevronUp size={32} className="relative -top-[1px]" />
          </button>
          <button id="hide-btn" onClick={showMenu} className="bg-red text-white rounded-full sm:hidden">
            <ChevronDown size={32} className="relative top-[2px]" />
          </button>
        </div>
      </nav>
    </>
  )
}