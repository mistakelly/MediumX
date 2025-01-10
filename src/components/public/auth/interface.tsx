import { AxiosResponse } from "axios";
import { ForwardedRef, ReactNode } from "react";

export interface BaseModalProps {
  heading: string;
  children: ReactNode;
}

export interface LocalAuthFormProps {
  formData: Record<string, string>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface AuthModalProps {
  onSwitch: (e: React.MouseEvent<HTMLButtonElement>) => void;
  closeModal: () => void;
  modalRef: ForwardedRef<HTMLDivElement>;
}

export interface HandleSubmit {
  handleSubmit: (
    formData: Record<string, string>,
    endpoint: string
  ) => Promise<AxiosResponse | void>;
}

export interface AuthButtonProps extends Pick<LocalAuthFormProps, "onSubmit"> {
  buttonLabel: string;
}

export interface closeModalButtonProps
  extends Pick<AuthModalProps, "closeModal"> {}

export interface AuthModalFooterProps
  extends Pick<BaseModalProps, "children"> {}
