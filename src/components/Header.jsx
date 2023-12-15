import { Link } from "react-router-dom";

import reactLogo from "../assets/react.svg";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </Link>
      <ul className="head-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
export default Header;
