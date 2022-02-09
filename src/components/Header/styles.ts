import styled from "styled-components";
import { colors } from "../../theme/theme";

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  margin: 2rem 0;
  width: 100%;
`;

export const Logo = styled.div`
  color: ${colors.neutral.neutral700};
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
  gap: 1rem;
  margin-right: auto;

  svg {
    height: 32px;
  }

  > a {
    align-items: center;
    color: ${colors.neutral.neutral800};
    display: flex;
    gap: 1rem;
    text-decoration: none;
  }
`;

export const Navigation = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;

  > li {
    color: ${colors.neutral.neutral700};
    font-size: 1.25rem;
    font-weight: 700;
  }

  a {
    color: ${colors.neutral.neutral700};
    padding: 0 0.25rem;
    position: relative;
    text-decoration: none;

    span {
      position: relative;
      z-index: 1;
    }

    &:hover {
      &:before {
        opacity: 1;
      }
    }

    &:before {
      background: ${colors.secondary.secondary200};
      bottom: 0;
      content: " ";
      display: block;
      height: 50%;
      opacity: 0;
      position: absolute;
      width: 100%;
      z-index: 0;
    }
  }
`;
