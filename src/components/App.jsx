import Footer from "./Footer";
import ImageOverlay from "./ImageOverlay";

export default function App({children}) {
  return (
    <>
      <ImageOverlay />
      <div id="main-app-layer" className="pt-12 overflow-x-hidden min-h-screen">
        <div className="relative right-0 left-0 mr-auto ml-auto w-[95%] max-w-[800px] sm:w-3/4 lg:w-1/2 h-full">
          <div className="font-jets hyphens text-blue font-extralight leading-relaxed">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}