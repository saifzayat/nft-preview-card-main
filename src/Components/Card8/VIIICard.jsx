import styles from "./VIIICard.module.css";
import log from "../../../assets/logo.svg";
import thing from "../../../assets/illustration-mockups.svg";
import iconMassage from "../../../assets/icon-messages.svg";
import iconPeople from "../../../assets/icon-communities.svg";
import pic1 from "../../../assets/illustration-grow-together.svg";
import pic2 from "../../../assets/illustration-flowing-conversation.svg";
import pic3 from "../../../assets/illustration-your-users.svg";
import phoneIcon from "../../../assets/icon-phone.svg";
import emailIcon from "../../../assets/icon-email.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
function VIIICard() {
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
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <img src={log} alt="logo" className={styles.logo} />
          <button className={styles.btn}>Try It Free</button>
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.h1}>Build The Community Your Fans Will Love</h1>
          <p className={styles.p}>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
        </div>
        <button className={styles.btn1}>Get Started For Free</button>
        <img src={thing} alt="thing" className={styles.thing} />
        <div className={styles.states}>
          <div style={{ textAlign: "center" }}>
            <img
              src={iconPeople}
              alt="iconPeople"
              className={styles.iconPeople}
            />
            <h1 className={styles.state}>1.4K+</h1>
            <p className={styles.s}>Communities Formed </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src={iconMassage}
              alt="iconMassage"
              className={styles.iconMassage}
            />
            <h1 className={styles.state}>2.7m+</h1>
            <p className={styles.s}>Messages sent</p>
          </div>
        </div>
      </main>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className={`${styles.backgroundCommon} ${styles.backgroundTop}`} />
        <div className={`${styles.CC} ${styles.CCL}`}>
          <img src={pic1} alt="pic1" className={styles.pic} />
          <div className={styles.CCC}>
            <h1 className={styles.hc}>Grow Together</h1>
            <p className={styles.pc}>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
        </div>
        <div
          className={`${styles.backgroundCommon} ${styles.backgroundBottom}`}
        />
        <div className={`${styles.CC} ${styles.CCR}`}>
          <img src={pic2} alt="pic2" className={styles.pic} />
          <div className={styles.CCC}>
            <h1 className={styles.hc}>Flowing Conversations</h1>
            <p className={styles.pc}>
              You wouldn&apos;t paginate a conversation in real life, so why do
              it online? Our threads have just-in-time loading for a more
              natural flow.
            </p>
          </div>
        </div>
        <div
          className={`${styles.backgroundCommon} ${styles.backgroundTop2}`}
        />
        <div className={`${styles.CC} ${styles.CCL}`}>
          <img src={pic3} alt="pic3" className={styles.pic} />
          <div className={styles.CCC}>
            <h1 className={styles.hc}>Your Users</h1>
            <p className={styles.pc}>
              It takes no time at all to integrate Huddle with your app&apos;s
              authentication solution, This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
        </div>
        <div
          className={`${styles.backgroundCommon} ${styles.backgroundBottom2}`}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "35px",
            padding: "100px 0px ",
          }}
        >
          <h1 className={styles.h1}>Ready To Build Your Community?</h1>
          <button className={styles.btn2}>Get Started For Free</button>
        </div>
      </div>
      <footer>
        <div className={`${styles.backgroundCommon} ${styles.footerground}`} />
        <div className={styles.footer}>
          <div className={styles.test}>
            <div className={styles.details}>
              <img src={log} alt="logo" className={styles.logo2} />
              <div className={styles.det}>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=lorem+ipsum+dolor+sit+amet`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.none}
                >
                  Lorem ipsum dolor sit amet. consectetur adipiscing elit-
                  MauriS nulla quam. hendrerit lacinia vestibulum a. ultrices
                  quis sem.
                </a>
              </div>
              <div className={styles.det}>
                <img src={phoneIcon} alt="phone icon" className={styles.icon} />
                <a href="https://wa.me/+15431234567" className={styles.none}>
                  Phone: +1-543-123-4567
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
            <div className={styles.part2}>
              <div className={styles.line}>
                <h1 className={styles.none}>NEWSLETTER</h1>
                <p>
                  To recieve tips on how to grow your community, sign up to our
                  weekly newsletter. We&apos;ll never send you spam or pass on
                  your email address
                </p>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  className={`${styles.input} ${
                    error ? styles.inputError : ""
                  }`}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(false); // إزالة الخطأ عند الكتابة
                  }}
                />
                <div className={handleSubmit}>
                  <button className={styles.btn3} onClick={handleSubmit}>
                    Subscribe
                  </button>
                  {error && <p className={styles.error}>check your email</p>}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.icons}>
            <FontAwesomeIcon className={styles.iconS} icon={faFacebook} />
            <FontAwesomeIcon className={styles.iconS} icon={faInstagram} />
            <FontAwesomeIcon className={styles.iconS} icon={faTwitter} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default VIIICard;
