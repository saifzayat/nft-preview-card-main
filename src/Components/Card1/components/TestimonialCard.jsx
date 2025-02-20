import "./TestimonialCard.css";
import PropTypes from "prop-types";

const TestimonialCard = ({
  backgroundColor,
  textColor,
  imgSrc,
  name,
  title,
  mainTitle,
  mainBody,
  mainTextColor,
  id,
  quote,
}) => {
  return (
    <article
      className={`card ${id}`}
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      <div className="cardDetails">
        <img
          src={imgSrc}
          alt="User picture"
          className="cardImage"
          style={{ border: `2px solid ${mainTextColor}` }}
        />
        <div className="cardInfoContainer">
          <p className="cardName">{name}</p>
          <p className="cardTitle">{title}</p>
        </div>
      </div>
      <div className="CardDetailsContainer">
        <h2 className="CardDetailsTitle" style={{ color: mainTextColor }}>
          {mainTitle}
        </h2>
        <p
          className="CardDetailsBody"
          style={{ color: mainTextColor, opacity: 0.7 }}
        >
          “{mainBody}”
        </p>
      </div>
      {quote && <Quote />}
    </article>
  );
};

const Quote = () => (
  <img src="/assets/bg-pattern-quotation.svg" className="quote" />
);
TestimonialCard.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  mainTitle: PropTypes.string.isRequired,
  mainBody: PropTypes.string.isRequired,
  mainTextColor: PropTypes.string,
  id: PropTypes.string.isRequired,
  quote: PropTypes.bool,
};

export default TestimonialCard;
