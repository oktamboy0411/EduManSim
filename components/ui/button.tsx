import React from "react";

function Button({
  text,
  onClick,
  className,
}: {
  text: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      className={
        " py-3 px-10 bg-main-color-500 rounded-lg font-public-sans font-normal text-base text-white " +
        className
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
