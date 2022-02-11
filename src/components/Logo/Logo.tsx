import { ReactElement } from "react";
import * as L from "./style";
// @ts-ignore
import { ReactComponent as BoltIcon } from "../../theme/icons/bolt.svg";
// @ts-ignore
import { ReactComponent as BoltIconSolid } from "../../theme/icons/bolt-solid.svg";
import { Link } from "react-router-dom";

const Logo = (): ReactElement => {
  return (
    <L.Logo>
      <Link to="/">
        <L.IconContainer>
          <BoltIconSolid />
          <BoltIcon />
        </L.IconContainer>
        Rob Arroyo
      </Link>
    </L.Logo>
  );
};

export default Logo;
