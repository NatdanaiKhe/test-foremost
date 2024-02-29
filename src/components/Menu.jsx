import "./styles/Menu.css"
import logo from "../assets/logo.webp"
function Menu() {
  return (
    <div className="nav-wrapper">
      <nav className="nav nav-top">
        <ul>
          <a>
            เกี่ยวกับ Foremost
          </a>
          <a>
            สำหรับเกษตรกรโคนม
          </a>
        </ul>
      </nav>
      <nav className="nav">
        <ul>
          <a className="menu-wrapper">
            <input id="menu-toggle" type="checkbox" />
            <label className="menu-button-container" htmlFor="menu-toggle" >
              <div className="menu-button"></div>
            </label>
            <ul className="menu">
              <a>
                หน้าแรก
              </a>
              <a>
                สินค้าทั้งหมด
              </a>
              <a>
                โปรโมชั่นและร้านค้า
              </a>
              <a>
                กิจกรรม
              </a>
              <a>
                แหล่งความรู้
              </a>
            </ul>
          </a>
          <a href="#" className="logo">
            <img src={logo} />
          </a>
          <a>
            หน้าแรก
          </a>
          <a>
            สินค้าทั้งหมด
          </a>
          <a>
            โปรโมชั่นและร้านค้า
          </a>
          <a>
            กิจกรรม
          </a>
          <a>
            แหล่งความรู้
          </a>
          <button className="btn-buy">สั่งซื้อออนไลน์</button>
          <button className="btn-cart"></button>
        </ul>
      </nav>
      
    </div>
  )
}

export default Menu