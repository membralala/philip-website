import FindMoreBtn from "../../components/FindMoreBtn";

export default function DerPunkt() {
  return(
    <>
      <div>
        <div className="mb-12">
          <h3 className="text-red text-3xl font-bold mb-2">Der Punkt an dem das Bild an das Reale rührt</h3>
        </div>
        <div className="text-blue text-content">
          <p className="mb-4">
            As an multimedial and interdisciplinary exhibition at SANAA Essen, 
            NRW, <span className="italic">Der Punkt an dem das Bild an das Reale rührt</span> shows 
            photographies and installations, that are deeply connected to 
            the <span className="italic">Ruhrgebiet</span> and the coal industry
            in NRW. Together with <span className="italic">Celso Machado</span>,
            <span className="italic">Tim Pauli</span> and <span className="italic">Prof. Thomas Neuhaus</span>,
            Philip created a multichannel audio installation, combining 4 seperated 
            ideas to a slowly evolving stream of acoustic motion. 
          </p>
          <p className="mb-4">
            As part of the installation, there was a virtual version of the exhibition,
            created by <span className="italic">Max Füllbier</span>. The 
            composition fragments were embedded there as well, but not seperated 
            in time but in space this time. 
          </p>
          <p className="mb-4">
            <FindMoreBtn href="https://elkeseeger.de/lehre/lehrprojekte/der-punkt-an-dem-das-bild-an-das-reale-ruhrt" />
          </p>
        </div>
      </div>
    </>
  )
}