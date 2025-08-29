import heroImg from "../../assets/tea/hero_img.png";
import arrow from "../../assets/tea/right-arrow.svg";
export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="h-screen max-h-[1100px] bg-gradient-to-t from-p-100 to-white overflow-y-clip"
      >
        <div className="my_container relative flex items-center justify-center w-full h-full xl:justify-start">
          {/* Hình */}
          <div className="absolute bottom-0 right-0 overflow-hidden z-0 md:-bottom-40 xl:top-1/2 xl:-translate-y-1/2 [mask-image:linear-gradient(to_left,transparent,black_10%)]">
            <img className="h-full" src={heroImg} alt="Hero IMG" />
          </div>
          {/* Nội dung */}
          <div className="flex flex-col justify-center items-center gap-4 z-10 md:gap-9 xl:items-start">
            <div>
              <h2 className="mb-2 text-xs font-semibold leading-none tracking-wider text-center uppercase font-inter md:text-sm xl:text-start ">
                Hơn{" "}
                <span className="text-xs text-gradient md:text-sm">
                  một trăm
                </span>{" "}
                đơn vị trà
              </h2>
              <h1 className="text-5xl font-bold font-lobster leading-none tracking-wide text-center capitalize text-p-950 md:text-6xl lg:text-7xl">
                Trà đặt biệt chế tác
              </h1>
            </div>
            <p className="max-w-xl px-4 text-center text-n-700 md:px-0 xl:text-start">
              Sứ mệnh của chúng tôi là mang đến cho bạn sự yên bình và kết nối
              thông qua các hương vị trà được chọn lọc cẩn thận và được tạo ra
              để nâng cao trải nghiệm hàng ngày và sức khoẻ toàn diện cho bạn.
            </p>
            <button className="px-1 py-1 border cursor-pointer lg:py-3 lg:px-9">
              <a
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm tracking-wider text-white bg-p-900 hover:bg-p-700 border-p-900 transition-colors duration-500 font-inter"
                href="#"
              >
                Tìm hiểu Sản phẩm <img src={arrow} alt="Right Arrow" />
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
