import { ReactElement } from "react";
import * as F from "./styles";
import Logo from "../Logo";
// @ts-ignore
import { ReactComponent as GithubIcon } from "../../theme/icons/github.svg";
// @ts-ignore
import { ReactComponent as LinkedInIcon } from "../../theme/icons/linkedin.svg";
// @ts-ignore
import { ReactComponent as TwitterIcon } from "../../theme/icons/twitter.svg";
// @ts-ignore
import { ReactComponent as SpotifyIcon } from "../../theme/icons/spotify.svg";
import { useLocation } from "react-router-dom";

const Footer = (): ReactElement => {
  const location = useLocation();

  console.log({ location }, "👈");

  if (location.pathname === "/") {
    return <></>;
  }

  return (
    <F.Wrapper>
      <F.Container>
        <Logo />

        <F.SocialMedia>
          <ul>
            <li>
              <a
                href="https://github.com/betoarpi"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/rob-arroyo"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/betoarpi"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a
                href="https://vainillapodcast.fm/"
                target="_blank"
                rel="noreferrer"
              >
                <SpotifyIcon />
              </a>
            </li>
          </ul>
        </F.SocialMedia>
      </F.Container>
    </F.Wrapper>
  );
};

export default Footer;
