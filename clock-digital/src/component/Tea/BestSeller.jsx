import { useState, useEffect } from "react";
import product1 from "../../assets/tea/products/matcha1.jpg";
import product2 from "../../assets/tea/products/matcha2.jpg";
import product3 from "../../assets/tea/products/matcha3.jpg";
import product4 from "../../assets/tea/products/matcha4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// import css của swiper
import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    name: "Peppermint Velvet",
    desc: "Mỗi ngụm mang đến sự pha trộn hài hòa...",
    image: product1,
    benefits: [
      { title: "Tăng cường năng lượng và tập trung", percent: 90 },
      { title: "Giàu chất chống oxi hóa", percent: 85 },
      { title: "Tăng cường trao đổi chất", percent: 70 },
      { title: "Thúc đẩy sự bình tĩnh và thư giãn", percent: 95 },
    ],
  },
  {
    name: "Chamomile Bliss",
    desc: "Mỗi ngụm mang đến sự pha trộn hài hòa...",
    image: product2,
    benefits: [
      { title: "Giúp dễ ngủ và thư giãn", percent: 95 },
      { title: "Giảm căng thẳng", percent: 90 },
      { title: "Hỗ trợ hệ miễn dịch", percent: 75 },
      { title: "Giàu chất chống oxi hóa", percent: 85 },
    ],
  },
  {
    name: "Lemon Ginger Zest",
    desc: "Mỗi ngụm mang đến sự pha trộn hài hòa...",
    image: product3,
    benefits: [
      { title: "Tăng cường hệ tiêu hóa", percent: 88 },
      { title: "Giúp thanh lọc cơ thể", percent: 92 },
      { title: "Tăng sức đề kháng", percent: 85 },
      { title: "Giàu vitamin C", percent: 80 },
    ],
  },
  {
    name: "Mystic Earl Grey",
    desc: "Mỗi ngụm mang đến sự pha trộn hài hòa...",
    image: product4,
    benefits: [
      { title: "Giúp tinh thần sảng khoái", percent: 90 },
      { title: "Cải thiện tuần hoàn máu", percent: 78 },
      { title: "Tăng khả năng tập trung", percent: 85 },
      { title: "Chống oxi hóa mạnh", percent: 88 },
    ],
  },
];

function ProgressBar({ title, percent, active }) {
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    if (active) {
      setWidth("0%"); // reset trước
      const timer = setTimeout(() => setWidth(`${percent}%`), 100); // animate
      return () => clearTimeout(timer);
    } else {
      setWidth("0%");
    }
  }, [active, percent]);

  return (
    <div className="mb-3">
      <h2 className="text-sm font-semibold text-n-600 mb-1">{title}</h2>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="h-2 rounded-full bg-green-500 transition-all duration-1000 ease-out"
          style={{ width }}
        ></div>
      </div>
    </div>
  );
}

export default function BestSeller() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="best-sellers">
      <div className="my_container">
        {/* Tiêu đề */}
        <div className="flex flex-col items-start md:items-center lg:items-start">
          <div>
            <h2 className="sub_heading">Khách hàng yêu thích</h2>
            <h1 className="main_heading">
              Những sản phẩm{" "}
              <span className="text-gradient">bán chạy nhất</span>
            </h1>
          </div>
          <p className="max-w-lg pr-16 mt-2 text-xs text-start md:text-center lg:text-start text-n-500">
            Khám phá những sản phẩm bán chạy nhất của chúng tôi...
          </p>
        </div>

        {/* Carousel */}
        <div className="lg:px-4 md:px-2 mt-9">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {products.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="!flex flex-col lg:flex-row items-center justify-between">
                  {/* Bên trái: thông tin */}
                  <div className="flex-1 best-product--left">
                    <div className="best-product-info mb-4">
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <p className="text-n-500">{item.desc}</p>
                    </div>

                    {/* Thanh tiến trình */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.benefits.map((b, i) => (
                        <ProgressBar
                          key={i}
                          title={b.title}
                          percent={b.percent}
                          active={activeIndex === idx}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Bên phải: hình ảnh */}
                  <div className="best-product--right flex-1 flex justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-xl shadow-lg max-h-80 object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
