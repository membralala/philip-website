import Navbar from "../components/Navbar";
import { events } from "../data/events";
import FindMoreBtn from "../components/FindMoreBtn";

/* Sort projects descending after year and number, with priority to year */
let orderedEvents = [...events];
orderedEvents.sort(
  (a, b) => a.date.start.year - b.date.start.year 
            || a.date.start.month - b.date.start.month 
            || a.date.start.day - b.date.start.day
);

const isPastEvent = (event) => {
  const date = new Date();
  const eventDate = event.date.oneday ? event.date.start : event.date.end;
  return date.getFullYear() > eventDate.year || 
    (date.getFullYear() === eventDate.year && date.getMonth() + 1 > eventDate.month) ||
    (date.getFullYear() === eventDate.year && date.getMonth() + 1 === eventDate.month && date.getDate() > eventDate.day)
}


export default function Events() {
  let upcomingEvents = orderedEvents.filter((event) => {return !isPastEvent(event)});
  let pastEvents = orderedEvents.filter(isPastEvent).reverse();
  return (
    <>
      <Navbar title="Events" />
      <div>

        {/* List of upcoming events. */}
        <div className="text-xl font-anom border-b-[1px] border-black mb-2">Upcoming Events</div>
        <ul className="text-blue mb-24">
          { 
            upcomingEvents.length > 0 ?
            upcomingEvents.map(entry => (
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
            : <div className="italic">Currently no events.</div>
          }
        </ul>

        {/* Table of past events. Display only date, title and venue. */}
        <div className="text-xl font-anom border-b-[1px] border-black mb-2">Past Events</div>
        <table className="text-blue mb-24 w-full text-sm">
          <tbody>
            { 
              pastEvents.length > 0 ?
              pastEvents.map(entry => (
                <tr key={entry.id.toString()} className=" align-top">
                  <td className="w-1/5">
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
                      : ` － ${
                        entry.date.end.year
                      }/${
                        entry.date.end.month.toString().padStart(2, "0")
                      }/${
                        entry.date.end.day.toString().padStart(2, "0")
                      }` 
                    }
                  </td>
                  <td className="text-left font-bold">
                    { entry.title }
                  </td>
                  <td>
                    { entry.location }
                  </td>
                </tr>
              ))
              : <div className="italic">Currently no events.</div>
            }
          </tbody>
        </table>
      </div>
    </>
  )
}