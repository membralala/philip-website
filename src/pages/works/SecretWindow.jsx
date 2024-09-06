import SW02 from "../../images/SW02.webp";
import SW01 from "../../images/SW01.webp";
import ImgPrev from "../../components/ImgPrev";

export default function SecretWindow() {
  return (
    <div>
      <div className="mb-12" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe src="https://player.vimeo.com/video/547579644?h=227436553c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          title="Philip Popien - Secret Window inside a fragile structured Mind (2017)">
        </iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>

      <div>
        <div className="mb-12">
          <h3 className="text-red font-bold text-3xl mb-2">Secret Window inside a fragile structured Mind (2017)</h3>
          <p className="text-red text-md leading-normal">Fixed Media Electronics (Stereo), 1-Channel Video</p>
        </div>
        <div className="text-blue text-content">
          <p className="mb-4"><span className="italic">Secret Window inside a fragile structured Mind</span> is
            is an audio-visual composition, which tries to visualize the complexity of a thought process. 
            On the technical side it uses generative structures and self-regulating sequencers and therefore
            plays with aesthetics of electronic dance music.
          </p> 
          <p className="mb-4">
            The music is made with Max/Msp and Ableton, video was generated with Cinema 4D and 
            edited with Premiere. 
          </p>
          <p className="mb-4"><span className="italic">Secret Window inside a fragile structured Mind</span> is the first
            composition of a series named <span className="text-red italic">living structures</span>.
          </p>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-1">
        <ImgPrev src={SW01}/>
        <ImgPrev src={SW02}/>
      </div>
    </div>
  )
}