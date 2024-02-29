import "./styles/Product2.css";
import detail2 from "../assets/detail2.svg";
import detail2_mo from "../assets/detail2_mobile.svg";

function ProductDetail2() {
  return (
    <>
      <div className="detail2-wrapper">
        <img src={detail2} className="detail2" />
        <img src={detail2_mo} className="detail2-mobile" />
      </div>
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/Ox2sqRgPfqs?si=dY85tACyRyq--ptu"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  )
}

export default ProductDetail2