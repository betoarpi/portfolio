import * as H from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo";
import { useCallback, useState } from "react";

const WIDTH = window.innerWidth;

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const location = useLocation();

  const isMobile = WIDTH < 768;

  const handleShowMobileMenu = useCallback(() => {
    console.log("show menu");
    setShowMobileMenu(true);
  }, []);

  const handleCloseMobileMenu = useCallback(() => {
    console.log("close menu");
    setShowMobileMenu(false);
  }, []);

  return (
    <H.Header>
      <Logo />
      <H.MobileMenuIcon onClick={handleShowMobileMenu}>
        <FontAwesomeIcon icon={faHamburger} size="lg" />
      </H.MobileMenuIcon>
      <H.Navigation className={showMobileMenu ? "mobile-menu-active" : ""}>
        {showMobileMenu && (
          <H.CloseIcon onClick={handleCloseMobileMenu}>
            <FontAwesomeIcon icon={faTimes} size="1x" />
          </H.CloseIcon>
        )}
        <li className={location.pathname === "/about-me" ? "active" : ""}>
          <Link
            to="/about-me"
            onClick={() => {
              isMobile && handleCloseMobileMenu();
            }}
          >
            <span>About me</span>
          </Link>
        </li>
        <li className={location.pathname === "/portfolio" ? "active" : ""}>
          <Link
            to="/portfolio"
            onClick={() => {
              isMobile && handleCloseMobileMenu();
            }}
          >
            <span>Portfolio</span>
          </Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link
            to="/contact"
            onClick={() => {
              isMobile && handleCloseMobileMenu();
            }}
          >
            <span>Contact</span>
          </Link>
        </li>
      </H.Navigation>
    </H.Header>
  );
};

export default Header;
