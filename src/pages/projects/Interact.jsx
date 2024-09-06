import FindMoreBtn from "../../components/FindMoreBtn"

export default function Interact() {
  return (
    <>
      <div>
        <div className="mb-12">
          <h3 className="text-red text-3xl font-bold mb-2">Inter_Act</h3>
        </div>
        <div className="text-blue text-content">
          <p className="mb-4">
            Apart from their artistic contribution Anastasija and Philip also gave a 
            TouchDesigner workshop at the <span className="italic">peer2peer</span> festival
            at Burg Hüllshof, Havixbeck. They focused on interactive installations and stage 
            elements and therefore provided an introduction to TouchDesigner as well as projection mapping
            to the participants.
          </p>
          <p className="mb-4">
          </p>
          <p className="mb-4">
            <FindMoreBtn href="https://p2p.medienwerk.nrw/de/programm/havixbeck"/>
          </p>
        </div>
      </div>
    </>
  )
}