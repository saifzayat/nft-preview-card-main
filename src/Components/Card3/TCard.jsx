import styles from "./TCard.module.css";
import illustration from "../../../assets/illustration-hero.svg";
import iconMusic from "../../../assets/icon-music.svg";

function TCard() {
  return (
    <div className={styles.bgImage}>
      <main className={styles.main}>
        <article className={styles.article}>
          <img
            src={illustration}
            alt="illustration image"
            className={styles.img}
          />
          <div className={styles.cardEdges}>
            <h2 className={styles.cardDetails}>Order Summary</h2>
            <h1 className={styles.description}>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </h1>
            <div className={styles.card}>
              <div>
                <img src={iconMusic} alt="music icon" className={styles.icon} />
              </div>
              <div className={styles.details}>
                <p className={styles.plan}>Annual Plan</p>
                <p className={styles.price}>$59.99/year</p>
              </div>
              <a className={styles.change}>Change</a>
            </div>

            <button className={styles.btn}>Proceed to Payment</button>
            <p className={styles.btnC}>Cancel Order</p>
          </div>
        </article>
      </main>
    </div>
  );
}

export default TCard;
