import { ReactNode, useEffect, useRef, useState } from "react";

export const useModalVisibility = (initialVisibility = false) => {
  const [isModalVisible, setIsModalVisible] = useState(initialVisibility);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log(`isModalVisible inside custom hook use effect`, isModalVisible);

    const handleClickOutside = (event: MouseEvent) => {
      console.log("modal ref", modalRef);

      if (
        isModalVisible &&
        modalRef.current &&
        !modalRef.current.contains(event.target as HTMLElement)
      ) {
        console.log("yes its clicked outside");
        setIsModalVisible((prev) => !prev);
      }
    };

    const body = document.body;

    if (isModalVisible) {
      console.log(`isModalVisible inside toggle visibility`, isModalVisible);
      body.classList.add("body-prevent-scroll", "modal-active");
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      console.log(`isModalVisible inside clean up method`, isModalVisible);
      body.classList.remove("body-prevent-scroll", "modal-active");
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isModalVisible]);

  return { isModalVisible, setIsModalVisible, modalRef };
};

// const handleClickOutside = (event: MouseEvent) => {
//   console.log(event);
//   //   if (
//   //     isModalVisible &&
//   //     modalRef.current &&
//   //     !modalRef.current.contains(event.target as HTMLElement)
//   //   ) {
//   //     console.log(`isModalVisible inside if condition`, isModalVisible);
//   //     // setIsModalVisible(false);
// };
// // };

// body.classList.remove("body-prevent-scroll", "modal-active");
// document.removeEventListener("click", handleClickOutside);
