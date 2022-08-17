import { ChevronRight, ChevronLeft } from "react-feather";
import { Outlet, Link, useNavigate} from "react-router-dom";
import { useEffect } from "react";

export default function Works() {
  const navigate = useNavigate();
  // A dirty redirect
  useEffect(() => {
    if (window.location.pathname === "/works") navigate("/works/alice-and-bob");
  })

  const works = [
    "/works/schmutz",
    "/works/alice-and-bob", 
    "/works/dunkler-wald",
    "/works/identity",
    "/works/organic-patterns",
    "/works/secret-window",
  ];

  const prevWork = () => {
    const currentWorkIndex = works.indexOf((window.location.pathname));
    if (currentWorkIndex === -1) return; 
    const url = works[currentWorkIndex > 0?currentWorkIndex - 1:works.length - 1];
    navigate(url);
  };

  const nextWork = () => {
    const currentWorkIndex = works.indexOf((window.location.pathname));
    if (currentWorkIndex === -1) return; 
    const url = works[(currentWorkIndex + 1) % works.length];
    navigate(url);
  };

  return (
    <>
      {works.indexOf(window.location.pathname)!==-1?
      <>
        <button id="btn-prev-work" onClick={prevWork} className="hover:text-red fixed top-auto bottom-auto left-10">
          <ChevronLeft size={32}/> 
        </button>
        <button id="btn-next-work" onClick={nextWork} className="hover:text-red fixed top-auto bottom-auto right-10">
          <ChevronRight size={32}/> 
        </button>
        <div id="works-content">
          <Outlet />
        </div>
      </>
      : <></>
      }
    </>
  )
}