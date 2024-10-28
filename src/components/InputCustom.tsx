import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

function VARIANTS(text: string) {
  switch (text) {
    case "blue":
      return {
        div: " rounded-lg border-main_color-200 bg-main_color-100  ",
        input: " placeholder-main_color-300 font-normal text-lg ",
        eye: " w-6 h-6 text-main_color-300 ",
      };
    default:
      return {
        div: " rounded-xl border-line_color ",
        input: " placeholder-line_color font-medium text-base ",
        eye: " w-5 h-5 text-line_color ",
      };
  }
}

function InputCustom({
  className,
  variant,
  placeholder,
  password,
  onChange,
  value,
}: {
  className?: string;
  variant?: string;
  placeholder?: string;
  password?: boolean;
  onChange?: React.Dispatch<React.SetStateAction<string>>;
  value?: string;
}) {
  const [type, SetType] = useState<boolean>(true);
  const [text, SetText] = useState<string>(value || "");

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    SetText(event.target.value);
    if (onChange) onChange(event.target.value);
  };

  return (
    <div
      className={
        " font-public_sans px-3 py-3 w-full border-2 flex gap-5 items-center " +
        VARIANTS(variant || "").div +
        className
      }
    >
      <input
        value={text}
        onChange={handleChange}
        type={type && password ? "password" : "text"}
        className={
          " outline-none bg-transparent w-full " + VARIANTS(variant || "").input
        }
        placeholder={placeholder}
      />
      {password ? (
        <button onClick={() => SetType((prev) => !prev)}>
          {type ? (
            <IoEyeOffOutline className={VARIANTS(variant || "").eye} />
          ) : (
            <IoEyeOutline className={VARIANTS(variant || "").eye} />
          )}
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default InputCustom;
