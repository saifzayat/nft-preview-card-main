import styles from "./VICard.module.css";
import log from "../../../assets/logo.svg";
import thing from "../../../assets/illustration-mockups.svg";
function VICard() {
  return (
    <div>
      <img className={styles.background} />
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={log} alt="logo" className={styles.log} />
          <button className={styles.btn}>Try It Free</button>
        </div>
        <div className={styles.con}>
          <div className={styles.cont}>
            <h1 className={styles.h1}>
              Build The Community Your Fans Will Love
            </h1>
            <p className={styles.p}>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button className={styles.btn2}>Get Started For Free</button>
          </div>
          <img src={thing} alt="thing" className={styles.thing} />
        </div>
      </div>
    </div>
  );
}

export default VICard;
