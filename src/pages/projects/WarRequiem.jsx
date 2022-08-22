import FindMoreBtn from "../../components/FindMoreBtn";

export default function WarRequiem() {
  return(
    <>
      <div>
        <div className="mb-12">
          <h3 className="text-red text-3xl font-bold mb-2">War Requiem － Interludes</h3>
        </div>
        <div className="text-blue text-content">
          <p className="mb-4">
            As a 100th years anniversary of Benjamin Britten's <span className="italic">
            War Requiem</span> the Folkwang University of Arts took the chance to 
            not just to stage the composition at Philharmonie Essen, but to also 
            reflect about the topic of war with students from different schools in Essen
            and Duisburg. Philip was part of a group of students, who worked with 
            pupil on electronic compositions, which were preseted as Interludes 
            between sections of the <span className="italic">War Requiem</span>.
          </p>
          <p className="mb-4">
            <FindMoreBtn href="https://www.folkwang-uni.de/home/musik/projekte/vollansicht/projects-detail/breaking-war-requiem/" />
          </p>
        </div>
      </div>
    </>
  )
}