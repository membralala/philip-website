import FindMoreBtn from "../../components/FindMoreBtn";

export default function RemixRuhr23() {
  return(
    <>
      <div>
        <div className="mb-12">
          <h3 className="text-red text-3xl font-bold mb-2">REMIX.ruhr 2023</h3>
        </div>
        <div className="text-blue text-content">
          <p className="mb-4">
          Philip and his team member Eliseo Guarnieri participated in the REMIX.ruhr 2023 contest, 
          representing the public music school oberhausen. They placed first in a special 
          category for music schools as well as third in the free producer category, which 
          is open for any participants.
          </p>
          <p className="mb-4">
            <FindMoreBtn href="https://2023.remix.ruhr" />
          </p>
        </div>
      </div>
    </>
  )
}