import DW00 from "../../images/DW_00.webp";
import DW01 from "../../images/DW_01.webp";
import DW02 from "../../images/DW_02.webp";
import DW03 from "../../images/DW_03.webp";
import DW04 from "../../images/DW_04.webp";
import DW05 from "../../images/DW_05.webp";
import DW06 from "../../images/DW_06.webp";
import DW07 from "../../images/DW_07.webp";
import DW08 from "../../images/DW_08.webp";

import ImgPrev from "../../components/ImgPrev";
import ExtLink from "../../components/ExtLink";

export default function DunklerWald() {
  return (
    <div>
      <ImgPrev src={DW08} className="mb-12"/>
      <div>
        <div className="mb-12">
          <h3 className="text-red font-bold text-3xl mb-2">Dunkler Wald (2019)</h3>
          <p className="text-red text-md leading-normal">Violin, Fixed Media Electronics (8-Channel), Fulldome Video</p>
          <p className="text-red text-md leading-normal">Composition: <ExtLink to="http://www.florian-hartlieb.de/" className="underline hover:text-blue italic font-medium">Florian Hartlieb</ExtLink></p>
          <p className="text-red text-md leading-normal">Performed by: <ExtLink to="https://de.wikipedia.org/wiki/Julia_Br%C3%BCssel" className="italic hover:text-blue underline font-medium">Julia Brüssel</ExtLink></p>
          <p className="text-red text-md leading-normal">Video : <ExtLink to="https://atelierweb.site/mitglieder/anastasija-delidova/" className="italic hover:text-blue underline font-medium">Anastasija Delidova</ExtLink> & Philip Popien</p>
        </div>
        <div className="text-blue text-content">
          <p className="mb-4"><span className="italic">Dunkler Wald</span> is 
          an audiovisual dystopia in 4 scenes. Abstracted violin and natural 
          sounds create a three-dimensional sound space that represents a 
          synthetic forest. At the same time, violin and fulldome video 
          projection enter into this, become part of it, delineate and 
          oscillate between disorientation and synergetic connection.
          The result is an audiovisual dialogue between human intuition and 
          algorithmic accuracy that immerses listeners in a visual world of 
          sound, in which the boundaries between a synthetic and a natural 
          soundscape are fluid, thus that the question of the relation of man 
          to nature is inherent.
          </p>
          <p className="mb-4">
            The visual elements were realised using Premiere, After Effects, 
            Cinema 4D and Processing. Parts of the editing were automated with
            Python scripts.
          </p>
          <p className="mb-4"><span className="italic">Dunkler Wald</span> was 
          presented during <ExtLink to="https://divefest.de/eindrucke-vom-dive-festival-2019/"
          className="italic hover:text-red underline font-medium">DIVE festival 2019</ExtLink> at <span className="text-red italic">Planetarium Bochum</span>.
          </p>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-3 gap-1">
        <ImgPrev src={DW00} className="col-span-3"/>
        <ImgPrev src={DW01}/>
        <ImgPrev src={DW02}/>
        <ImgPrev src={DW03}/>
        <ImgPrev src={DW04}/>
        <ImgPrev src={DW05}/>
        <ImgPrev src={DW06}/>
        <ImgPrev src={DW07} className="col-span-3"/>
      </div>
    </div>
  );
}