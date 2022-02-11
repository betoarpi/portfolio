import styled from "styled-components";
import { colors } from "../../theme/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > h1 {
    text-align: center;
    margin: 4rem 0 2rem;
  }

  > p {
    margin: 0 auto;
    max-width: 790px;
    text-align: center;
  }
`;

export const FormContainer = styled.div`
  border: 1px solid ${colors.neutral.neutral400};
  border-radius: 2rem;
  margin: 4rem 0;
  padding: 2rem;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 4rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;

    > button {
      flex: initial;
    }
  }
`;

export const FormCol = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;

  > div {
    display: flex;
    flex-direction: column;

    .error {
      color: ${colors.secondary.secondary500};
      font-size: 1rem;
      margin: 0 1rem;
      padding: 0.25rem 0.5rem;
    }
  }

  label {
    color: ${colors.neutral.neutral800};
    font-weight: 700;
    margin-bottom: 1rem;
    padding: 0 1rem;
  }

  input,
  textarea {
    border: 1px solid ${colors.neutral.neutral400};
    border-radius: 2rem;
    color: ${colors.neutral.neutral600};
    font-family: Satoshi;
    font-size: 1.25rem;
    padding: 1rem 2rem;

    &:focus {
      border-color: ${colors.neutral.neutral600};
      color: ${colors.neutral.neutral700};
      outline: none;
    }
  }

  textarea {
    height: 200px;
    padding: 2rem;
  }
`;

export const SuccessMessage = styled.div`
  background: ${colors.secondary.secondary100};
  border-radius: 2rem;
  color: ${colors.neutral.neutral700};
  padding: 1rem 2rem;
`;

export const ErrorMessage = styled.div`
  background: ${colors.secondary.secondary200};
  border-radius: 2rem;
  color: ${colors.secondary.secondary500};
  padding: 1rem 2rem;
`;

//border: 1px solid red;
