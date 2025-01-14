import EmailSvg from "../../svg/EmailSvg";
import GoogleSvg from "../../svg/GoogleSvg";
import { SocialLoginProps } from "./interface";

export const SocialLogin: React.FC<SocialLoginProps> = ({ buttonLabel }) => {
  return (
    <div className="content">
      <a className="btns google__btn" href="#">
        <GoogleSvg />

        <span className="social-auth__label">{buttonLabel} with Google</span>
        <div></div>
      </a>
      <div className="btns email__btn">
        <EmailSvg />
        <span className="social-auth__label">{buttonLabel} with Email</span>
        <div></div>
      </div>
    </div>
  );
};
