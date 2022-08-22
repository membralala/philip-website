import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "react-feather";

import Navbar from "../components/Navbar";
import { works } from "../data/works";

/* Sort works descending after year and number, with priority to year */
let orderedWorks = [...works];
orderedWorks.sort((a, b) => a.year - b.year || a.number - b.number).reverse();


export function Works() {
  return (
    <>
      <Navbar title="Works" />
      <Outlet />
    </>
  )
}


export function WorksList() {
  const [worksSel, setWorksSel] = useState(orderedWorks);
  let tags = [...new Set(worksSel.map((elem) => elem.tags).flat())].sort();
  const [tagsSel, setTagsSel] = useState([]);

  /* Filter Years */
  let years = worksSel.map((elem) => elem.year);
  years = [...new Set(years)];

  useEffect(() => {
    // If no tag is selected, render all works.
    if (tagsSel.length === 0) {
      setWorksSel(orderedWorks);
      return;
    };

    // Render all works, that contain all selected tags. 
    const worksWithTags = orderedWorks.filter(work => {
      return tagsSel.every((t1) => {
        return work.tags.filter((t2) => t1 === t2).length > 0;
      });
    });
    setWorksSel(worksWithTags);
  }, [tagsSel])


  return (
    <>
      <div id="tag-filters" className="mb-4 relative -top-16">
        {
          tags.map((tag) => (
            <button
              key={tag}
              className="inline-block mr-2 px-2 my-1 tracking-tighter text-white text-sm bg-blue rounded-full"
              onClick={(event) => {
                if (event.target.getAttribute("data-toggle-state") === "true") {
                  setTagsSel([...tagsSel.filter(x => x !== tag)]);
                  event.target.setAttribute("data-toggle-state", "false");
                  event.target.classList.remove("bg-red");
                  event.target.classList.add("bg-blue");
                }
                else {
                  setTagsSel([...tagsSel, tag]);
                  event.target.setAttribute("data-toggle-state", "true");
                  event.target.classList.remove("bg-blue");
                  event.target.classList.add("bg-red");
                }
              }}
              data-toggle-state={false}
            >
              {tag}
            </button>
          ))
        }
      </div>
      <ul>
        {
          years.map((year) => (
            <WorksYearSection year={year} worksSel={worksSel} key={year.toString()} />
          ))
        }
      </ul>

    </>
  )
}

export function WorksDetail({ element }) {
  const navigate = useNavigate();

  const nextWork = () => {
    const currentWorkIndex = works.indexOf(element);
    if (currentWorkIndex === -1) return;
    const prevIndex = currentWorkIndex > 0 ? currentWorkIndex - 1 : works.length - 1
    const url = `/works/${works[prevIndex].slug}`;
    console.log(url)
    navigate(url);
  };

  const prevWork = () => {
    const currentWorkIndex = works.indexOf(element);
    if (currentWorkIndex === -1) return;
    const nextIndex = (currentWorkIndex + 1) % works.length
    const url = `/works/${works[nextIndex].slug}`;
    navigate(url);
  };

  return (
    <>
      <button id="btn-prev-work" onClick={prevWork} className="hover:text-red fixed top-auto bottom-auto left-10 z-10">
        <ChevronLeft size={32} />
      </button>
      <button id="btn-next-work" onClick={nextWork} className="hover:text-red fixed top-auto bottom-auto right-10 z-10">
        <ChevronRight size={32} />
      </button>
      {element.component}
      <div className="mb-4">
        <div className="inline-block mr-2">Tags:</div>
        {
          element.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block mr-2 px-2 my-1 tracking-tighter text-white text-sm bg-black rounded-full"
            >
              {tag}
            </span>
          ))}
      </div>
    </>
  )
}

function WorksYearSection({ year, worksSel }) {
  return (
    <>
      <li>
        <div className="text-xl font-anom border-b-[1px] border-black">{year}</div>
        <ul className="text-blue mb-24">
          {
            worksSel
              .filter((elem) => elem.year === year)
              .map((elem) => (
                <WorksListEntry entry={elem} key={elem.id.toString()} />
              ))
          }
        </ul>
      </li>
    </>
  )
}

function WorksListEntry({ entry }) {
  return (
    <>
      <li data-entry={entry.id} className="tranition-all">
        <Link to={entry.slug} className="block hover:text-red mt-2 cursor-pointer">
          <div className="text-3xl text-left font-bold list-item">{entry.title}</div>
          <div className="text-xl">{entry.desc}</div>
        </Link>
        <div className="mb-4">
          {
            entry.tags
              ? entry.tags.sort().map((elem) => (
                <span key={`tag-${entry.id}-${elem}`} className="inline-block mr-1 my-1 text-sm tracking-tighter text-black">
                  {entry.tags.indexOf(elem) !== entry.tags.length - 1 ? `${elem.toLowerCase()},` : elem.toLowerCase()}
                </span>
              )) : <></>
          }
        </div>
      </li>
    </>
  )
}