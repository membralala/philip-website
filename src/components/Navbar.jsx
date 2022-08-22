import { ChevronDown, ChevronUp } from 'react-feather';
import { Link } from 'react-router-dom';
import Title from './Title';

export default function Navbar({ title }) {
  const navElements = ["About", "Works", "Projects",];

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
      <Title title={title} />

      <nav id="navbar" className="font-anom text-blue text-2xl tracking-tighter text-center 
      border-b-2 border-red border-dashed
      sm:text-left sm:border-none
      relative left-0 right-0 ml-auto mr-auto mb-20
      ">
        <ul id="navbar-items"
          className="grid grid-cols-1 sm:flex overflow-y-hidden transition-all h-0 sm:h-auto">
          {navElements.map((elem) => (
            <li
              key={elem}
              data-nav-elem={elem}
              className={`inline sm:mr-8 sm:hover:text-red ${elem === title ? "underline" : ""}`}
            >
              <Link to={`/${elem.toLowerCase().replace(" ", "-")}`} className="inline-block" >
                {elem}</Link>
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