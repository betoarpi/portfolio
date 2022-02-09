import styled from "styled-components";

export const colors = {
  neutral: {
    neutral800: "#14142B",
    neutral700: "#4E4B66",
    neutral600: "#777990",
    neutral500: "#B2B4C4",
    neutral400: "#D9DBE9",
    neutral300: "#EFF0F6",
    neutral200: "#F6F7FF",
    neutral100: "#FFFFFF",
  },
  secondary: {
    secondary100: "#EBF8FF",
    secondary200: "#FFF5D2",
    secondary300: "#F3FBFF",
    secondary400: "#F3EEFF",
    secondary500: "#f94144",
  },
};

export const shadows = {
  boxshadow:
    "0 8px 16px 0 rgb(20 20 43 / 4%), 0 12px 22px 0 rgb(20 20 43 / 4%)",
};

export const AppContainer = styled.div`
  align-items: center;
  background: ${colors.neutral.neutral100};
  color: ${colors.neutral.neutral600};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  width: 100vw;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.neutral.neutral800};
  }
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const InnerContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 99px);
`;
