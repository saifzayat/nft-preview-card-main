import styles from "./VICard.module.css";
import log from "../../../assets/logo.svg";
import thing from "../../../assets/illustration-mockups.svg";
import pic1 from "../../../assets/illustration-grow-together.svg";
import pic2 from "../../../assets/illustration-flowing-conversation.svg";
import pic3 from "../../../assets/illustration-your-users.svg";
import locIcon from "../../../assets/icon-location.svg";
import phoneIcon from "../../../assets/icon-phone.svg";
import emailIcon from "../../../assets/icon-email.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

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
          <div className={styles.contT}>
            <div className={styles.cont}>
              <h1 className={styles.h1}>
                Build The Community Your Fans Will Love
              </h1>
              <p className={styles.p}>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>
              <button className={styles.btn2}>Get Started For Free</button>
            </div>
            <img src={thing} alt="thing" className={styles.thing} />
          </div>
          <div className={styles.cards}>
            <div className={styles.CC}>
              <img src={pic1} alt="pic1" className={styles.pic} />
              <div className={styles.CCC}>
                <h1 className={styles.hc}>Grow Together</h1>
                <p className={styles.pc}>
                  Generate meaningful discussions with your audience and build a
                  strong, loyal community. Think of the insightful conversations
                  you miss out on with a feedback form.
                </p>
              </div>
            </div>
            <div className={styles.CCR}>
              <img src={pic2} alt="pic2" className={styles.pic} />
              <div className={styles.CCC}>
                <h1 className={styles.hc}>Flowing Conversations</h1>
                <p className={styles.pc}>
                  You wouldn&apos;t paginate a conversation in real life, so why
                  do it online? Our threads have just-in-time loading for a more
                  natural flow.
                </p>
              </div>
            </div>
            <div className={styles.CC}>
              <img src={pic3} alt="pic3" className={styles.pic} />
              <div className={styles.CCC}>
                <h1 className={styles.hc}>Your Users</h1>
                <p className={styles.pc}>
                  It takes no time at all to integrate Huddle with your
                  app&apos;s authentication solution, This means, once signed in
                  to your app, your users can start chatting immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.CCM}>
          <h1 className={styles.hcb}>Ready To Build Your Community?</h1>
          <button className={styles.btn2}>Get Started For Free</button>
        </div>
        <img src={log} alt="logo" className={styles.log2} />
        <div className={styles.details}>
          <div className={styles.group}>
            <div className={styles.det}>
              <img src={locIcon} alt="location icon" className={styles.icon} />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=lorem+ipsum+dolor+sit+amet`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.none}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </a>
            </div>
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
            <h1 className={styles.stat}>What We Do</h1>
            <h1 className={styles.stat}>FAQ</h1>
          </div>
          <div className={styles.group}>
            <h1 className={styles.stat}>Career</h1>
            <h1 className={styles.stat}>Blog</h1>
            <h1 className={styles.stat}>Contact Us</h1>
          </div>
          <div className={styles.icons}>
            <FontAwesomeIcon className={styles.iconS} icon={faFacebook} />
            <FontAwesomeIcon className={styles.iconS} icon={faTwitter} />
            <FontAwesomeIcon className={styles.iconS} icon={faInstagram} />
          </div>
        </div>
        <p className={styles.copyright}>
          {`Copyright ${new Date().getFullYear()} Huddle. All rights reserved.`}
        </p>
      </footer>
    </div>
  );
}

export default VICard;
