import { handleSubmit } from "@/hooks/usefetch";
import React from "react";
import { BaseModal } from "./BaseModal";
import { SocialLogin } from "./SocialLogin";
import { LocalAuthForm } from "./LocalAuth";
import { SubmitButton } from "./SubmitButton";
import { AuthModalFooter } from "./Footer";
import { CloseModalButton } from "./CloseModalButton";

import "@/styles/public/auth_modal.scss";
import { useFormInput } from "@/hooks/useFormInput";
import { AuthModalProps } from "./interface";

export const SignUp: React.FC<AuthModalProps> = ({
  onSwitch,
  closeModal,
  modalRef,
}) => {
  const endpoint = "auth/register/";

  // custom hook
  const { formData, handleInputChange } = useFormInput();

  const onSubmit = () => {
    handleSubmit(formData, endpoint);
  };

  return (
    <BaseModal heading="Join Mediumx" ref={modalRef}>
      <SocialLogin buttonLabel="Sign up" />

      <LocalAuthForm
        formData={formData}
        handleInputChange={handleInputChange}
        onSubmit={onSubmit}
      />

      <SubmitButton buttonLabel="Sign up" onSubmit={onSubmit} />

      <CloseModalButton closeModal={closeModal} />

      <AuthModalFooter>
        <p>
          Already have an account?
          <button onClick={onSwitch}>Sign in</button>
        </p>
      </AuthModalFooter>
    </BaseModal>
  );
};
