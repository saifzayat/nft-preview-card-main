/* eslint-disable react/prop-types */
import styles from "./XICard.module.css";
import logo from "../../../assets/logo-C.svg";
import img1 from "../../../assets/image-computer.png";
import img2 from "../../../assets/image-devices.png";
import icon1 from "../../../assets/icon-blacklist.svg";
import icon2 from "../../../assets/icon-preview.svg";
import icon3 from "../../../assets/icon-text.svg";
import gIcon from "../../../assets/logo-google.png";
import MIcon from "../../../assets/logo-microsoft.png";
import hpIcon from "../../../assets/logo-hp.png";
import ibmIcon from "../../../assets/logo-ibm.png";
import VectorIcon from "../../../assets/logo-vector-graphics.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
function Button({ color, text }) {
  const navigation = useNavigate();
  return (
    <button
      className={styles.button}
      style={{ backgroundColor: color }}
      onClick={() => navigation("*")}
    >
      {text}
    </button>
  );
}
function Titles({ title, description }) {
  return (
    <div className={styles.titles}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

function GCard({ GText, GDescription, icon }) {
  return (
    <div className={styles.SCard}>
      <img src={icon} alt="1" />
      <h1>{GText}</h1>
      <p>{GDescription}</p>
    </div>
  );
}
function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <nav className={styles.nav}>
        <h1>A history of everything you copy</h1>
        <p>
          Clipboard allows you to track and organize everything gou copy.
          Instantly access your clipboard on all your devices.
        </p>
      </nav>
      <div className={styles.btnGroup}>
        <Button color="#38beaa" text="Download for iOS" />
        <Button color="#6174ff" text="Download for Mac" />
      </div>
    </header>
  );
}

function XICard() {
  return (
    <div>
      <div className={styles.container}>
        <Header
          title="A history of everything you copy"
          description="Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices."
        />
        <Titles
          title="Keep track of your snippets"
          description="Clipboard instantly stores anu item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything."
        />
        <div className={styles.flowCard}>
          <img src={img1} alt="comp" className={styles.img} />
          <div className={styles.textL}>
            <div>
              <h1>Quick Search</h1>
              <p>
                Easily search your snippets bg content, category, web address,
                application, and more.
              </p>
            </div>
            <div>
              <h1> iCloud Sync</h1>
              <p>Instantly saves and syncs snippets across all your devices.</p>
            </div>
            <div>
              <h1>Complete History</h1>
              <p>
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
        <Titles
          title="Access Clipboard Anywhere"
          description="Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."
        />
        <img src={img2} alt="Access Clipboard" />
        <Titles
          title="Supercharge your workflow"
          description="We've got the tools to boost your productivity."
        />
        <div className={styles.GGCard}>
          <GCard
            GText="Create blacklists"
            GDescription="Ensure sensitive information never makes its way to your clipboard by excluding certain sources."
            icon={icon1}
          />
          <GCard
            GText="Plain text snippets"
            GDescription="Remove unwanted formatting from copied text for a consistent look."
            icon={icon3}
          />
          <GCard
            GText="Sneak preview"
            GDescription="Quick preview of all snippets on your Clipboard for easy access."
            icon={icon2}
          />
        </div>
        <div className={styles.GCompanies}>
          <img src={gIcon} alt="google" />
          <img src={ibmIcon} alt="ibm" />
          <img src={MIcon} alt="microsoft" />
          <img src={hpIcon} alt="hp" />
          <img src={VectorIcon} alt="vector" />
        </div>
        <div className={styles.LastGroup}>
          <Titles
            title="Clipboard for iOS and Mac OS"
            description="Available for free on the App Store. Download for Mac or IOS, sync with iCloud and you're ready to start adding to your clipboard,"
          />
          <div className={styles.btnGroup}>
            <Button color="#38beaa" text="Download for iOS" />
            <Button color="#6174ff" text="Download for Mac" />
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <img src={logo} alt="logo" className={styles.logo2} />
        <div style={{ color: "black" }} className={styles.footerContainer}>
          <div className={styles.details}>
            <a href="*" className={styles.hover}>
              FAQs
            </a>
            <a href="*" className={styles.hover}>
              Contact Us
            </a>
          </div>
          <div className={styles.details}>
            <a href="*" className={styles.hover}>
              Privacy Policy
            </a>
            <a href="*" className={styles.hover}>
              Press kit
            </a>
          </div>
          <div className={styles.details}>
            <a href="*" className={styles.hover}>
              Install Guide
            </a>
          </div>
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
          <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        </div>
      </footer>
    </div>
  );
}

export default XICard;
