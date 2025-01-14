import PasswordSvg from "../../svg/PasswordSvg";
import PersonSvg from "../../svg/PersonSvg";
import { LocalAuthFormProps } from "./interface";

export const LocalAuthForm: React.FC<LocalAuthFormProps> = ({
  formData,
  handleInputChange,
}) => (
  <section className="local-auth-container">
    <div className="heading">
      <PersonSvg />
      <p>Username & Password</p>
      <PasswordSvg />
    </div>

    <form>
      <div className="local-auth-div">
        <label htmlFor="username">Username:</label>
        <input
          name="username"
          type="text"
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>

      <div className="local-auth-div">
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          type="text"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
    </form>
  </section>
);
