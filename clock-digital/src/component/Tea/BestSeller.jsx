export default function BestSeller() {
  return (
    <section id="best-sellers">
      <div className="my_container">
        {/* Tiêu đề */}
        <div className="flex flex-col items-start md:items-center lg:items-start">
          <div>
            <h2 className="sub_heading">Khách hàng yêu thích</h2>
            <h1 className="main_heading">
              Những sản phẩm{" "}
              <span className="text-gradient">bán chạy nhất</span>
            </h1>
          </div>
          <p className="max-w-lg pr-16 mt-2 text-xs text-start md:text-center lg:text-start text-n-500">
            Khám phá những sản phẩm bán chạy nhất của chúng tôi, nơi chất lượng
            kết hợp hương vị trong mỗi tách trà. Hãy tham gia cùng hàng ngàn
            khách hàng hài lòng đã biến những hỗn hợp này thành sở thích của họ
            và nâng tầm thời gian uống trà của bạn ngay hôm nay!
          </p>
        </div>
        {/* Carousel sản phẩm */}
        <div className="lg:px-4 md:px-2 mt-9">
          {/* Sản phẩm 1 */}
          <div className="!flex flex-col lg:flex-row items-center justify-between">
            <div className="flex-1 best-product--left">
              <div className="best-product-info">
                <h3>Peppermint Velvet</h3>
                <p>
                  Mỗi ngụm mang đến sự pha trộn hài hòa giữa hương vị đậm đà và
                  hương thơm sảng khoái, khiến đây trở thành lựa chọn lý tưởng
                  cho cả nghi lễ buổi sáng và giờ nghỉ giải lao buổi chiều. Trải
                  nghiệm sự ấm áp dễ chịu và những phẩm chất tràn đầy năng lượng
                  đã khiến trà đen trở thành thức uống cổ điển được yêu thích
                  trong nhiều thế kỷ.
                </p>
              </div>
              {/* Thanh tiến trình */}
              <div className="benefit-bars">
                {/* Hàng trên */}
                <div>
                  <div className="flex-1 progressbar-item">
                    <h2 className="progress-title">
                      Tăng cường năng lượng và tập trung
                    </h2>
                  </div>
                  <div className="flex-1 progressbar-item">
                    <h2 className="progress-title">Giàu chất chống oxi hoá</h2>
                  </div>
                </div>
                {/* Hàng dưới */}
                <div>
                  <div className="flex-1 progressbar-item">
                    <h2 className="progress-title">Tăng cường trao đổi chất</h2>
                  </div>
                  <div className="flex-1 progressbar-item">
                    <h2 className="progress-title">
                      Thúc đẩy sự bình tĩnh và thư giãn
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="best-product--right"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
