import styles from "./VIICard.module.css";
import thing from "../../../assets/illustration-mockups.svg";
import log from "../../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
function VIICard() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.background} />
        <header className={styles.header}>
          <img src={log} alt="logo" className={styles.logo} />
        </header>
        <div className={styles.contentContainer}>
          <img src={thing} alt="thing" className={styles.thing} />
          <div className={styles.content}>
            <h1 className={styles.h1}>
              Build The Community Your Fans Will Love
            </h1>
            <p className={styles.p}>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button className={styles.btn}>Register</button>
          </div>
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon className={styles.iconS} icon={faFacebook} />
          <FontAwesomeIcon className={styles.iconS} icon={faTwitter} />
          <FontAwesomeIcon className={styles.iconS} icon={faInstagram} />
        </div>
      </div>
    </main>
  );
}

export default VIICard;
