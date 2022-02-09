import * as H from "./styles";
// @ts-ignore
import { ReactComponent as BoltIcon } from "../../theme/icons/bolt.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <H.Header>
      <H.Logo>
        <Link to="/">
          <BoltIcon />
          Rob Arroyo
        </Link>
      </H.Logo>
      <H.Navigation>
        <li>
          <Link to="/about-me">
            <span>About me</span>
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <span>Portfolio</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <span>Contact</span>
          </Link>
        </li>
      </H.Navigation>
    </H.Header>
  );
};

export default Header;
