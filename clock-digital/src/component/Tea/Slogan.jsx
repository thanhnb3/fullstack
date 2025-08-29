import video from "../../assets/tea/video.mp4";
import imagePrev from "../../assets/tea/aboutUsImg.jpg";
export default function Slogan() {
  return (
    <>
      <section>
        <div className="my_container overflow-clip">
          <div className="relative min-w-full h-[30vh] max-h-[276px] overflow-hidden flex justify-center items-center">
            {/* Background video */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              poster={imagePrev}
              autoPlay
              loop
              muted
              src={video}
            ></video>
            {/* Content */}
            <p class="relative z-10 px-4 text-base tracking-wide text-center text-white md:text-2xl font-inter">
              Chỉ những lá trà ngon nhất mới được đưa vào sản phẩm của chúng
              tôi, đảm bảo mỗi ngụm trà đều mang hương vị tinh khiết và tuyệt
              hảo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
