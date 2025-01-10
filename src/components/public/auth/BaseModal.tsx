import { BaseModalProps } from "./interface";
import React from "react";

export const BaseModal = React.forwardRef(
  (
    { children, heading }: BaseModalProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <section className="auth-modal" ref={ref}>
        <h1 className="title">{heading}</h1>
        <div className="content">{children}</div>
      </section>
    );
  }
);

BaseModal.displayName = "BaseModal";
