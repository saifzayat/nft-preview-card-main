import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

const NavigationPage = () => {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Some of Challenge in front-end mentor
      </h1>
      <div className={styles.main}>
        {Array.from({ length: 11 }, (_, index) => (
          <Link to={`/card${index + 1}`} key={index} className={styles.card}>
            <div className={styles.content}>
              <img
                src={`https://api.apiflash.com/v1/urltoimage?access_key=c07c2e4efcf14bfdbd254e45d9aa7ffc&url=https://nft-preview-card-main-six.vercel.app/card${
                  index + 1
                }`}
                alt={`Card ${index + 1}`}
                className={styles.img}
              />
              <p style={{ marginTop: "10px", fontSize: "1.6rem" }}>
                Go to Challenge {index + 1}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavigationPage;
