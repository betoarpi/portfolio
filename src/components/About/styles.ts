import styled from "styled-components";
import { colors } from "../../theme/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Intro = styled.div`
  align-items: center;
  display: flex;
  gap: 4rem;
  margin: 4rem 0;
  width: 100%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  background-image: url(${require("../../theme/images/about-rob.jpeg")});
  background-size: cover;
  border-radius: 2rem;
  display: flex;
  height: 80vh;
  flex: 0 0 520px;

  img {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    max-width: 100%;
    width: 520px;
  }
`;

export const MyStory = styled.div`
  display: flex;
  gap: 4rem;
  margin: 4rem 0;
  > div {
    display: block;
    width: 50%;

    img {
      border-radius: 2rem;
      heigth: auto;
      margin-bottom: 2rem;
      width: 100%;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;

    > div {
      width: 100%;

      &:last-child {
        margin: 0 auto;
        max-width: 520px;
      }
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  display: flex;
  justify-content: center;
`;

export const CardGid = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr 1fr;
  margin: 4rem 0;
  padding: 2rem 0;
  position: relative;

  > div {
    position: relative;
    z-index: 1;
  }

  &:before {
    background: ${colors.secondary.secondary300};
    border-radius: 2rem;
    content: " ";
    height: 100%;
    left: 50%;
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    width: 80%;
    z-index: 0;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 4rem auto;
    max-width: 520px;
  }
`;

export const Card = styled.div`
  background: ${colors.neutral.neutral100};
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const CardHeader = styled.a`
  align-items: center;
  color: ${colors.neutral.neutral700};
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  text-decoration: none;

  svg {
    height: 14px;
    transition: all 300ms ease-in-out;
    width: 14px;
  }

  &:hover {
    svg {
      transform: translate(0.085rem, -0.085rem) scale(1.1, 1.1);
    }
  }

  &.non-clickable {
    pointer-events: none;
  }
`;

export const CardLogo = styled.img`
  border: 1px solid ${colors.neutral.neutral300};
  border-radius: 0.5rem;
  object-fit: cover;
  height: 40px;
  width: 40px;
`;

export const CardHeading = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  span {
    color: ${colors.neutral.neutral500};
    font-size: 0.9rem;
  }
`;

export const SkillsGrid = styled.div`
  background: ${colors.neutral.neutral200};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  margin: 4rem 0;
  width: 100%;

  > div {
    align-items: center;
    background: ${colors.neutral.neutral100};
    display: flex;
    flex-direction: column;
    padding: 0 2rem;

    ul {
      margin: 0;
      padding: 0;
      text-align: center;
      width: 100%;

      > li {
        border-bottom: 1px solid ${colors.neutral.neutral200};
        list-style: none;
        padding: 0.3rem 0;
      }
    }
  }

  @media screen and (max-width: 767px) {
    gap: initial;
    grid-template-columns: 1fr;
    margin: 4rem auto;
    max-width: 520px;

    > div {
      padding: 2rem;

      &:first-child {
        padding-top: 0;
      }
    }
  }
`;

interface SkillIconProps {
  color: string;
}

export const SkillsIcon = styled.div<SkillIconProps>`
  align-items: center;
  background: ${({ color }) => color};
  border-radius: 1rem;
  color: ${colors.neutral.neutral700};
  display: flex;
  justify-content: center;
  height: 80px;
  margin-bottom: 1rem;
  width: 80px;

  > svg {
    height: 32px;
    width: 32px !important;
  }
`;
