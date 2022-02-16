import styled from "styled-components";
import { colors } from "../../theme/theme";

export const Container = styled.div`
  align-items: center;
  column-gap: 2rem;
  display: grid;
  grid-template-columns: 1fr 450px;
  justify-items: center;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr 300px;

    h1 {
      font-size: 3rem;
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 400px 1fr;
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    color: ${colors.neutral.neutral700};
  }

  @media only screen and (max-width: 768px) {
    align-self: start;
  }
`;

interface ImgContainerProps {
  image: string;
}

export const ImgContainer = styled.div<ImgContainerProps>`
  background: ${colors.secondary.secondary200};
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 50%;
  display: flex;
  height: 450px;
  overflow: hidden;
  width: 450px;

  @media only screen and (max-width: 1024px) {
    height: 300px;
    width: 300px;
  }

  @media only screen and (max-width: 768px) {
    grid-row-start: 1;
  }
`;
