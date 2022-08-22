import FindMoreBtn from "../../components/FindMoreBtn";

export default function DivePanorama() {
  return(
    <>
      <div>
        <div className="mb-12">
          <h3 className="text-red text-3xl font-bold mb-2">DIVE Festival 2019 － Panorama Mapping</h3>
        </div>
        <div className="text-blue text-content">
          <p className="mb-4">
            Apart from their fulldome projection for Florian Hartlieb's 
            composition <span className="italic">Dunkler Wald</span>, Anastasija Delidova 
            and Philip created a 4-channel panorama projection mapping for the 
            DIVE festival 2019 at Planetarium Bochum. 
          </p>
          <p className="mb-4">
            <FindMoreBtn href="https://vimeo.com/375290442" />
          </p>
        </div>
      </div>
    </>
  )
}