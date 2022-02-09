import { ReactChildren, ReactElement } from "react";
import * as B from "./styles";

interface PrimaryButtonLinkProps {
  to: string;
  children?: ReactChildren;
  label?: string;
}

const PrimaryButtonLink = ({
  children,
  label,
  to,
}: PrimaryButtonLinkProps): ReactElement => {
  return (
    <B.ButtonLink>
      <a href={to} target="_blank" rel="noreferrer">
        {label && label}
        {children && children}
      </a>
    </B.ButtonLink>
  );
};

interface SubmitProps {
  children?: ReactChildren;
  label?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Submit = ({
  children,
  label,
  type,
}: SubmitProps): ReactElement => {
  return (
    <B.SubmitButton type={type}>
      {label && label}
      {children && children}
    </B.SubmitButton>
  );
};

export default PrimaryButtonLink;
