import "./style_theme.css";
import "./style_profile.css";
import "./style_responsive.css";
import BackHome from "../BackHome.jsx";
import imgAboutTop from "../../assets/profile/rocket-icon.svg";
import imgAboutBottom from "../../assets/profile/laptop-icon.svg";
import checkIcon from "../../assets/profile/check-icon.svg";
import book from "../../assets/profile/closed-book.svg";
import iconGithub from "../../assets/profile/icons/github.svg";
import iconC from "../../assets/profile/icons/C.svg";
import iconCss from "../../assets/profile/icons/css.svg";
import iconHtml from "../../assets/profile/icons/html.svg";
import iconJava from "../../assets/profile/icons/java.svg";
import iconJS from "../../assets/profile/icons/JS.svg";
import iconNextJS from "../../assets/profile/icons/nextjs.svg";
import iconNodeJs from "../../assets/profile/icons/node-js.svg";
import iconPostGreSql from "../../assets/profile/icons/postgresql.svg";
import iconReact from "../../assets/profile/icons/react.svg";
import project1 from "../../assets/profile/project1.jpg";
import project2 from "../../assets/profile/project2.jpg";
import project3 from "../../assets/profile/project3.jpg";
import project4 from "../../assets/profile/project4.jpg";
import project5 from "../../assets/profile/project5.jpg";
import project6 from "../../assets/profile/project6.jpg";

