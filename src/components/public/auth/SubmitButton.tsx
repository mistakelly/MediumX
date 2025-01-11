import { AuthButtonProps } from "./interface";

export const SubmitButton: React.FC<AuthButtonProps> = ({
  buttonLabel,
  onSubmit,
}) => {
  return (
    <>
      <div>
        <button className="submit-btn" onClick={onSubmit}>
          {buttonLabel}
        </button>
      </div>
    </>
  );
};
