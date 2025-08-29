import { useState } from "react";
import imgMatcha from "../../assets/tea/product_1.jpg";
import imgWhitetea from "../../assets/tea/product_2.jpg";
import imgOLong from "../../assets/tea/product_3.jpg";
import imgBlackTea from "../../assets/tea/product_4.png";
import arrow from "../../assets/tea/right-arrow.svg";

const dataTabs = {
  matcha: {
    img: imgMatcha,
    h3: "Matcha Magic",
    h4: "Khám phá những lợi ích tiềm năng của vàng xanh từ Nhật Bản",
    pTop: "Sẵn sàng nâng cao sức khỏe của bạn? Hãy làm quen với matcha, loại bột màu xanh lá cây rực rỡ đang làm khuynh đảo thế giới chăm sóc sức khỏe. Chứa đầy chất chống oxy hóa và chất dinh dưỡng, matcha cung cấp nguồn năng lượng mạnh mẽ mà không gây bồn chồn, nhờ sự kết hợp độc đáo giữa caffeine và L-theanine.",
    pBot: "Loại trà này không chỉ tăng cường sự tập trung và trao đổi chất mà còn thêm hương vị thơm ngon cho sinh tố, đồ nướng và cà phê latte. Hãy đắm mình vào thế giới matcha và trải nghiệm cách siêu thực phẩm cổ xưa này có thể tiếp thêm sinh lực cho cơ thể và trí óc của bạn!",
    href: "Xem sản phẩm Matcha",
  },
  whitetea: {
    img: imgWhitetea,
    h3: "Tinh chất tinh tế từ trà trắng",
    h4: "Hành trình khám phá hương vị tinh khiết nhất từ thiên nhiên",
    pTop: "Trà trắng, được tôn sùng vì sự nhẹ nhàng và tinh tế của nó, được chế biến từ lá non và nụ của cây Camellia sinensis. Với hương hoa nhẹ nhàng và vị ngọt tự nhiên, loại trà này mang đến trải nghiệm nhẹ nhàng nhưng sảng khoái. Giàu chất chống oxy hóa và ít caffeine, trà trắng không chỉ làm hài lòng khẩu vị mà còn hỗ trợ sức khỏe, khiến nó trở thành lựa chọn hoàn hảo cho những khoảnh khắc thư giãn hoặc trẻ hóa. Khám phá vẻ đẹp thanh bình của trà trắng và nâng tầm nghi thức uống trà của bạn lên một tầm cao mới.",
    pBot: "",
    href: "Xem sản phẩm Trà Trắng",
  },
  olongtea: {
    img: imgOLong,
    h3: "Cuộc cách mạng trà ô long",
    h4: "Mở khóa bí mật của loại trà lành mạnh nhất từ ​​thiên nhiên",
    pTop: "Bạn có tò mò về bí quyết trường thọ và sống lâu không? Không cần tìm đâu xa, hãy tìm đến trà xanh! Thức uống cổ xưa này, được tôn sùng trong nhiều nền văn hóa trên thế giới, chứa đầy chất chống oxy hóa mạnh mẽ có thể thúc đẩy quá trình trao đổi chất, tăng cường chức năng não và thúc đẩy sức khỏe tim mạch.",
    pBot: "Với hương vị tinh tế và vô số lợi ích cho sức khỏe, trà xanh không chỉ là một thức uống mà còn là một lựa chọn về lối sống. Hãy tham gia cuộc cách mạng trà xanh và khám phá cách thức pha chế đơn giản này có thể biến đổi sức khỏe của bạn từng ngụm một!",
    href: "Xem sản phẩm Ô Long",
  },
  blacktea: {
    img: imgWhitetea,
    h3: "Đánh thức các giác quan của bạn cùng trà đen",
    h4: "Hương vị đậm đà truyền thống vượt thời gian",
    pTop: "Hãy thưởng thức hương vị đậm đà, mạnh mẽ của trà đen, được chế tác hoàn hảo cho khẩu vị sành điệu. Mỗi ngụm trà mang đến sự pha trộn hài hòa giữa hương vị sâu lắng và hương thơm sảng khoái, khiến đây trở thành lựa chọn lý tưởng cho cả nghi lễ buổi sáng và giờ nghỉ trưa. Trải nghiệm sự ấm áp dễ chịu và những phẩm chất tràn đầy năng lượng đã khiến trà đen trở thành thức uống cổ điển được yêu thích trong nhiều thế kỷ.",
    href: "Xem sản phẩm Trà Đen",
  },
};

export default function Product() {
  const [activeTab, setActiveTab] = useState("matcha");
  const [prevTab, setPrevTab] = useState(null);

  const handleTabClick = (key) => {
    if (key === activeTab) return;
    setPrevTab(activeTab);
    setActiveTab(key);
    // khớp thời gian với .fade-out (ví dụ 600ms)
    setTimeout(() => setPrevTab(null), 500);
  };

  return (
    <>
      <section id="products">
        <div className="my_container">
          {/* Heading */}
          <div className="mt-10">
            <h2 className="sub_heading">Tìm hiểu</h2>
            <h1 className="main_heading">
              Sản phẩm <span className="text-gradient">trà ngon</span>
            </h1>
          </div>
          {/* Tabs */}
          <div id="products-tabs">
            <ul className="flex justify-center items-center gap-4 md:gap-7 my-5 bg-p-100 py-7 px-2">
              <li className="tab-link" onClick={() => handleTabClick("matcha")}>
                Trà Matcha
              </li>
              <li className="text-n-500">|</li>
              <li
                className="tab-link"
                onClick={() => handleTabClick("whitetea")}
              >
                Trà Trắng
              </li>
              <li className="text-n-500">|</li>
              <li
                className="tab-link"
                onClick={() => handleTabClick("olongtea")}
              >
                Trà Ô Long
              </li>
              <li className="text-n-500">|</li>
              <li
                className="tab-link"
                onClick={() => handleTabClick("blacktea")}
              >
                Trà Đen
              </li>
            </ul>
            {/* Content area */}
            <div className="relative min-h-[800px] overflow-hidden">
              {/* OLD content: fade-out */}
              {prevTab && prevTab !== activeTab && (
                <div className="tabContainer absolute inset-0 z-0 fade-out">
                  <img
                    className="productImg"
                    src={dataTabs[prevTab].img}
                    alt={dataTabs[prevTab].h3}
                  />
                  <div>
                    <h3>{dataTabs[prevTab].h3}</h3>
                    <h4>{dataTabs[prevTab].h4}</h4>
                    <p>
                      {dataTabs[prevTab].pTop} <br />
                      {dataTabs[prevTab].pBot}
                    </p>
                    <button className="lg:py-3 lg:px-9">
                      <a className="btn" href="#">
                        {dataTabs[prevTab].href} <img src={arrow} />
                      </a>
                    </button>
                  </div>
                </div>
              )}

              {/* NEW content: slide-up (ép remount bằng key) */}
              <div
                key={activeTab}
                className="tabContainer absolute inset-0 z-10 slide-up"
              >
                <img
                  className="productImg"
                  src={dataTabs[activeTab].img}
                  alt={dataTabs[activeTab].h3}
                />
                <div>
                  <h3>{dataTabs[activeTab].h3}</h3>
                  <h4>{dataTabs[activeTab].h4}</h4>
                  <p>
                    {dataTabs[activeTab].pTop} <br />
                    {dataTabs[activeTab].pBot}
                  </p>
                  <button className="lg:py-3 lg:px-9">
                    <a className="btn" href="#">
                      {dataTabs[activeTab].href} <img src={arrow} />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
