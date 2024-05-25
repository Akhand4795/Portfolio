import {
  GiCalendar,
  GiClawSlashes,
  GiMailbox,
  GiMayanPyramid,
  GiPhone,
} from "react-icons/gi";
import {
  FaFacebook,
  FaSquareXTwitter,
  FaSquareInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src={"/images/Profile_Photo.png"}
            alt="Akhand Pratap Singh"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1
            className="name"
            title="Akhand Pratap Singh"
            style={{ fontSize: "20px" }}
          >
            Akhand Pratap Singh
          </h1>

          <p className="title">Full Stack Web developer</p>
        </div>
      </div>

      <ul className="social-list" style={{ marginTop: "20px" }}>
        <li className="social-item">
          <a
            href="https://www.linkedin.com/in/akhand-pratap-singh-486118244/"
            className="social-link"
          >
            <ion-icon name="logo-linkedin">
              <FaLinkedin />
            </ion-icon>
          </a>
        </li>

        <li className="social-item">
          <a href="https://github.com/Akhand4795" className="social-link">
            <ion-icon name="logo-github">
              <FaGithub />
            </ion-icon>
          </a>
        </li>

        <li className="social-item">
          <a
            href="https://leetcode.com/u/singhakhandpratap70/"
            className="social-link"
          >
            <ion-icon name="logo-leetcode">
              <SiLeetcode />
            </ion-icon>
          </a>
        </li>

        <li className="social-item">
          <a href="https://x.com/akhand_4795" className="social-link">
            <ion-icon name="logo-twitter">
              <FaSquareXTwitter />
            </ion-icon>
          </a>
        </li>
      </ul>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a
                href="mailto:akhandpratapsingh254263@gmail.com"
                className="contact-link"
              >
                akhandpratapsingh254263@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+918756176160" className="contact-link">
                (+91) 875-617-6160
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiCalendar />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="2003-07-21">July 21, 2003</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiMayanPyramid />
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Gorakhpur, UP, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>
      </div>
    </aside>
  );
};

export default Aside;
