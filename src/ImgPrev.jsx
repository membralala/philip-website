export default function ImgPrev(props) {
  const previewImage = () => {
    const overlay = document.getElementById("preview-overlay");
    const image = document.getElementById("preview-image");
    const imageText = document.getElementById("preview-text");

    image.src = props.src;
    overlay.classList.remove("hidden");
  }

  return (
    <img src={props.src} alt="" className={`${props.className} hover-img`} onClick={ previewImage } />
  )
}