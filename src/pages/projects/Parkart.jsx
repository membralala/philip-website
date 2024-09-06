import FindMoreBtn from "../../components/FindMoreBtn";
import ImgPrev from "../../components/ImgPrev";
import Parkart_00 from "../../images/parkart_00.jpg"

export default function Parkart() {
  return (
    <>
      <div>
        <div className="mb-12">
          <ImgPrev src={Parkart_00} className="w-3/4 mx-auto"/>
        </div>
        <div className="mb-12">
          <h3 className="text-red text-3xl font-bold mb-2">ParkARt</h3>
        </div>
        <div className="text-blue text-content">
          <p className="mb-4">
          In 2023 Anastasija and Philip used their <span className="italic">adARt</span> app 
          to show a series of three digital artworks at the <span className="italic">peer2peer</span> festival 
          at Burg Hüllshof, Havixbeck. <span className="italic">adARt</span> was designed 
          to augment physical advertisements with art content, however at the location there 
          were no proper ads to use. Therefore the duo decided to install big AI generated 
          fake ads that show environment destructive products in order to augment them with 
          footage recorded from the original environment.
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