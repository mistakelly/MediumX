import { AuthModalFooterProps } from "./interface";

export const AuthModalFooter: React.FC<AuthModalFooterProps> = ({
  children,
}) => {
  return <div className="footer">{children}</div>;
};
