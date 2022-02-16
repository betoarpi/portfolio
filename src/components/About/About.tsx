import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faSwatchbook,
  faTerminal,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import * as A from "./styles";
import { colors } from "../../theme/theme";

const About = (): ReactElement => {
  return (
    <A.Container>
      <A.Intro>
        <A.ImgContainer />
        <div>
          <h1>I'm passionate about crafting User Interfaces</h1>
          <p>
            Whether is designing them or developing them, I've been always
            interested in creating UI. Today I create software for mobile
            experiences on the two major mobile platforms, but I have special
            interest in iOS.
          </p>
          <p>
            <mark>
              On my spare time I also host a podcast for Frontend Developers,
              called{" "}
              <a
                href="https://vainillapodcast.fm"
                target="_blank"
                rel="noreferrer"
              >
                Vainilla Podcast
              </a>
              🎙
            </mark>
          </p>
        </div>
      </A.Intro>
      <A.MyStory>
        <div>
          <h2>This is My Story 📙</h2>
          <p>
            I'm a Mobile Software Engineering with 10 + years of experience
            working on different roles in the tech industry.
          </p>

          <p>
            I've been interested in creating user interfaces very early in my
            career, and I started as a Web & UI Designer when the industry was
            transitioning from atonishing Flash animated websites to more SEO
            friendly ones with HTML, CSS and JavaScript.
          </p>

          <p>
            That was the time when I discovered my passion with coding. I soon
            started to learn how to create responsive websites, which lead me to
            various job positions that included both, design and development.
          </p>

          <h3>
            "It’s only after you’ve stepped outside your comfort zone that you
            begin to change, grow, and transform."
          </h3>
          <p>
            A few years ago, I decided to focus my career on growing my software
            development skills. I stopped seeking mixed design/development
            opportunities and started looking for the ones that could take me to
            the next level when creating digital products.
          </p>

          <p>
            That is the reason I am now a Mobile Software Engineer. I'm now
            working on a field in which I have yet too much to learn from,
            explore and grow.
          </p>
        </div>
        <div>
          <img
            src={require("../../theme/images/about-rob-1.png")}
            alt="Rob in computer"
          />

          <img
            src={require("../../theme/images/about-rob-2.jpg")}
            alt="Rob in computer"
            height={600}
            style={{ objectFit: "cover" }}
          />
        </div>
      </A.MyStory>
      <A.Section>
        <A.SectionTitle>This is my experience 🤓</A.SectionTitle>
        <A.CardGid>
          <A.Card>
            <A.CardHeader
              href="https://summari.com"
              target="_blank"
              rel="noreferrer"
            >
              <A.CardLogo
                src={require("../../theme/images/experience/summari.png")}
              />
              Summari
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </A.CardHeader>
            <A.CardHeading>
              <h3>Mobile Software Engineer</h3>
              <span>May 2021 - Present</span>
            </A.CardHeading>
            <div>
              <p>
                I'm currently creating Android and iOS mobile apps. I also
                collaborate to maintain and improve web and chrome extension
                apps.
              </p>
            </div>
          </A.Card>
          <A.Card>
            <A.CardHeader
              href="https://createwithwonder.com"
              target="_blank"
              rel="noreferrer"
            >
              <A.CardLogo
                src={require("../../theme/images/experience/wonder.png")}
              />
              Wonder
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </A.CardHeader>
            <A.CardHeading>
              <h3>Mobile Software Engineer</h3>
              <span>Feb 2020 - May 2021</span>
            </A.CardHeading>
            <div>
              <p>
                I developed apps for Android and iOS using React Native, Apollo
                Client, GraphQL. Leading mobile app development and software
                architecture.
              </p>
            </div>
          </A.Card>
          <A.Card>
            <A.CardHeader
              href="https://www.okotecnologia.com/"
              target="_blank"
              rel="noreferrer"
            >
              <A.CardLogo
                src={require("../../theme/images/experience/oko.png")}
              />
              OKO Tecnología
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </A.CardHeader>
            <A.CardHeading>
              <h3>Mobile Software Engineer</h3>
              <span>Jan 2021 - April 2021</span>
            </A.CardHeading>
            <div>
              <p>
                I developed a wallet app for Android and iOS using React Native,
                Typescript, React Navigation, Redux, Sass, REST API.
              </p>
            </div>
          </A.Card>
          <A.Card>
            <A.CardHeader
              href="https://creativescience.co/"
              target="_blank"
              rel="noreferrer"
            >
              <A.CardLogo
                src={require("../../theme/images/experience/creative-science.png")}
              />
              Creative Science
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </A.CardHeader>
            <A.CardHeading>
              <h3>
                Director of Development / <br />
                Senior Front-end Developer
              </h3>
              <span>May 2015 - Jan 2019</span>
            </A.CardHeading>
            <div>
              <p>
                I led and managed the Web Development Staff and performed
                management tasks during the project life-cycle of our clients.
              </p>
            </div>
          </A.Card>
          <A.Card>
            <A.CardHeader
              href="https://www.adhocworks.com/"
              target="_blank"
              rel="noreferrer"
            >
              <A.CardLogo
                src={require("../../theme/images/experience/adhoc-works.png")}
              />
              AdhocWorks
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </A.CardHeader>
            <A.CardHeading>
              <h3>
                UI Designer / <br /> Front Developer
              </h3>
              <span>Dec 2012 - 2017</span>
            </A.CardHeading>
            <div>
              <p>
                I designed and developed user interfaces and websites for
                clients like Intuit Canada and Rogers Canada.
              </p>
            </div>
          </A.Card>
          <A.Card>
            <A.CardHeader href="#" rel="noreferrer" className="non-clickable">
              <A.CardLogo
                src={require("../../theme/images/experience/oc2-interactive.png")}
              />
              OC2 Interactive
            </A.CardHeader>
            <A.CardHeading>
              <h3>Creative Director</h3>
              <span>Apr 2011 - Oct 2012</span>
            </A.CardHeading>
            <div>
              <p>
                I led the web design and development team. We created many
                custom Wordpress websites for small businesses across the United
                States.
              </p>
            </div>
          </A.Card>
          <A.Card>
            <A.CardHeader href="#" rel="noreferrer" className="non-clickable">
              <A.CardLogo
                src={require("../../theme/images/experience/guru-corporation.png")}
              />
              Guru Corporation
            </A.CardHeader>
            <A.CardHeading>
              <h3>Web Designer</h3>
              <span>Apr 2009 - 2011</span>
            </A.CardHeading>
            <div>
              <p>
                I designed and developed custom Wordpress websites for clients
                in North America.
              </p>
            </div>
          </A.Card>
          <A.Card>
            <A.CardHeader href="#" rel="noreferrer" className="non-clickable">
              Mexica Design Studio
            </A.CardHeader>
            <A.CardHeading>
              <h3>Web Designer</h3>
              <span>Jan 2008 - Apr 2009</span>
            </A.CardHeading>
            <div>
              <p>
                I designed and developed websites for small Real Estate
                businesses in Mexico.
              </p>
            </div>
          </A.Card>
        </A.CardGid>
      </A.Section>

      <A.Section>
        <A.SectionTitle>Skills & Software 🎨</A.SectionTitle>

        <A.SkillsGrid>
          <div>
            <A.SkillsIcon color={colors.secondary.secondary100}>
              <FontAwesomeIcon icon={faTerminal} />
            </A.SkillsIcon>
            <h3>Development</h3>

            <ul>
              <li>HTML & CSS</li>
              <li>Sass</li>
              <li>Git</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>React Native</li>
              <li>Redux</li>
              <li>GraphQL</li>
              <li>WordPress</li>
              <li>BEM</li>
              <li>Atomic Design</li>
              <li>No Code</li>
            </ul>
          </div>
          <div>
            <A.SkillsIcon color={colors.secondary.secondary200}>
              <FontAwesomeIcon icon={faSwatchbook} />
            </A.SkillsIcon>
            <h3>Design</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>Web Design</li>
              <li>Graphic Design</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Font Pairing</li>
              <li>Brainstorming</li>
            </ul>
          </div>
          <div>
            <A.SkillsIcon color={colors.secondary.secondary400}>
              <FontAwesomeIcon icon={faTools} />
            </A.SkillsIcon>
            <h3>Tools</h3>
            <ul>
              <li>VSCode</li>
              <li>XCode</li>
              <li>Android Studio</li>
              <li>Illustrator</li>
              <li>Photoshop</li>
              <li>Adobe XD</li>
              <li>Audition</li>
              <li>Notion</li>
              <li>Slack</li>
              <li>Discord</li>
              <li>Kanban</li>
              <li>SCRUM</li>
            </ul>
          </div>
        </A.SkillsGrid>
      </A.Section>
    </A.Container>
  );
};

export default About;
