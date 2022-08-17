import DW00 from "../images/DW_00.jpg";
import DW01 from "../images/DW_01.jpg";
import DW02 from "../images/DW_02.jpg";
import DW03 from "../images/DW_03.jpg";
import DW04 from "../images/DW_04.jpg";
import DW05 from "../images/DW_05.jpg";
import DW06 from "../images/DW_06.jpg";

import ImgPrev from "../ImgPrev";

export default function DunklerWald() {
  return (
    <div>
      <img src={DW00} alt="" className="mb-12"/>
      <div>
        <div className="mb-12">
          <h3 className="text-red font-anom text-xl mb-2">Dunkler Wald (2019)</h3>
          <p className="text-red text-md leading-normal">Violin, Fixed Media Electronics (8-Channel), Fulldome Video</p>
          <p className="text-red text-md leading-normal">Composition: <a href="/" className="italic hover:text-blue underline font-medium">Florian Hartlieb</a></p>
          <p className="text-red text-md leading-normal">Performed by: <a href="/" className="italic hover:text-blue underline font-medium">Julia Brüssel</a></p>
          <p className="text-red text-md leading-normal">Video : <a href="/" className="italic hover:text-blue underline font-medium">Anastasija Delidova</a> & Philip Popien</p>
        </div>
        <div className="text-blue">
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
          presented during <a href="https://divefest.de/eindrucke-vom-dive-festival-2019/" target="_blank" rel="noopener noreferrer"
          className="italic hover:text-red underline font-medium">DIVE festival 2019</a> at <span className="text-red italic">Planetarium Bochum</span>.
          </p>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-3 gap-1">
        <ImgPrev src={DW01}/>
        <ImgPrev src={DW02}/>
        <ImgPrev src={DW03}/>
        <ImgPrev src={DW04}/>
        <ImgPrev src={DW05}/>
        <ImgPrev src={DW06}/>
      </div>
    </div>
  );
}