import styled from "styled-components";
import { colors } from "../../theme/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > h1 {
    text-align: center;
    margin: 4rem 0 0;
  }
`;

export const PortfolioGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  margin: 4rem 0;
  width: 100%;

  > div {
    flex: 0 0 calc(50% - 2rem);

    figure {
      aspect-ratio: 6 / 3.5;
      background: ${colors.neutral.neutral200};
      border-radius: 2rem;
      display: flex;
      margin: 0 0 2rem;
      max-width: 100%;
      overflow: hidden;

      > img {
        height: 100%;
        object-fit: cover;
        width: 100%;
      }
    }

    > div {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 4rem auto;
    max-width: 520px;

    > div {
      flex: 0 0 100%;
    }
  }
`;
//border: 1px solid red;
