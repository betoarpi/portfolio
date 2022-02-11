import styled from "styled-components";
import { colors } from "../../theme/theme";

export const Logo = styled.div`
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

export const IconContainer = styled.div`
  display: flex;
  position: relative;

  svg {
    fill: ${colors.neutral.neutral700};
    position: relative;
    z-index: 0;

    &:first-child {
      fill: #ffd166;
      left: -6px;
      opacity: 0.5;
      position: absolute;
      top: 3px;
      z-index: 0;
    }
  }
`;
