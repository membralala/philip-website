import Navbar from "../components/Navbar";
import ExtLink from "../components/ExtLink";
import ImgPrev from "../components/ImgPrev";
import artistImg from "../images/_artist.png";

export default function About() {
  return (
    <>
      <Navbar title="About" />
      <div className="mb-8 w-4/5 mx-auto">
        <ImgPrev src={artistImg} />
      </div>
      <p className="mb-4 text-content">
        Philip Popien is a german based composer and a creative coder with a deep interest in 
        generative, audio-visual arts. Born in 1995 he has studied composition 
        at <span className="font-medium">Folkwang University of Arts</span> with 
        a focus on electro-acoustic music as well as visual composition.
        Since 2021 he studies Computer Science 
        at <span className="font-medium">Technical University Dortmund</span>. 
      </p>
      <p className="mb-4 text-content">
        On the musical side Philip is influenced by electronic dance music on the one 
        hand and his curiosity towards generative structures an the other hand. Therefore 
        his music follows a minimalistic, pulse-based approach with self-similar rhythms 
        and slowly developing ambience. 
        Visually Philip tries to keep the narrative capabilities of the 'classic' cinematic film,
        but to treat video and audio as equal layers of time-based structures. Therefore he 
        apllies same compositional techniques on film and music, making them a unit, that 
        does not work without each other. 
      </p>
      <p className="mb-4 text-content">
        Together with media-artist <ExtLink to="https://atelierweb.site/mitglieder/anastasija-delidova/" className="italic hover:text-blue underline font-medium text-red text-md leading-normal">Anastasija Delidova</ExtLink>, 
        Philip Popien forms the 
        duo <span className="font-medium">Kol&shy;lek&shy;tiv 42</span>. 
        Since 2019 they realised a span of projects including 
        audio-visual installations, live-performances, projection mappings and fulldome videos.
      </p>
    </>
  )
}