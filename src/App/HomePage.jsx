import { Link } from "react-router-dom";
const NavigationPage = () => {
  return (
    <div>
      <h1>Navigation Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/card1">Go to card 1</Link>
          </li>
          <li>
            <Link to="/card2">Go to card 2</Link>
          </li>
          <li>
            <Link to="/card3">Go to card 3</Link>
          </li>
          <li>
            <Link to="/card4">Go to card 4</Link>
          </li>
          <li>
            <Link to="/card5">Go to card 5</Link>
          </li>
          <li>
            <Link to="/card6">Go to card 6</Link>
          </li>
          <li>
            <Link to="/card7">Go to card 7</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationPage;
