import "./styles/Product3.css";
import curves1 from "../assets/curves1.svg";
import curves2 from "../assets/curves2.svg";
import curves3 from "../assets/curves3.svg";
import curves4 from "../assets/curves4.svg";

const Card = ({ imgsrc, head, body }) => {
  return (
    <div className="card">
      <img src={imgsrc} />
      <div className="card-content">
        <h1>{head}</h1>
        <h2>{body}</h2>
      </div>
    </div>
  );
};
function ProductDetail3() {
  return (
    <div className="detail3-wrapper">
      <div className="detail3-content">
        <Card
          imgsrc={curves1}
          head="ขยับร่างกายระหว่างวัน"
          body="ลุกหรือเดินทุก 2 ชม. เพื่อให้ระบบไหลเวียนเลือดทำงานได้ดี"
        />
        <Card
          imgsrc={curves2}
          head="ฟังเพลงสบายๆ"
          body="หันมาฟังเพลงคลาสสิค หรือเสียงธรรมชาติ ช่วยให้ผ่อนคลายมากขึ้น"
        />
        <Card
          imgsrc={curves3}
          head="พักสายตาเป็นระยะ"
          body="เลี่ยงจากหน้าจอคอมฯ หยุดพักสายตาครั้งละ 15 นาที ทุก 2 ชม."
        />
        <Card
          imgsrc={curves4}
          head="เติมพลังความสดชื่นด้วยความหอมของกาแฟ"
          body="ดื่มด่ำความหอมและรสชาติกาแฟพร้อมประโยชน์ของนม ให้ความสดชื่นและได้ประโยชน์ทั้งวัน"
        />
      </div>
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/fXUQ9xT9_g4?si=F9JoEcVCXob7lTrQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  )
}

export default ProductDetail3