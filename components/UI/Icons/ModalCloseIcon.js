import React from "react";

const ModalCloseIcon = ({onCloseModal}) => {
  return (
    <svg
      onClick={() => onCloseModal(false)}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.7925 1.00391L1.00781 12.7886"
        stroke="#010A1B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.7945 12.797L1 1"
        stroke="#010A1B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ModalCloseIcon;
