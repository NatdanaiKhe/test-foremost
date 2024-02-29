import "./styles/Buy.css";
import buy_text from "../assets/buy_text.svg";
import lazada_img from "../assets/lazada.svg";
import shopee_img from "../assets/shopee.svg";
import jd_img from "../assets/jd.svg";
import bigc_img from "../assets/bigc.svg";
import lotus_img from "../assets/lotus.svg";
import makro_img from "../assets/makro.svg";
import tops_img from "../assets/tops.svg";
// import coffee_splash from "../assets/coffee_splash.svg";

function BuyDetail() {
  return (
    <>
      <div className="buy-wrapper">
        <div className="buy-header">
          <img src={buy_text} />
          <button className="buy-button" onClick={() => { location.href="#" }}>คลิกเลย!</button>
        </div>
        <div className="market-group">
          <a href="#" className="market-group-items">
            <img className="market-img" src={lazada_img} alt="lazada" />
          </a>
          <a href="#" className="market-group-items">
            <img className="market-img" src={shopee_img} alt="shopee" />
          </a>
          <a href="#" className="market-group-items">
            <img className="market-img" src={jd_img} alt="jd" />
          </a>
          <a href="#" className="market-group-items">
            <img className="market-img" src={bigc_img} alt="bigc" />
          </a>
          <a href="#" className="market-group-items">
            <img className="market-img" src={makro_img} alt="makro" />
          </a>
          <a href="#" className="market-group-items">
            <img className="market-img" src={lotus_img} alt="lotus" />
          </a>
          <a href="#" className="market-group-items">
            <img className="market-img" src={tops_img} alt="tops" />
          </a>
        </div>
      </div>
    </>
  )
}

export default BuyDetail