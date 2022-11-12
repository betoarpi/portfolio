import * as P from "./styles";

import PrimaryButtonLink from "../Buttons";
import { ReactElement } from "react";

const Portfolio = (): ReactElement => {
  return (
    <P.Container>
      <h1>This is my work 💼</h1>

      <P.PortfolioGrid>
        <div>
          <figure>
            <img
              src={require("../../theme/images/portfolio/rooam.png")}
              alt="Rooam pay"
            />
          </figure>
          <div>
            <h3>Rooam</h3>
            <p>
              At Rooam, I am responsible for developing and maintaining
              web-based solutions that improve the speed of service, increase
              revenue, and deliver safe and modern guest experiences to
              businesses in the hospitality industry.
            </p>
            <PrimaryButtonLink label="Visit Website" to="https://rooam.co/" />
          </div>
        </div>
        <div>
          <figure>
            <img
              src={require("../../theme/images/portfolio/summari.png")}
              alt="Summari apps"
            />
          </figure>
          <div>
            <h3>Summari apps</h3>
            <p>
              When I worked at Summari, I had the opportunity to collaborate in
              the creation and maintenance of its mobile, chrome and web apps.
              You can see my work in action downloading the app. It's fun
              getting summaries from the content you usually read. Give it a
              try!
            </p>
            <PrimaryButtonLink label="Download app" to="https://summari.com" />
          </div>
        </div>
        <div>
          <figure>
            <img
              src={require("../../theme/images/portfolio/meritop-app.png")}
              alt="Meritop app"
            />
          </figure>
          <div>
            <h3>Wallet app for OKO Tecnologia</h3>
            <p>
              On 2021, I had some spare time to collaborate on the development
              of a Wallet app for one of OKO's clients. This app allowed the
              clients of a bank pay to different local businesses by searching
              the business in the app, selecting an account and finnaly entering
              the amount to pay.
            </p>
          </div>
        </div>
        <div>
          <figure>
            <img
              src={require("../../theme/images/portfolio/schools-app.png")}
              alt="Order ahead app"
            />
          </figure>
          <div>
            <h3>Order ahead app for schools in Oklahoma</h3>
            <p>
              During 2021, I worked for Wonder, a digital agency from Oklahoma,
              creating an app that let students order ahead their meals and
              picked them up at the cafeteria.
            </p>
          </div>
        </div>
        <div>
          <figure>
            <img
              src={require("../../theme/images/portfolio/dr-shadid.png")}
              alt="Dr. Shadid Website"
            />
          </figure>
          <div>
            <h3>Dr. Shadid Website</h3>
            <p>
              Dr. Derek Shadid, MD is a Cosmetic, Plastic & Reconstructive
              Surgery Specialist in Oklahoma City, OK. This website is his
              portfolio of services. I designed and developed it as a custom
              WordPress solution.
            </p>
            <PrimaryButtonLink
              label="Visit website"
              to="https://dr-shadid.com/"
            />
          </div>
        </div>
        <div>
          <figure>
            <img
              src={require("../../theme/images/portfolio/resolute-visuals.png")}
              alt="Resolute Visuals Website"
            />
          </figure>
          <div>
            <h3>Resolute Visuals Website</h3>
            <p>
              High-end digital film and video production house serving Oklahoma
              city and beyond. David Callahan contacted Wonder with the need of
              a website refresh. I designed his new logo, website and developed
              it as a custom Wordpress solution.
            </p>
            <PrimaryButtonLink
              label="Visit website"
              to="https://resolutevisuals.tv/"
            />
          </div>
        </div>
        <div>
          <figure>
            <img
              src={require("../../theme/images/portfolio/save-tigers.png")}
              alt="Save Tiggers Now Website"
            />
          </figure>
          <div>
            <h3>Save Tiggers Now Website</h3>
            <p>
              Save Tigers Now is a global campaign by World Wildlife Fund and
              Leonardo DiCaprio to build political, financial and public support
              to double the number of tiggers population.
            </p>
            <PrimaryButtonLink
              label="Visit website"
              to="https://www.savetigersnow.org/"
            />
          </div>
        </div>
      </P.PortfolioGrid>
    </P.Container>
  );
};

export default Portfolio;
