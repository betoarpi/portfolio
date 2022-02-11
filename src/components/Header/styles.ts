import styled from "styled-components";
import { colors } from "../../theme/theme";

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  margin: 2rem 0;
  width: 100%;
`;

export const Navigation = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  > li {
    color: ${colors.neutral.neutral700};
    font-size: 1.25rem;
    font-weight: 700;

    &.active {
      a {
        &:before {
          background: ${colors.secondary.secondary400};
          opacity: 1;
        }

        &:hover {
          &:before {
            background: ${colors.secondary.secondary200};
          }
        }
      }
    }
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

  @media only screen and (max-width: 767px) {
    display: none;

    &.mobile-menu-active {
      align-items: center;
      background: ${colors.neutral.neutral100};
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 100;

      li {
        font-size: 2rem;
      }
    }
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;

  svg {
    color: ${colors.neutral.neutral800};
    fill: ${colors.neutral.neutral800};
    transition: all 300ms ease-in-out;
  }

  &:hover {
    svg {
      color: ${colors.neutral.neutral600};
      fill: ${colors.neutral.neutral600};
    }
  }

  @media only screen and (max-width: 767px) {
    display: flex;
  }
`;

export const CloseIcon = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 110;

  svg {
    color: ${colors.neutral.neutral500};
    fill: ${colors.neutral.neutral500};
    transition: all 300ms ease-in-out;
  }

  &:hover {
    svg {
      color: ${colors.neutral.neutral800};
      fill: ${colors.neutral.neutral800};
    }
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
