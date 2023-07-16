import Navbar from "../components/Navbar";
import { upcoming } from "../data/upcoming";
import FindMoreBtn from "../components/FindMoreBtn";

/* Sort projects descending after year and number, with priority to year */
let orderedUpcoming = [...upcoming];
orderedUpcoming.sort(
  (a, b) => a.date.start.year - b.date.start.year 
            || a.date.start.month - b.date.start.month 
            || a.date.start.day - b.date.start.day
);

export default function Upcoming() {
  return (
    <>
      <Navbar title="Upcoming" />

      <div>
        <ul className="text-blue mb-24">
          { 
            orderedUpcoming.map(entry => (
              <li key={entry.id.toString()} className="mb-8">
                <div className="font-bold">
                  <div className="">
                    { 
                      `${
                        entry.date.start.year
                      }/${
                        entry.date.start.month.toString().padStart(2, "0")
                      }/${
                        entry.date.start.day.toString().padStart(2, "0")
                      }` 
                    }
                    { 
                      entry.date.oneday 
                      ? "" 
                      : `－${
                        entry.date.end.year
                      }/${
                        entry.date.end.month.toString().padStart(2, "0")
                      }/${
                        entry.date.end.day.toString().padStart(2, "0")
                      }` 
                    }
                    , { entry.location }
                  </div>
                </div>
                <div className="text-left text-3xl font-bold list-item">
                  { entry.title }
                </div>
                <div className="text-xl">
                  { entry.desc }
                </div>
                { entry.link
                  ? <FindMoreBtn href={ entry.link }/>
                  : <></>
                }
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
            ))
          }
        </ul>
      </div>
    </>
  )
}