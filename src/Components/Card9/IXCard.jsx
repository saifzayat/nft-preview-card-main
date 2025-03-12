import styles from "./IXCard.module.css";
import { useState } from "react";
import logo from "../../../assets/logo-1.svg";
import pic1 from "../../../assets/illustration-1.svg";
import pic2 from "../../../assets/illustration-2.svg";
import QQ from "../../../assets/icon-quotes.svg";
import arrow from "../../../assets/icon-arrow.svg";
import avatar from "../../../assets/avatar-testimonial.jpg";
import phoneIcon from "../../../assets/icon-phone.svg";
import emailIcon from "../../../assets/icon-email.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
function IXCard() {
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
    <div>
      <div className={styles.container}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <img src={logo} alt="logo" className={styles.logo} />
            <ul className={styles.ul}>
              <li className={styles.li}>Features</li>
              <li className={styles.li}>Team</li>
              <li className={styles.li}>Sign In</li>
            </ul>
          </nav>
        </header>
        <main className={styles.main}>
          <div className={styles.content}>
            <h1 className={styles.h1}>
              All your files in one secure
              <br className={styles.br} /> location, accessible
              <br className={styles.br} /> anywhere.
            </h1>
            <p className={styles.p}>
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
            <div className={styles.inputContainer}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email..."
                className={`${styles.input} ${error ? styles.inputError : ""}`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(false); // إزالة الخطأ عند الكتابة
                }}
              />
              <div className={handleSubmit}>
                <button className={styles.btn} onClick={handleSubmit}>
                  Get Started
                </button>
                {error && <p className={styles.error}>check your email</p>}
              </div>
            </div>
          </div>
          <img src={pic1} alt="thing" className={styles.thing} />
        </main>
      </div>
      <div className={styles.background} />
      <div className={styles.container} style={{ backgroundColor: "#f8f8fe" }}>
        <main
          className={styles.main}
          style={{ gap: "80px", alignItems: "center" }}
        >
          <div className={styles.content} style={{ paddingTop: "0px" }}>
            <h1 className={styles.h1}>Stay productive, wherever you are</h1>
            <p className={styles.p}>
              Never let location be an issue when accessing your files. Fylo has
              you <br className={styles.nonebr} /> covered for all of your file
              storage needs.
            </p>
            <p className={styles.p}>
              Securely share files and folders with friends, family and
              colleagues for <br className={styles.nonebr} />
              live collaboration. No email attachments required!
            </p>
            <div className={styles.link}>
              <p className={`${styles.p} ${styles.hover}`}>
                See how Fylo works
              </p>
              <img src={arrow} alt="arrow" className={styles.linkImage} />
            </div>
            <div className={styles.card}>
              <img src={QQ} alt="quote" className={styles.quote} />
              <p className={styles.ps}>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div className={styles.avatar}>
                <img src={avatar} alt="avatar" className={styles.avatarImg} />
                <div className={styles.detailCard}>
                  <p className={styles.name}>Kyle Burton</p>
                  <p className={styles.title}>Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
          <img src={pic2} alt="thing" className={styles.thing1} />
        </main>
      </div>
      <div className={`${styles.container} ${styles.between}`}>
        <div className={styles.content} style={{ paddingTop: "0px" }}>
          <h1
            className={styles.h1}
            style={{ color: "white", fontWeight: "400" }}
          >
            Get early access today
          </h1>
          <p className={styles.p} style={{ color: "white" }}>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className={styles.inputContainer1}>
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
        <img src={logo} alt="logo" className={styles.log2} />
        <div className={styles.details}>
          <div className={styles.group}>
            <div className={styles.det}></div>
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

export default IXCard;
