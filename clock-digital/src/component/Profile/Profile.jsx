import "./style_theme.css";
import "./style_profile.css";
import "./style_responsive.css";
import iconRocket from "../../assets/profile/icons/rocket-icon.svg";

export default function Profile() {
  return (
    <>
      {/* Header */}
      <header className="header__profile">
        <div className="container header__container">
          {/* left column */}
          <div className="header__column--left">
            {/* avatar */}
            <div className="header__img"></div>
            <div className="header__content--left">
              <h2 className="header__title">Profile Mr.Thanh</h2>
              <div className="header__badge_container">
                <div className="badge">Lập trình web, mobile app</div>
                <div className="badge">Full stack Developer</div>
              </div>
              <p>
                Mong muốn vị trí ứng tuyển vị trí <span>Front End</span> tại
                Công ty để có cơ hội tham gia vào các dự án.
              </p>
            </div>
          </div>
          {/* right column */}
          <div className="header__column--right">
            <h2 className="header__title">Thông tin liên hệ</h2>
            <p>
              Gửi email cho mình tại: <span>thanh.nb2311@gmail.com</span>
            </p>
            <p>
              Gọi cho mình tại: <span>0337 651 676</span>
            </p>
          </div>
        </div>
      </header>
      {/* About Me - giới thiệu bản thân */}
      <section className="aboutMe__section">
        {/* Ảnh động */}
        <img className="imgTop" src={iconRocket} />
        <img className="imgBottom" src={iconRocket} />
        {/* Main content */}
        <div className="aboutMe__container">
          <div className="aboutMe__container--content">
            <h1 className="aboutMe__container--h1">Giới Thiệu Bản Thân</h1>
            <p className="aboutMe__container--text">
              Xin chào! Mình là sinh viên năm cuối trường đại học CNTT. Mình có
              niềm đam mê với công việc lập trình và vô cùng yêu thích việc tạo
              ra các trang web và mobile app hiện đại và có tính ứng dụng cao.
            </p>
            <div className="about__container--cta">
              <a className="primaryButton" href="#">
                Tải CV
              </a>
              <a className="outlineButton" href="#">
                Xem Dự Án
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
