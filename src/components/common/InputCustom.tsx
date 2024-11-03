import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { InputVariants } from "../../constants";
import InputMask from "react-input-mask";

function InputCustom({
  className,
  variant,
  placeholder,
  password,
  onChange,
  value,
  phoneNumber,
}: {
  className?: string;
  variant?: string;
  placeholder?: string;
  password?: boolean;
  onChange?: React.Dispatch<React.SetStateAction<string>>;
  value?: string;
  phoneNumber?: boolean;
}) {
  const [type, SetType] = useState<boolean>(true);
  const [text, SetText] = useState<string>(value || "");

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const input = event.target.value;
    SetText(input);
    if (onChange) onChange(input);
  };

  return (
    <div
      className={
        " font-public_sans px-3 py-3 w-full border-2 flex gap-5 items-center " +
        InputVariants(variant || "").div +
        className
      }
    >
      <InputMask
        mask={phoneNumber ? "+999-(99)-999-99-99" : ""}
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