export default function Profile() {
  return (
    <>
      <BackHome />
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
        <img className="imgAboutTop" src={imgAboutTop} />
        <img className="imgAboutBottom" src={imgAboutBottom} />
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
      {/* Skill */}
      <section className="skill__section">
        <div className="container skill__container">
          {/* Header */}
          <div className="skill__container--header">
            <h1>Kỹ Năng & Chuyên Môn</h1>
            <p>
              Là một nhà phát triển web mới vào nghề, mình có nền tảng vững chắc
              về các framework front-end như React và thư viện NextJS, và có
              kinh nghiệm làm việc với các công nghệ back-end như Node.js và
              Express.
            </p>
          </div>
          {/* Grid */}
          <div className="skills__grid_container">
            {/* Grid item 1 */}
            <div className="skills__grid_item"></div>
            {/* Grid item 2 */}
            <div className="skills__grid_item">
              <div className="skills__grid_item_header">
                <div>
                  <img src={checkIcon} alt="check Icon" />
                  <h2>Công Cụ & Công Nghệ</h2>
                </div>
                <p>
                  Thành thạo nhiều công cụ lập trình web hiện đại, có kinh
                  nghiệm xây dựng các ứng dụng web tương tác, thân thiện với
                  người dùng và đam mê viết mã sạch, dễ bảo trì.
                </p>
              </div>
              {/* skill logo */}
              <div>
                {/* list 1 */}
                <div className="icon-list-wrapper">
                  <div className="icon-list">
                    <div className="icon-badges">
                      <img src={iconC} alt="C icon" />
                      <span>C</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconGithub} alt="Github icon" />
                      <span>Github</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconHtml} alt="HTML icon" />
                      <span>HTML</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconJava} alt="Java icon" />
                      <span>Java</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconJS} alt="JS icon" />
                      <span>JS</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconNextJS} alt="Next JS icon" />
                      <span>NextJS</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconCss} alt="CSS icon" />
                      <span>CSS</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconNodeJs} alt="NodeJS icon" />
                      <span>NodeJS</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconPostGreSql} alt="PostGreSql icon" />
                      <span>PostGreSql</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconReact} alt="React icon" />
                      <span>React</span>
                    </div>
                  </div>
                  <div className="icon-list">
                    <div className="icon-badges">
                      <img src={iconC} alt="C icon" />
                      <span>C</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconGithub} alt="Github icon" />
                      <span>Github</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconHtml} alt="HTML icon" />
                      <span>HTML</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconJava} alt="Java icon" />
                      <span>Java</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconJS} alt="JS icon" />
                      <span>JS</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconNextJS} alt="Next JS icon" />
                      <span>NextJS</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconCss} alt="CSS icon" />
                      <span>CSS</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconNodeJs} alt="NodeJS icon" />
                      <span>NodeJS</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconPostGreSql} alt="PostGreSql icon" />
                      <span>PostGreSql</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconReact} alt="React icon" />
                      <span>React</span>
                    </div>
                  </div>
                </div>
                {/* list 2 */}
                <div className="icon-list-wrapper">
                  <div className="icon-list">
                    <div className="icon-badges">
                      <img src={iconC} alt="C icon" />
                      <span>C</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconGithub} alt="Github icon" />
                      <span>Github</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconHtml} alt="HTML icon" />
                      <span>HTML</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconJava} alt="Java icon" />
                      <span>Java</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconJS} alt="JS icon" />
                      <span>JS</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconNextJS} alt="Next JS icon" />
                      <span>NextJS</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconCss} alt="CSS icon" />
                      <span>CSS</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconNodeJs} alt="NodeJS icon" />
                      <span>NodeJS</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconPostGreSql} alt="PostGreSql icon" />
                      <span>PostGreSql</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconReact} alt="React icon" />
                      <span>React</span>
                    </div>
                  </div>
                  <div className="icon-list">
                    <div className="icon-badges">
                      <img src={iconC} alt="C icon" />
                      <span>C</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconGithub} alt="Github icon" />
                      <span>Github</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconHtml} alt="HTML icon" />
                      <span>HTML</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconJava} alt="Java icon" />
                      <span>Java</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconJS} alt="JS icon" />
                      <span>JS</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconNextJS} alt="Next JS icon" />
                      <span>NextJS</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconCss} alt="CSS icon" />
                      <span>CSS</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconNodeJs} alt="NodeJS icon" />
                      <span>NodeJS</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconPostGreSql} alt="PostGreSql icon" />
                      <span>PostGreSql</span>
                    </div>
                    <div className="icon-badges">
                      <img src={iconReact} alt="React icon" />
                      <span>React</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Grid item 3 */}
            <div className="skills__grid_item">
              <div className="skills__grid_item_header">
                <div>
                  <img src={checkIcon} alt="check Icon" />
                  <h2>Kỹ Năng Mềm</h2>
                </div>
                <p>
                  Kỹ năng giao tiếp, cộng tác, và giải quyết vấn đề xuất sắc,
                  với thái độ chủ động và ham học hỏi, dễ dàng thích nghi trong
                  môi trường làm việc nhóm năng động.
                </p>
              </div>
              <div className="softSkills__container">
                <div className="softSkills_badge">
                  <p>Giao tiếp chuyên nghiệp</p>
                </div>
                <div className="softSkills_badge">
                  <p>Quản lý thời gian hiệu quả</p>
                </div>
                <div className="softSkills_badge">
                  <p>Đáng tin cậy</p>
                </div>
                <div className="softSkills_badge">
                  <p>Ham học hỏi</p>
                </div>
                <div className="softSkills__book_icons">
                  <img src={book} alt="close book" />
                  <img src={book} alt="close book" />
                  <img src={book} alt="close book" />
                  <img src={book} alt="close book" />
                </div>
              </div>
            </div>
            {/* Grid item 4 */}
            <div className="skills__grid_item"></div>
          </div>
        </div>
      </section>
      {/* Project */}
      <section className="projects__section">
        <div className="container projects_container">
          {/* Header */}
          <div className="section__header">
            <h1 className="section__title">Đồ Án Thực Chiến</h1>
            <p className="section__des">
              Bộ sưu tập dự án thực tập tại trường này giúp mình củng cố và hoàn
              thiện những kỹ năng kỹ thuật cũng như khả năng giải quyết vấn đề
              một cách sáng tạo.
            </p>
          </div>
          {/* Cards */}
          <div className="project__card_container">
            <a href="#">
              <div className="projects_cards">
                <div className="projects_card_wrapper">
                  <img
                    className="projects__cards_img"
                    src={project1}
                    alt="Project 1"
                  />
                </div>
                <div className="projects__cards_title">
                  <h4>Dự án 1</h4>
                  <h3>Todo List</h3>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="projects_cards">
                <div className="projects_card_wrapper">
                  <img
                    className="projects__cards_img"
                    src={project2}
                    alt="Project 1"
                  />
                </div>
                <div className="projects__cards_title">
                  <h4>Dự án 2</h4>
                  <h3>Trang Thông Tin Công Nghệ</h3>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="projects_cards">
                <div className="projects_card_wrapper">
                  <img
                    className="projects__cards_img"
                    src={project3}
                    alt="Project 1"
                  />
                </div>
                <div className="projects__cards_title">
                  <h4>Dự án 3</h4>
                  <h3>Spotify Clone</h3>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="projects_cards">
                <div className="projects_card_wrapper">
                  <img
                    className="projects__cards_img"
                    src={project4}
                    alt="Project 1"
                  />
                </div>
                <div className="projects__cards_title">
                  <h4>Dự án 4</h4>
                  <h3>Facebook Clone</h3>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="projects_cards">
                <div className="projects_card_wrapper">
                  <img
                    className="projects__cards_img"
                    src={project5}
                    alt="Project 1"
                  />
                </div>
                <div className="projects__cards_title">
                  <h4>Dự án 5</h4>
                  <h3>Thiết kế trang doanh nghiệp</h3>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="projects_cards">
                <div className="projects_card_wrapper">
                  <img
                    className="projects__cards_img"
                    src={project6}
                    alt="Project 1"
                  />
                </div>
                <div className="projects__cards_title">
                  <h4>Dự án 6</h4>
                  <h3>Thiết kế Web</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Profile Target</p>
        </div>
      </footer>
    </>
  );
}
