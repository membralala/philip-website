import FindMoreBtn from "../../components/FindMoreBtn";

export default function RemixRuhr21() {
  return (
    <>
      <div>
        <div className="mb-12">
          <h3 className="text-red text-3xl font-bold mb-2">REMIX.ruhr 2021</h3>
        </div>
        <div className="text-blue text-content">
          <p className="mb-4">
            In 2021 for the second time Philip and his student Eliseo Guarnieri
            participated for the REMIX.ruhr contest under the flag of the 
            public school in Oberhausen, NRW. As one of nearly 100 subscribers
            they managed to make the 4th place with their dark interpretation
            of Leslie Clio's song <span className="italic">ABCDEf*ck Off</span>.
          </p>
          <p className="mb-4">
            <FindMoreBtn href="https://2021.remix.ruhr" />
          </p>
        </div>
      </div>
    </>
  )
}