import FindMoreBtn from "../../components/FindMoreBtn";

export default function AugmentedArt() {
  return (
    <>
      <div>
        <div className="mb-12">
          <h3 className="text-red text-3xl font-bold mb-2">Augmented Art Advertising</h3>
        </div>
        <div className="text-blue text-content">
          <p className="mb-4">
            <span className="italic">Augmented Art Advertising</span> is a an AR 
            concept to show art exhibitions in public places. It was initiated by 
            Anastasija Delidova as a digital utopia with the subversive goal to
            occupy the infrastructure established for advertisments and replace
            the ads with more meaningful content. Anastasija and Philip developed 
            the idea and decided to present it as an app with automated advertisment 
            detection. 
          </p>
          <p className="mb-4">
            As the concept was born, Anastasija and Philip as Kollektiv 42 found 
            coorporation partners in the Skulpturenmuseum Marl and the
            cityscaper GmbH from Aachen to develop the app <span className="italic">adARt</span>.
            cityscaper provided the know-how to develop the app, while Skulpturenmuseum Marl
            digitalized their collection of artworks and provided them as content 
            for the app. Anastasija, Philip and the museum organized the exhibition 
            <span className="italic">Erweiterte Welten － urbane Medienkunst in Marl</span>, 
            where they showed media art of young artists from NRW. The whole exhibition is 
            virtual and can be seen through the <span className="italic">adARt</span> app.
            As proposed it uses advertisments in public spaces in Marl as exhibition spaces. 
          </p>
          <p className="mb-4">
            As the project has also big theoretical impacts, Kollektiv 42 organize an 
            AR Symposium hosted by the Folkwang University of Arts at SANAA Essen, NRW.
            There a theoretical discourse about AR from a philosophical, artistic and 
            technical perspective will happen. 
          </p>
          <p className="mb-4">
            <FindMoreBtn href="https://www.augmented-art-advertising.com/" />
          </p>
        </div>
      </div>
    </>
  )
}