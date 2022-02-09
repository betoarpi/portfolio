import styled from "styled-components";
import { colors } from "../../theme/theme";

export const ButtonLink = styled.div`
  display: flex;

  a {
    align-items: center;
    background: ${colors.neutral.neutral800};
    border-radius: 2rem;
    color: ${colors.neutral.neutral200};
    display: flex;
    margin: 1rem 0;
    padding: 1rem 2rem;
    position: relative;
    justify-content: center;
    text-decoration: none;
    transition: all 300ms ease-in-out;
    flex-basis: 280px;

    &:hover {
      background: ${colors.neutral.neutral700};
      color: ${colors.neutral.neutral100};
      transform: translateY(-0.125rem);
    }
  }
`;

export const SubmitButton = styled.button`
  all: initial;
  align-items: center;
  background: ${colors.neutral.neutral800};
  border-radius: 2rem;
  color: ${colors.neutral.neutral200};
  cursor: pointer;
  display: flex;
  font-family: Satoshi;
  font-size: 1.25rem;
  margin: 2rem 0 0;
  padding: 1rem 2rem;
  position: relative;
  justify-content: center;
  text-decoration: none;
  transition: all 300ms ease-in-out;
  flex-basis: 280px;

  &:hover {
    background: ${colors.neutral.neutral700};
    color: ${colors.neutral.neutral100};
    transform: translateY(-0.125rem);
  }
`;
