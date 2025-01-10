import CancelSvg from "./CancelSvg";
import { closeModalButtonProps } from "./interface";

export const CloseModalButton: React.FC<closeModalButtonProps> = ({
  closeModal,
}) => {
  return (
    <div className="cancel_btn" onClick={closeModal} aria-label="Close modal">
      <CancelSvg />
    </div>
  );
};
