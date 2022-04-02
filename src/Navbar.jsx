import { Link } from 'react-router-dom';
import { ArrowDownCircle, ArrowUpCircle } from 'react-feather';

export default function Navbar(props) {

  const navElements = ["About", "Music", "Code", "Projects"];

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
    props.title !== "" ?
      <nav id="navbar" className="font-anom font-bold text-blue text-xl tracking-tighter text-center 
      border-b-2 border-red
      sm:text-left sm:border-none sm:w-4/5 
      relative left-0 right-0 ml-auto mr-auto mb-20
      ">
        <ul id="navbar-items" className="grid grid-cols-1 sm:flex overflow-y-hidden transition-all h-0">
          {navElements.map((elem) => (
            <li key={elem} className={`inline mr-4 ml-4 sm:hover:text-red ${elem === props.title ? "underline" : ""}`} >
              <Link to={`/${elem.toLowerCase()}`} >
                <span>{elem}</span></Link>
            </li>
          ))}
        </ul>
        <div className="relative right-0 left-0 mr-auto ml-auto -bottom-6">
          <button id="show-btn" onClick={hideMenu} className="bg-light text-red hidden sm:hidden">
            <ArrowUpCircle size={32} />
          </button>
          <button id="hide-btn" onClick={showMenu} className="bg-light text-red sm:hidden">
            <ArrowDownCircle size={32} />
          </button>
        </div>
      </nav> : <></>
  )
}