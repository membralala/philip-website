import ImgPrev from "../../components/ImgPrev";
import ExtLink from "../../components/ExtLink";
import Arecibo_01 from "../../images/Arecibo_01.jpg";
import Arecibo_02 from "../../images/Arecibo_02.jpg";
import Arecibo_03 from "../../images/Arecibo_03.jpg";
import Arecibo_04 from "../../images/Arecibo_04.jpg";
import Arecibo_05 from "../../images/Arecibo_05.jpg";
import Arecibo_06 from "../../images/Arecibo_06.png";
import Arecibo_07 from "../../images/Arecibo_07.jpg";
import Arecibo_08 from "../../images/Arecibo_08.jpg";

export default function Arecibo() {
  return (
    <div>
      <div>
        <div className="mb-12" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe src="https://player.vimeo.com/video/883055326?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
            allowFullScreen frameBorder="0"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            title="Anastasija Delidova & Philip Popien - Arecibo P.S. (Trailer)">
          </iframe>
        </div>

        <div>
          <div className="mb-12">
            <h3 className="text-red font-bold text-3xl mb-2">Arecibo P.S. (2023)</h3>
            <p className="text-red text-md leading-normal">Fixed Media Electronics (Stereo), 5-Channel Video</p>
            <p className="text-red text-md leading-normal">Composition: Philip Popien</p>
            <p className="text-red text-md leading-normal">Video: <ExtLink to="https://atelierweb.site/mitglieder/anastasija-delidova/" className="italic hover:text-blue underline font-medium">Anastasija Delidova</ExtLink> & Philip Popien</p>
          </div>
          <div className="text-blue text-content">
            <p className="mb-4">
              In 1974 the arecibo message was sent as a binary interstellar broadcast radio 
              message describing humans and their place in the solar system. The message 
              consists of seven parts, where each part is represented by an image-like sign 
              that can be reconstructed from the binary sequence:
            </p>
            <ol className="list-decimal ml-12 mb-4">
              <li>Numbers</li>
              <li>Chemicals</li>
              <li>Nucleotides</li>
              <li>DNA</li>
              <li>Humans</li>
              <li>Planets</li>
              <li>Sender</li>
            </ol>
            <p className="mb-4">
              The multi-media composition <span className="italic">Arecibo P.S.</span> is a 
              reflection of interstellar communication. Therefore it cites the original binary
              sequence of the arecibo message as well as audio of the voyager recording while 
              envisioning a language of futuristic and extraterrestrial symbols.
            </p>
            <p className="mb-4"><span className="italic">Arecibo P.S.</span> was presented 
            at <span className="text-red italic">Visiodrom Wuppertal</span> in context of 
            the <span className="text-red italic">RAUMSTABEN</span> project in 2023. The
            premiere was followed by two more shows in 2024, featuring an alternative 4-channel mapping. 
            </p>
          </div>
        </div>
        <div className="mb-4 grid grid-cols-6 gap-1">
          <ImgPrev src={Arecibo_05} className="col-span-6"/>
          <ImgPrev src={Arecibo_01} className="col-span-3"/>
          <ImgPrev src={Arecibo_02} className="col-span-3"/>
          <ImgPrev src={Arecibo_03} className="col-span-3"/>
          <ImgPrev src={Arecibo_04} className="col-span-3"/>
          <ImgPrev src={Arecibo_06} className="col-span-6"/>
          <ImgPrev src={Arecibo_08} className="col-span-6"/>
          <ImgPrev src={Arecibo_07} className="col-span-6"/>
        </div>
      </div>
    </div>
  );
}