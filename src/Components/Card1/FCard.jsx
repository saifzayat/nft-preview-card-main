import "./FCard.css";
import TestimonialCard from "./components/TestimonialCard.jsx";
import { USER_DATA } from "../../../DATA.js";
const App = () => {
  return (
    <div className="background">
      <div className="wrapper">
        <section className="container">
          {USER_DATA.map((user) => {
            return (
              <TestimonialCard
                backgroundColor={user.backgroundColor}
                textColor={user.textColor}
                name={user.name}
                title={user.title}
                imgSrc={user.imgSrc}
                mainTextColor={user.mainTextColor}
                key={user.id}
                mainTitle={user.mainTitle}
                mainBody={user.mainBody}
                id={user.id}
                quote={user.quote}
              />
            );
          })}

          {/* <TestimonialCard /> */}
        </section>
      </div>
    </div>
  );
};

export default App;
