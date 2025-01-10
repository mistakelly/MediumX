import { handleSubmit } from "@/hooks/usefetch";
import { useState } from "react";
import { BaseModal } from "./BaseModal";
import { SocialLogin } from "./SocialLogin";
import { LocalAuthForm } from "./LocalAuth";
import { AuthButton } from "./AuthButton";
import { AuthModalFooter } from "./Footer";
import { CloseModalButton } from "./CloseModalButton";
import { AuthModalProps } from "./interface";

import "@/styles/public/auth_modal.scss";

export const SignIn: React.FC<AuthModalProps> = ({
  onSwitch,
  closeModal,
  modalRef,
}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // const endpoint = mode == "signup" ? "register" : "login";
  const endpoint = "";

  const onSubmit = () => {
    handleSubmit(formData, endpoint);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <BaseModal heading="Welcome To Mediumx" ref={modalRef}>
      <SocialLogin label="Sign in" />
      <LocalAuthForm
        formData={formData}
        handleInputChange={handleInputChange}
        onSubmit={onSubmit}
      />
      <AuthButton buttonLabel="Sign In" onSubmit={onSubmit} />
      <CloseModalButton closeModal={closeModal} />
      <AuthModalFooter>
        <p>
          No account?
          <button onClick={onSwitch}>Create one</button>
        </p>
      </AuthModalFooter>
    </BaseModal>
  );
};
