import { Link } from "react-router-dom";
const NavigationPage = () => {
  return (
    <div>
      <h1>Navigation Page</h1>
      <nav>
        <ul style={{ fontSize: "2rem" }}>
          <li>
            <Link to="/card1">Go to card I</Link>
          </li>
          <li>
            <Link to="/card2">Go to card II</Link>
          </li>
          <li>
            <Link to="/card3">Go to card III</Link>
          </li>
          <li>
            <Link to="/card4">Go to card IV</Link>
          </li>
          <li>
            <Link to="/card5">Go to card V</Link>
          </li>
          <li>
            <Link to="/card6">Go to card VI</Link>
          </li>
          <li>
            <Link to="/card7">Go to card VII</Link>
          </li>
          <li>
            <Link to="/card8">Go to card VIII</Link>
          </li>
          <li>
            <Link to="/card9">Go to card IX</Link>
          </li>
          <li>
            <Link to="/card10">Go to card X</Link>
          </li>
          <li>
            <Link to="/test">Go to Test</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationPage;
