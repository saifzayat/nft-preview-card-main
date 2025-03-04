import styles from "./VCard.module.css";
import avatar from "../../../assets/avatar.jpg";
import dog1 from "../../../assets/dog-image-1.jpg";
import dog2 from "../../../assets/dog-image-2.jpg";
import dog3 from "../../../assets/dog-image-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"; // استيراد الأيقونة الصحيحة
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"; // ✅ استيراد الأيقونة الصحيحة
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"; // ✅ استيراد الأيقونة الصحيحة
function VCard() {
  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.phoneContainer}>
        <div className={styles.notch} />
        <div className={styles.header}>
          {/* Header */}
          {/* <i className={`fas ${styles.icon}`}>&#xf104;</i> */}
          <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
          <img src={avatar} alt="User Avatar" className={styles.avatar} />
          <div className={styles.userInfo}>
            <h3 className={styles.name}>Samuel Green</h3>
            <p className={styles.status}>Available to walk</p>
          </div>
          <FontAwesomeIcon className={styles.menu} icon={faEllipsisVertical} />
        </div>

        {/* Chat Messages */}
        <div className={styles.chatContainer}>
          <div className={`${styles.message} `}>
            That sounds great. I&apos;d be happy with that.
          </div>
          <div className={`${styles.message}`}>
            Could you send over some pictures of your dog, please?
          </div>

          {/* Images */}
          <div className={styles.imageGroup}>
            <img src={dog1} alt="Dog 1" className={styles.dogImage} />
            <img src={dog2} alt="Dog 2" className={styles.dogImage} />
            <img src={dog3} alt="Dog 3" className={styles.dogImage} />
          </div>

          <div className={`${styles.message} ${styles.sent}`}>
            Here are a few pictures. She’s a happy girl!
          </div>
          <div className={`${styles.message} ${styles.sent}`}>
            Can you make it?
          </div>

          <div className={`${styles.message} `}>
            She looks so happy! The time we discussed works. How long shall I
            take her out for?
          </div>

          {/* Options */}
          <div className={styles.option}>
            <span className={styles.circle}></span>
            <span>30 minute walk</span>
            <span className={styles.price}>$29</span>
          </div>

          <div className={styles.option}>
            <span className={styles.circle}></span>
            <span>1 hour walk</span>
            <span className={styles.price}>$49</span>
          </div>
        </div>

        {/* Message Input */}

        <div className={styles.inputContainer}>
          <div className={styles.inputContainerB}>
            <input
              type="text"
              placeholder="Type a message..."
              className={styles.input}
              readOnly
            />

            <FontAwesomeIcon
              className={styles.sendButton}
              icon={faChevronRight}
            />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.headerT}>Simple Booking</h1>
        <p className={styles.PP}>
          Stay in touch with our dog walkers through the chat interface. This
          makes it easy to discuss arrangements and make bookings. Once the walk
          has been completed you can rate your walker and book again all through
          the chat.
        </p>
      </div>
    </div>
  );
}

export default VCard;
