export default function ImgPrev(props) {
  const images = require.context("../../public/images", true);

  const previewImage = () => {
    const overlay = document.getElementById("preview-overlay");
    const image = document.getElementById("preview-image");

    image.src = images(`${props.src}`);
    overlay.classList.remove("hidden");
  }

  return (
    <img src={images(`${props.src}`)} alt="" className={`${props.className} hover-img`} onClick={ previewImage } />
  )
}