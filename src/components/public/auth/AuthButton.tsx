import { AuthButtonProps } from "./interface";

export const AuthButton: React.FC<AuthButtonProps> = ({
  buttonLabel,
  onSubmit,
}) => {
  return (
    <>
      <div className="submit-btn">
        <button className="submit-btn" onClick={onSubmit}>
          {buttonLabel}
        </button>
      </div>
    </>
  );
};
