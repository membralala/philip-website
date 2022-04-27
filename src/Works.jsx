import { ChevronRight, ChevronLeft } from "react-feather";
import AliceBob from "./Works/AliceBob";
import Schmutz from "./Works/Schmutz";
import { useState } from "react";

export default function Works() {

  const works = [<AliceBob/ >, <Schmutz/ >];
  let [selector, setSelector] = useState(0);

  const nextWork = () => {
    setSelector((selector + 1) % works.length);
  };

  const prevWork = () => {
    if (selector > 0) {
      setSelector(selector - 1);
    } else {
      setSelector(works.length - 1);
    }
  }

  return (
    <>
      <button onClick={prevWork} className="hover:text-red fixed top-auto bottom-auto left-10">
        <ChevronLeft size={32}/> 
      </button>
      <button onClick={nextWork} className="hover:text-red fixed top-auto bottom-auto right-10">
        <ChevronRight size={32}/> 
      </button>
      <div id="works-content">
        {works[selector]}
      </div>



      {/* 

      <div className="mb-12" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe src="https://player.vimeo.com/video/547579644?h=227436553c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          title="Philip Popien - Secret Window inside a fragile structured Mind (2017)">
        </iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script> */}
    </>
  )
}