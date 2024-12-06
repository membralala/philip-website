import ImgPrev from "../../components/ImgPrev";

export default function Schmutz() {
  return (
    <div>
      <div className="mb-12" style={{ padding: "50.00% 0 0 0", position: "relative" }}>
        <iframe src="https://player.vimeo.com/video/533998787?h=06f44f7e5a&title=0&byline=0&portrait=0&speed=0&badge=0&autopause=0&player_id=0&app_id=58479/embed"
          allowFullScreen frameBorder="0"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          title="Philip Popien - Schmutz">
        </iframe>
      </div>

      <div>
        <div className="mb-12">
          <h3 className="text-red font-bold text-3xl mb-2">Schmutz (2020)</h3>
          <p className="text-red text-md leading-normal">Fixed Media Electronics (4-Channel), 1-Channel Video</p>
        </div>
        <div className="text-blue text-content">
          <p className="mb-2">
            WARNING: This video contains fast flashing images!
          </p>
          <p className="mb-4">
            <span className="italic">Schmutz</span> is a dystopic reflection about
            pollution. If the dusty, alien-like particles are an environmental phaenomenon
            or if they are part of the character's imagination due to a 'mental pollution',
            is left open to the spectator.
          </p>
          <p className="mb-4">
            The video is made with Cinema 4D and Premiere, the music uses the software
            Ableton Live and Max/Msp. Compositional form is generated with Python.
          </p>
          <p className="mb-4">
            <span className="italic">Schmutz</span> is the second composition of a series
            named <span className="text-red italic">The Progress Report</span>.
          </p>

        </div>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-1">
        <ImgPrev src={"./S01.webp"} className="col-span-2"/>
        <ImgPrev src={"./S02.webp"}/>
        <ImgPrev src={"./S03.webp"}/>
        <ImgPrev src={"./S04.webp"}/>
        <ImgPrev src={"./S05.webp"}/>
        <ImgPrev src={"./S06.webp"} className="col-span-2"/>
      </div>
    </div>
  )
};