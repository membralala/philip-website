import { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";
import { ChevronLeft, ChevronRight } from "react-feather";

/* Sort projects descending after year and number, with priority to year */
let orderedProjects = [...projects];
orderedProjects.sort((a, b) => a.year - b.year || a.number - b.number).reverse();



export function Projects() {
  return (
    <>
      <Navbar title="Projects" />
      <Outlet />
    </>
  )
}


export function ProjectsList() {
  const [projectsSel, setProjectsSel] = useState(orderedProjects);
  let tags = [...new Set(orderedProjects.map((elem) => elem.tags).flat())].sort();
  const [tagsSel, setTagsSel] = useState([]);

  let years = projectsSel.map((elem) => elem.year);
  years = [...new Set(years)];

  useEffect(() => {
    // If no tag is selected, render all projects.
    if (tagsSel.length === 0) {
      setProjectsSel(orderedProjects);
      return; 
    }; 

    // Render all projects, that contain all selected tags. 
    const projectsWithTags = orderedProjects.filter(proj => {
        return tagsSel.every((t1) => {
          return proj.tags.filter((t2) => t1 === t2).length > 0;
        });
    });
    setProjectsSel(projectsWithTags);
  }, [tagsSel])

  const tagIsActive = (tag) => {
    return projectsSel.map(elem => elem.tags).flat().indexOf(tag) !== -1
  }

  return (
    <>
      <div id="tag-filters" className="mb-4 relative -top-16">
        {
          tags.map((tag) => (
            <button
              key={tag}
              className={`inline-block mr-2 px-2 my-1 tracking-tighter text-white text-sm rounded-full
              ${tagIsActive(tag)?" bg-blue":" bg-stone-500"}`}              
              onClick={(event) => {
                if (event.target.getAttribute("data-toggle-state") === "true") {
                  setTagsSel([...tagsSel.filter(x => x !== tag)]);
                  event.target.setAttribute("data-toggle-state", "false");
                  event.target.classList.remove("bg-red");
                  event.target.classList.add(`${tagIsActive(tag)?"bg-blue":"bg-stone-500"}`); 
                }
                else {
                  setTagsSel([...tagsSel, tag]);
                  event.target.setAttribute("data-toggle-state", "true");
                  event.target.classList.remove(`${tagIsActive(tag)?"bg-blue":"bg-stone-500"}`); 
                  event.target.classList.add("bg-red");
                } 
              }}
              data-toggle-state={false}
              disabled={!tagIsActive(tag)}
            >
              {tag}
            </button>
          ))
        }
      </div>
      <ul>
        {
          years.map((year) => (
            <ProjectsYearSection year={year} projectsSel={projectsSel} key={year.toString()} />
          ))
        }
      </ul>
    </>
  )
}

export function ProjectsDetail({element}) {
  const { component } = element;
  const navigate = useNavigate();

  const nextProject = () => {
    const currentProjectIndex = orderedProjects.indexOf(element);
    if (currentProjectIndex === -1) return;
    const prevIndex = currentProjectIndex > 0 ? currentProjectIndex - 1 : orderedProjects.length - 1
    const url = `/projects/${orderedProjects[prevIndex].slug}`;
    console.log(url)
    navigate(url);
  };

  const prevProject = () => {
    const currentProjectIndex = orderedProjects.indexOf(element);
    if (currentProjectIndex === -1) return;
    const nextIndex = (currentProjectIndex + 1) % orderedProjects.length
    const url = `/projects/${orderedProjects[nextIndex].slug}`;
    navigate(url);
  };

  return (
    <>
      <button id="btn-prev-work" onClick={nextProject} className="hover:text-red fixed top-auto bottom-auto left-10 z-10">
        <ChevronLeft size={32} />
      </button>
      <button id="btn-next-work" onClick={prevProject} className="hover:text-red fixed top-auto bottom-auto right-10 z-10">
        <ChevronRight size={32} />
      </button>
      {component}
      <div className="mb-4 mt-14">
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

function ProjectsYearSection({ year, projectsSel }) {
  return (
    <>
      <li>
        <div className="text-xl font-anom border-b-[1px] border-black">{year}</div>
        <ul className="text-blue mb-24">
          {
            projectsSel
              .filter((elem) => elem.year === year)
              .map((elem) => (
                <ProjectsListEntry entry={elem} key={elem.id.toString()} />
              ))
          }
        </ul>
      </li>
    </>
  )
}

function ProjectsListEntry({ entry }) {
  return (
    <>
      <li className="mb-8">
        <Link to={entry.slug} className="block hover:text-red mt-2 cursor-pointer">
          <div className="text-3xl text-left font-bold list-item">{entry.title}</div>
          <div className="text-xl">{entry.desc}</div>
        </Link>
        <div className="">
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

