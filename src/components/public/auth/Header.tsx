import "@/styles/public/header.scss";
import "@/styles/public/header.scss";
import { useModalVisibility } from "@/hooks/authmodal_hook";
import React, { useState } from "react";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";

const PublicHeader = () => {
  const { isModalVisible, setIsModalVisible, modalRef } = useModalVisibility();

  const [modalType, SetModalType] = useState<"signIn" | "signUp" | null>(null);

  // use function currying to dynamically set which model to open when a toggle button
  const openModal = (type: "signUp" | "signIn") => (e: React.MouseEvent) => {
    e.stopPropagation();
    SetModalType(type);
    setIsModalVisible((prev) => !prev);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <h1 className="app_logo">MEDIUMX</h1>
        <ul className="nav__ul">
          <li>
            <a href="#">Our Story</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <button onClick={openModal("signIn")}>Sign In</button>
          <button className="nav__cta" onClick={openModal("signUp")}>
            Get Started
          </button>
          {/* Auth Modal */}
          {isModalVisible && modalType === "signIn" && (
            <SignIn
              onSwitch={(e) => {
                e.stopPropagation();
                SetModalType("signUp");
              }}
              closeModal={closeModal}
              modalRef={modalRef}
            />
          )}
          {isModalVisible && modalType === "signUp" && (
            <SignUp
              onSwitch={(e) => {
                e.stopPropagation();
                SetModalType("signIn");
              }}
              closeModal={closeModal}
              modalRef={modalRef}
            />
          )}
        </ul>
      </nav>
    </header>
  );
};

export default PublicHeader;
