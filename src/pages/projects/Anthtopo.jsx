import ReadMoreBtn from "../../components/FindMoreBtn";

export default function Anthropo() {
  return (
    <>
      <div>
        <div className="mb-12">
          <h3 className="text-red text-3xl font-bold mb-2">Anthropozän － Planetarische Leitplanken</h3>
        </div>
        <div className="text-blue text-content">
          <p className="mb-4"><span className="italic">Anthropozän</span> was
            a fulldome sounddesign an projection study of composition classes of
            the Folkwang University of Arts and sounddesign classes of the
            Fachhochschule Dortmund. It used the technical possibilities of the
            Planetarium Bochum to create an immersive journey through different
            periods of humankind and to develop an idea about the sounds of the
            future. There were abstract interludes, which used the recordings
            of the more narrative parts created by the sounddesign students.
          </p>
          <p className="mb-4">
            Philip created an abstract fulldome video visualising the era of
            technology as a borderline between their endless possibilities and
            their destructive potential.
          </p>
          <p className="mb-4">
            <ReadMoreBtn href="https://www.folkwang-uni.de/home/musik/aktuell/vollanzeige/news-detail/anthropozaen-planetarische-leitplanken/" />
          </p>
        </div>
      </div>
    </>
  )
}