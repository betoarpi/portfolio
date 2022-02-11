import styled from "styled-components";
import { colors } from "../../theme/theme";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 2rem 2rem;
  width: 100%;
`;

export const Container = styled.div`
  border-top: 1px solid ${colors.neutral.neutral400};
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  max-width: 1200px;
  padding: 4rem 2rem 0 2rem;
  width: 100%;

  @media only screen and (max-width: 519px) {
    flex-direction: column;
  }
`;

export const SocialMedia = styled.div`
  display: flex;

  ul {
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;

    li {
      list-style: none;

      a {
        &:hover {
          svg {
            fill: ${colors.neutral.neutral800};
          }
        }
      }

      svg {
        transition: all 300ms ease-in-out;
        height: 24px;
        fill: ${colors.neutral.neutral600};
      }
    }
  }
`;
