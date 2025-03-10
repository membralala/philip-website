import ImgPrev from "../../components/ImgPrev";
import ExtLink from "../../components/ExtLink";


export default function Identity() {
  return (
    <div>
      <div className="mb-12" style={{ padding: "80.00% 0 0 0", position: "relative" }}>
        <iframe src="https://player.vimeo.com/video/534356503?h=5d0a1ae2eb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;title=0&amp;app_id=58479"
          allowFullScreen frameBorder="0"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          title="Anastasija Delidova & Philip Popien - identity (2018)">
        </iframe>
      </div>

      <div>
        <div className="mb-12">
          <h3 className="text-red font-bold text-3xl mb-2">identity (2018)</h3>
          <p className="text-red text-md leading-normal">Fixed Media Electronics (2-Channel), 1-Channel Video</p>
          <p className="text-red text-md leading-normal">Video by: <ExtLink to="https://atelierweb.site/mitglieder/anastasija-delidova/" className="italic hover:text-blue underline font-medium">Anastasija Delidova</ExtLink></p>
        </div>
        <div className="text-blue text-content">
          <p className="mb-2">
            Headphones are highly recommended. 
          </p>
          <p className="mb-4">
            <span className="italic">identity</span> is a short audio-visual piece,
            which was originally presented as an installation with five 
            chairs of the same type placed as a pendant to those shown in the 
            film. It tries to catch a quite vulnerable and emotional moment of 
            disorientation of a human being in a complex world, where the girl 
            in the video seems to represent a "mirror of soul" of the viewer. 
          </p>
          <p className="mb-4">
            
          </p>
          <p className="mb-4">
            <span className="italic">identity</span> is the third composition of a series
            named <span className="text-red italic">living structures</span>.
          </p>

        </div>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-1">
        <ImgPrev src={"./ID03.webp"}/>
        <ImgPrev src={"./ID04.webp"}/>
        <ImgPrev src={"./ID01.webp"} className="col-span-2"/>
        <ImgPrev src={"./ID02.webp"} className="col-span-2"/>
      </div>
    </div>
  )
}