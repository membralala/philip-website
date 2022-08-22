import FindMoreBtn from "../../components/FindMoreBtn";

export default function PatchingAlice() {
  return(
    <>
      <div>
        <div className="mb-12">
          <h3 className="text-red text-3xl font-bold mb-2">Patching Alice</h3>
        </div>
        <div className="text-blue text-content">
          <p className="mb-4">
            In 2021 Philip made a course about modular synthesis for young musicans 
            with an instrumental background as well as for musical interested 
            pupil with a dedication for physics and mathematics. They worked 
            on basic concepts of synthesis and learned about signal paths in 
            modular systems. As a conceptual constain, they focused on the story
            of Lewis Carrol's <span className="italic">Alice in Wonderland</span>.
            They developed a 20-minutes long musical journey, which introduces 
            the world of Alice. Due to Covid 19 restrictions the concert had to be 
            an online stream format. 
          </p>
          <p className="mb-4">
            <FindMoreBtn href="https://www.youtube.com/watch?v=wmREweaOiO0" />
          </p>
        </div>
      </div>
    </>
  )
}