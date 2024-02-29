import "./styles/Product.css"
import product_landing from "../assets/product_display.png"
import product_landing_mo from "../assets/product_display_mo.svg"
function ProductDisplay() {
  return (
    <div className="product-wrapper">
      <div className="display-wrapper">
        <img src={product_landing} alt="product" className="display-img"/>
        <img src={product_landing_mo} className="display-img-mobile"/>
      </div>
    </div>
  )
}

export default ProductDisplay