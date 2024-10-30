import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { InputVariants } from "../constants";

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
        InputVariants(variant || "").div +
        className
      }
    >
      <input
        value={text}
        onChange={handleChange}
        type={type && password ? "password" : "text"}
        className={
          " outline-none bg-transparent w-full " +
          InputVariants(variant || "").input
        }
        placeholder={placeholder}
      />
      {password ? (
        <button onClick={() => SetType((prev) => !prev)}>
          {type ? (
            <IoEyeOffOutline className={InputVariants(variant || "").eye} />
          ) : (
            <IoEyeOutline className={InputVariants(variant || "").eye} />
          )}
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default InputCustom;
