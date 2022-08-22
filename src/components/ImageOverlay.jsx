export default function ImageOverlay() {
  const closePreview = () => {
    document.getElementById("preview-overlay").classList.add("hidden");
    document.getElementById("preview-image").src = "";
  }

  return (
    <div
      id="preview-overlay"
      className="hidden bg-light bg-opacity-50 backdrop-blur-md fixed w-screen h-screen z-20 cursor-zoom-out"
      onClick={(event) => { closePreview(event.target) }}>
      <img id="preview-image" src="" alt="" className="relative w-[95%] h-[95%] object-contain top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
    </div>
  )
}