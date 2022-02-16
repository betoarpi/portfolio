import * as H from "./styles";
// @ts-ignore
import RobImg from "../../theme/images/rob.png";

const Home = () => {
  return (
    <H.Container>
      <H.Intro>
        <h3>Hello 👋 I'm Rob Arroyo</h3>
        <h1>I'm a Mobile Software Engineer with a background in UI Design</h1>
      </H.Intro>
      <H.ImgContainer image={RobImg} />
    </H.Container>
  );
};

export default Home;
