import EmailSvg from "../EmailSvg";
import GoogleSvg from "../GoogleSvg";

interface SocialLoginProps {
  label: string;
}

// interface

export const SocialLogin: React.FC<SocialLoginProps> = ({ label }) => {
  return (
    <div className="content">
      <a className="btns google__btn" href="#">
        <GoogleSvg />

        <span>{label} with Google</span>
        <div></div>
      </a>
      <div className="btns email__btn">
        <EmailSvg />
        <span>{label} with Email</span>
        <div></div>
      </div>
    </div>
  );
};
