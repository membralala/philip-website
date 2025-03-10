import ImgPrev from "../../components/ImgPrev";

export default function Flora0() {
  return (
    <div>
      <div>
        <div className="mb-12">
          <ImgPrev src={"./flora0_2.webp"} className="w-3/4 mx-auto"/>
        </div>

        <div>
          <div className="mb-12">
            <h3 className="text-red font-bold text-3xl mb-2">flora[0] (2024)</h3>
            <p className="text-red text-md leading-normal">Installation & Performance</p>
            <p className="text-red text-md leading-normal">Flowers, Live Electronics (4-Channel), LEDs, 1-Channel Video</p>
          </div>
          <div className="text-blue text-content">
            <p className="mb-4"> 
              <span className="italic">flora[0]</span> investigates the relation of flowers 
              and plants to humans and their urban environment. On the one hand Philip is 
              interested in artistic interpretations of generative models with plant-similar 
              behaviour, on the other hand he tries to capture the ambivalence of wilderness 
              and cultivation of urban flora empirically.
            </p>
            <p className="mb-4">
              For <span className="italic">flora[0]</span> Philip developed a
              client-server application based on the OSC-protocol. On the
              client side a Max/Msp application requests new parameter states and controls
              custom instruments. A python server provides those parameter states based 
              on complex generative patterns. LEDs and video effects are programmed in TouchDesigner
              and synchronized with OSC. The setup is desigend to generate self-similar patterns,
              that never repeat in the exact same way. The installation is conceptually the 
              idle state of the performance setup. 
            </p>
            <p className="mb-4">
              <span className="italic">flora[0]</span> is a part of the composition project <span className="italic">Urban Biosphere Ruhr</span> and
              was founded by <span className="italic">Neue Künste Ruhr</span> and the ministry of culture and schience NRW.
            </p>
          </div>
        </div>
        <div className="mb-4 grid grid-cols-6 gap-1">
          <ImgPrev src={"./flora0_4.webp"} className="col-span-3"/>
          <ImgPrev src={"./flora0_3.webp"} className="col-span-3"/>
          <ImgPrev src={"./flora0_6.webp"} className="col-span-2"/>
          <ImgPrev src={"./flora0_5.webp"} className="col-span-2"/>
          <ImgPrev src={"./flora0_1.webp"} className="col-span-2"/>
          <ImgPrev src={"./flora0_7.webp"} className="col-span-6"/>
          <ImgPrev src={"./flora0_8.webp"} className="col-span-3"/>
          <ImgPrev src={"./flora0_9.webp"} className="col-span-3"/>
        </div>
      </div>
    </div>
  )
}