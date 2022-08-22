import FindMoreBtn from "../../components/FindMoreBtn";

export default function RemixRuhr20() {
  return(
    <>
      <div>
        <div className="mb-12">
          <h3 className="text-red text-3xl font-bold mb-2">REMIX.ruhr 2020</h3>
        </div>
        <div className="text-blue text-content">
          <p className="mb-4">
            In 2020 Philip got the chance to make a remix project course for the 
            public music school in Oberhausen, NRW. With a small student class 
            he discussed the conceptual impact of remixes as well as remix 
            strategies. Finally they joined the REMIX.ruhr contest and submitted 
            a remix of Gentlemans song <span className="italic">Devam</span>. 
            Out of more than 300 submissions their song was rated as one of the
            best 30 remixes. 
          </p>
          <p className="mb-4">
            <FindMoreBtn href="https://2020.remix.ruhr" />
          </p>
        </div>
      </div>
    </>
  )
}