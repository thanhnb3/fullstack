export default function Features() {
  return (
    <>
      <section id="features">
        <div className="my_container relative text-center">
          {/* Hàng 1 - 3 item */}
          <div className="flex flex-col items-center justify-center w-full gap-0 lg:gap-10 lg:flex-row">
            <div className="feature-card group bg-[url(/src/assets/tea/benefit_1.jpg)]">
              <div className="feature-filter"></div>
              <h3>Nguồn cung cao cấp</h3>
              <p>
                Chúng tôi tự hào sản xuất trà ngay tại Hoa Kỳ, sử dụng nguyên
                liệu chất lượng cao từ các trang trại địa phương.
              </p>
            </div>
            <div className="order-first bg-p-50 feature-card lg:order-none lg:bg-transparent">
              <h2 className="sub_heading">Why us?</h2>
              <h1 className="leading-loose text-center main_heading">
                Sự <span className="text-gradient">độc đáo</span> từ <br /> Tea
                Station
              </h1>
            </div>
            <div className="feature-card group bg-[url(/src/assets/tea/pic1.jpg)]">
              <div className="feature-filter"></div>
              <h3>Hương vị và pha chế độc đáo</h3>
              <p>
                Sản phẩm độc quyền của chúng tôi gồm các loại trà được với hương
                vị độc đáo, được chế tác để làm hài lòng mọi khẩu vị.
              </p>
            </div>
          </div>
          {/* Hàng 2 - 2 item */}
          <div className="flex flex-col items-center justify-center w-full gap-0 lg:-mt-20 lg:gap-10 lg:flex-row">
            <div className="feature-card group bg-[url(/src/assets/tea/benefit_3.jpg)]">
              <div className="feature-filter"></div>
              <h3>Tập trung vào sức khoẻ</h3>
              <p>
                Hãy thưởng thức các loại trà tốt cho sức khỏe của chúng tôi,
                được pha chế cẩn thận để hỗ trợ trí óc, cơ thể và tâm hồn của
                bạn.
              </p>
            </div>
            <div className="feature-card group bg-[url(/src/assets/tea/benefit_4.jpg)]">
              <div className="feature-filter"></div>
              <h3>Trải nghiệm cá nhân hoá</h3>
              <p>
                Trải nghiệm dịch vụ được cá nhân hóa với mọi đơn hàng, phù hợp
                với sở thích và nhu cầu trà riêng của bạn.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
