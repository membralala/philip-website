import AB01 from "../../images/AB_01.jpg"; 
import AB02 from "../../images/AB_02.jpg"; 
import AB03 from "../../images/AB_03.jpg"; 
import AB04 from "../../images/AB_04.jpg"; 
import AB05 from "../../images/AB_05.jpg"; 
import AB06 from "../../images/AB_06.jpg"; 
import AB07 from "../../images/AB_07.jpg"; 
import AB08 from "../../images/AB_08.jpg"; 
import ImgPrev from "../../components/ImgPrev";


export default function AliceBob() {
  return (
    <div>
      <div className="mb-12" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe src="https://player.vimeo.com/video/533932521?h=6eb1c32dab&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0" allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          title="Philip Popien - Alice &amp;amp; Bob (2020)">
        </iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>

      <div>
        <div className="mb-12">
          <h3 className="text-red text-3xl font-bold mb-2">Alice & Bob (2020)</h3>
          <p className="text-red leading-normal">Piano, Fixed Media Electronics (Stereo), 2-Channel Video</p>
          <p className="text-red leading-normal">Performed by: <a href="/" className="italic hover:text-blue underline font-medium">Mirela Zhulali</a></p>
        </div>
        <div className="text-blue text-content">
          <p className="mb-4"><span className="italic">Alice & Bob</span> is
            a multimedial composition for player piano and
            piano player, fixed media electronic and 2-channel-video. It is about
            the existential crisis of an A.I., that mimics human attributes and
            therefore questions its sense of live in a human manner. It finally
            decides to 'regress' to its mechanical roots.
          </p> 
          <p className="mb-4">
            The audiovisual composition was realised with a wide span of software
            including Premiere, After Effects, Cinema 4D and Processing for the video,
            Ableton Live and Max/Msp for fixed media music and Python code for the piano
            composition.
          </p>
          <p className="mb-4"><span className="italic">Alice & Bob</span> is the first
            composition of a series named <span className="text-red italic">The Progress Report</span>.
          </p>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-6 gap-1">
        <ImgPrev src={AB01} className="col-span-6"/>
        <ImgPrev src={AB05} className="col-span-6"/>
        <ImgPrev src={AB06} className="col-span-2"/>
        <ImgPrev src={AB08} className="col-span-2"/>
        <ImgPrev src={AB07} className="col-span-2"/>
        <ImgPrev src={AB04} className="col-span-6"/>
        <ImgPrev src={AB02} className="col-span-3"/>
        <ImgPrev src={AB03} className="col-span-3"/>
      </div>
    </div>
  )
};