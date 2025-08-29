import logoTea from "../../../assets/tea/logo.png";
import iconMenu from "../../../assets/tea/MenuIcon.svg";
import { useEffect, useRef } from "react";

export default function Nav() {
  // Xử lý ẩn hiện Menu khi cuộn trang
  const headerRef = useRef(null);
  useEffect(() => {
    let lastY = window.scrollY || 0;

    const onScroll = () => {
      const y = window.scrollY || 0; // Lấy vị trí cuộn hiện tại, nếu không có giá trị thì lấy 0
      const goingDown = y > lastY; // Kiểm tra hướng cuộn, nếu y > lastY thì là đang cuộn xuống => true
      const shouldHide = goingDown && y > 80; // Chỉ ẩn khi cuộn xuống > 80px

      // Toggle class trực tiếp lên phần tử header,
      //   Kiểm tra xem headerRef.current có tồn tại không (true) có thì thực hiện tiếp phần sau
      if (headerRef.current) {
        // Nếu shouldHide = true, user cuộn xuống thì thêm class -translate-y-full để trượt header lên trên 100%, ẩn đi và ngược lại
        headerRef.current.classList.toggle("-translate-y-full", shouldHide);
        // Nếu cả cụm !shouldHide = true nghĩa là shouldHide = false, người dùng đang cuộn lên hoặc cuộn xuống chưa đủ 80 px, thì thêm class translate-y-0 để hiện ra lại
        headerRef.current.classList.toggle("translate-y-0", !shouldHide);
      }
      lastY = y; // Cập nhật vị trí cuộn để so sánh ở lần kế tiếp nếu người dùng lại cuộn trang
    };

    // Gọi một lần để header đúng trạng thái ban đầu
    onScroll();

    // Lắng nghe sự kiện cuộn, khi người dùng cuộn trang thì chạy hàm onScroll
    window.addEventListener("scroll", onScroll);

    // Xóa listener khi component bị unmount để không bị chiếm nhiều bộ nhớ
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  //   Xử lý ẩn hiện menu trên mobile
  const toggleIcon = useRef(null);
  const menuMobile = useRef(null);

  useEffect(() => {
    // Nếu 2 giá trị dưới là false, hàm không xử lý gì.
    if (!toggleIcon.current || !menuMobile.current) return;

    const clickButton = () => {
      menuMobile.current.classList.toggle("opacity-100");
      menuMobile.current.classList.toggle("pointer-events-auto");
      menuMobile.current.classList.toggle("pointer-events-none");
    };

    toggleIcon.current.addEventListener("click", clickButton);
    return () => toggleIcon.current.removeEventListener("click", clickButton);
  }, []);
  return (
    <>
      <header
        ref={headerRef}
        className=" fixed inset-x-0 top-0 z-50 translate-y-0 transition-transform duration-300 bg-white/80"
      >
        <div className="relative flex items-center justify-center navbar">
          <div className="max-w-[1536px] w-full px-4 py-4 md:py-10 md:px-[72px] flex items-center justify-between">
            {/* logo */}
            <a href="./" className="flex justify-center items-center flex-none">
              <img src={logoTea} alt="Logo" className="w-16 h-16" />{" "}
              <p className="text-lg capitalize font-lobster text-p-900">
                Tea Station
              </p>
            </a>
            {/* nav links */}
            <nav className="items-center justify-end hidden w-full gap-4 lg:flex lg:gap-8">
              <a href="#" className="navLink">
                Sản phẩm
              </a>
              <a href="#" className="navLink">
                Giới thiệu
              </a>
              <a href="#" className="navLink">
                Liên hệ
              </a>
            </nav>
            {/* Hambuger icon */}
            <div ref={toggleIcon} className="block cursor-pointer lg:hidden">
              <img className="size-5" src={iconMenu} alt="Icon Menu" />
            </div>
            {/*  Mobile menu */}
            <div
              ref={menuMobile}
              className="dropdown-menu flex flex-col gap-5 bg-p-900 px-24 py-10 rounded-2xl lg:hidden absolute right-10 top-14 opacity-0 transition-all duration-300 pointer-events-none"
            >
              <a href="#" className="navLink mobileNavLink">
                Sản phẩm
              </a>
              <a href="#" className="navLink mobileNavLink">
                Giới thiệu
              </a>
              <a href="#" className="navLink mobileNavLink">
                Liên hệ
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="h-8 md:h-20" />
    </>
  );
}
