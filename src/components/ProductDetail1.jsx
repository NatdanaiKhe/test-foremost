import "./styles/Product.css";
import detail1 from "../assets/detail1.svg";
import milk_splash from "../assets/Milk_Coff_Splash.png";
import detail1_mo from "../assets/detail1_mo.png";

function ProductDetail1() {
  return (
    <div className="detail1-wrapper">
      <div className="detail1-mobile">
        <img src={detail1_mo} />
      </div>
      <div className="detail1-img-wrapper">
        <img src={detail1} className="detail1_img" />
      </div>
      <div className="splash-wrapper">
        <img src={milk_splash} className="splash-img" />
      </div>
    </div>
  );
}

export default ProductDetail1;
