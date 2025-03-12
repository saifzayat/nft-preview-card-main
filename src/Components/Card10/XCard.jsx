import styles from "./XCard.module.css";
import logo from "../../../assets/logo-1.svg";
import pic1 from "../../../assets/illustration-intro.png";
import file from "../../../assets/icon-any-file.svg";
import access from "../../../assets/icon-access-anywhere.svg";
import collaboration from "../../../assets/icon-collaboration.svg";
import security from "../../../assets/icon-security.svg";
import thing from "../../../assets/illustration-stay-productive.png";
import arrow from "../../../assets/icon-arrow.svg";
import avatar1 from "../../../assets/profile-1.jpg";
import avatar2 from "../../../assets/profile-2.jpg";
import avatar3 from "../../../assets/profile-3.jpg";
import quotes from "../../../assets/bg-quotes.png";
import { useState } from "react";
import phoneIcon from "../../../assets/icon-phone.svg";
import emailIcon from "../../../assets/icon-email.svg";
import locIcon from "../../../assets/icon-location.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const Card = ({ title, description, image, state, quotes }) => {
  return (
    <div className={styles.card}>
      {quotes ? (
        <img src={quotes} alt={title} className={styles.quotes} />
      ) : null}
      <p>{state}</p>
      <div className={styles.avatar}>
        {image && <img src={image} alt={title} className={styles.avatarImg} />}
        <div className={styles.detailsCard}>
          <h2 className={styles.name}>{title}</h2>
          <p className={styles.title}>{description}</p>
        </div>
      </div>
    </div>
  );
};
function XCard() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setError(true);
    } else {
      setError(false);
      alert("success");
      // يمكنك إرسال البريد للسيرفر هنا
    }
  };
  return (
    <div style={{ backgroundColor: "#181f2b", overflow: "hidden" }}>
      <div className={styles.container}>
        <nav className={styles.header}>
          <nav className={styles.nav}>
            <img src={logo} alt="logo" className={styles.logo} />
            <ul className={styles.ul}>
              <li className={styles.li}>Features</li>
              <li className={styles.li}>Team</li>
              <li className={styles.li}>Sign In</li>
            </ul>
          </nav>
        </nav>
        <div className={styles.content}>
          <img src={pic1} alt="pic1" className={styles.img} />
          <h1 className={styles.h1}>
            All your files in one secure <br className={styles.brMobile} />
            location,
            <br className={styles.brDesktop} /> accessible
            <br className={styles.brMobile} /> anywhere.
          </h1>
          <p className={styles.p}>
            Fylo stores all your most important files in
            <br className={styles.brMobile} /> one secure location. Access them
            wherever <br className={styles.brMobile} /> you need, share and
            collaborate with friends
            <br className={styles.brMobile} /> family, and co-workers.
          </p>
          <button className={styles.btn}>Get Started</button>
          {/* <div className={styles.background} /> */}
          <div className={styles.hero} />
        </div>
        <div
          className={`${styles.test}
          `}
          //   ${styles.backgroundCommon} ${styles.backgroundTop}
        />
      </div>
      <div className={styles.grad} style={{ backgroundColor: "#181f2b" }}>
        <div className={styles.grad1}>
          <div className={styles.grad2}>
            <img src={access} alt="access" />
            <h1>Access your files, anywhere</h1>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          <div className={styles.grad2}>
            <img src={security} alt="security" />
            <h1>Security you can trust</h1>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
        </div>
        <div className={styles.grad1}>
          <div className={styles.grad2}>
            <img src={collaboration} alt="collaboration" />
            <h1>Real-time collaboration</h1>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <div className={styles.grad2}>
            <img src={file} alt="file" />
            <h1>Store any type of file</h1>
            <p>
              Whether you&apos;re sharing holidays photos or work documents,
              Fylo has you covered allowing for all file types to be securely
              stored and shared.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.CCC}>
        <img src={thing} alt="thing" className={styles.thing} />
        <div className={styles.grad2} style={{ alignItems: "flex-start" }}>
          <h1>Stay productive, wherever you are</h1>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <div className={styles.link}>
            <a
              className={`${styles.p} ${styles.hover}`}
              style={{ padding: "0" }}
            >
              See how Fylo works
            </a>
            <img src={arrow} alt="arrow" className={styles.linkImage} />
          </div>
        </div>
      </div>
      <img src={quotes} alt="quotes" className={styles.quotes} />
      <div className={styles.cardGroup}>
        <Card
          quotes={quotes}
          state="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          title="Satish Patel"
          description="Founder CEO, Huddle"
          image={avatar1}
        />
        <Card
          state="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          title="Card 2"
          description="Founder CEO, Huddle"
          image={avatar2}
        />
        <Card
          state="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          title="Card 3"
          description="Founder CEO, Huddle"
          image={avatar3}
        />
      </div>
      <div className={styles.flowCard}>
        <h1>Get early access today</h1>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className={styles.inputGroup}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email..."
            className={`${styles.input1} ${error ? styles.inputError : ""}`}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(false); // إزالة الخطاء عند الكتابة
            }}
          />
          <div className={handleSubmit}>
            <button className={styles.btn1} onClick={handleSubmit}>
              Get Started For Free
            </button>
            {error && <p className={styles.error}>check your email</p>}
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.details}>
          <div className={styles.FGroup}>
            <div className={styles.det}>
              <img src={locIcon} alt="location icon" className={styles.icon} />
              <p className={styles.none}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div className={styles.det}>
                <img src={phoneIcon} alt="phone icon" className={styles.icon} />
                <a href="https://wa.me/+15431234567" className={styles.none}>
                  +1-543-123-4567
                </a>
              </div>
              <div className={styles.det}>
                <img src={emailIcon} alt="email icon" className={styles.icon} />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=example.com@G.com&su=Huddle%20-%20I%20want%20to%20know%20more&body=Hi%20there,%0D%0A%0D%0AI%20am%20interested%20in%20Huddle%20and%20I%20would%20like%20to%20know%20more.%0D%0A%0D%0APlease%20get%20in%20touch%20with%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.none}
                >
                  example.com@G.com
                </a>
              </div>
            </div>
          </div>
          <div className={styles.group}>
            <h1 className={styles.stat}>About Us</h1>
            <h1 className={styles.stat}>Jobs</h1>
            <h1 className={styles.stat}>Press</h1>
            <h1 className={styles.stat}>Blog</h1>
          </div>
          <div className={styles.group}>
            <h1 className={styles.stat}>Contact Us</h1>
            <h1 className={styles.stat}> Terms</h1>
            <h1 className={styles.stat}>Privacy</h1>
          </div>
          <div className={styles.icons}>
            <FontAwesomeIcon className={styles.iconS} icon={faFacebook} />
            <FontAwesomeIcon className={styles.iconS} icon={faTwitter} />
            <FontAwesomeIcon className={styles.iconS} icon={faInstagram} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default XCard;
