import { ReactChild, ReactChildren, ReactElement } from "react";
import * as B from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

interface PrimaryButtonLinkProps {
  to: string;
  children?: ReactChildren | ReactChild;
  label?: string;
  isLoading?: boolean;
}

const PrimaryButtonLink = ({
  children,
  label,
  isLoading,
  to,
}: PrimaryButtonLinkProps): ReactElement => {
  return (
    <B.ButtonLink>
      <a href={to} target="_blank" rel="noreferrer">
        {label && !isLoading && label}
        {children && !isLoading && children}
        {isLoading && <FontAwesomeIcon icon={faSpinner} spin color="white" />}
      </a>
    </B.ButtonLink>
  );
};

interface SubmitProps {
  children?: ReactChildren | ReactChild;
  label?: string;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Submit = ({
  children,
  label,
  isLoading,
  type,
}: SubmitProps): ReactElement => {
  return (
    <B.SubmitButton type={type}>
      {label && !isLoading && label}
      {children && !isLoading && children}
      {isLoading && <FontAwesomeIcon icon={faSpinner} spin color="white" />}
    </B.SubmitButton>
  );
};

export default PrimaryButtonLink;
