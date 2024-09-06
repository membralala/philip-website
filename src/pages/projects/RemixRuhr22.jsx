import FindMoreBtn from "../../components/FindMoreBtn";

export default function RemixRuhr22() {
  return(
    <>
      <div>
        <div className="mb-12">
          <h3 className="text-red text-3xl font-bold mb-2">REMIX.ruhr 2022</h3>
        </div>
        <div className="text-blue text-content">
          <p className="mb-4">
            In 2022 for the third time Philip and a team of students participated in the REMIX.ruhr contest.
            They provided a func remix of the EDM track <span className="italic">Follow Me</span> by producer 
            Topic and placed in the top 30 group. 
          </p>
          <p className="mb-4">
            <FindMoreBtn href="https://2022.remix.ruhr" />
          </p>
        </div>
      </div>
    </>
  )
}