import { dataImageTea } from "../../data/dataTea.js";
export default function Logo() {
  const duplicatedData = [...dataImageTea, ...dataImageTea];
  return (
    <>
      <section id="partner-logo">
        <div className="my_container">
          {/* Heading */}
          <div className="mt-10">
            <h2 className="sub_heading">Có mặt tại</h2>
            <h1 className="main_heading">
              Những nhà phân phối <span className="text-gradient">uy tín</span>
            </h1>
          </div>
          {/* logo */}
          <div className="flex mt-9 md:mt-16 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <div
              id="partner-logo-list"
              className="logos-wrapper flex flex-none gap-14 pl-14"
            >
              {duplicatedData.map((item, index) => (
                <img
                  key={index}
                  className="logo-ticker-image"
                  src={item.img}
                  alt={item.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
