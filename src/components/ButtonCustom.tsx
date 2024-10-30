import { Button } from "@material-tailwind/react";
import { ButtonVariants } from "../constants";
import React from "react";

type MyComponentProps = {
  variant?: string;
  className?: string;
  onClick?: () => void;
};

const ButtonCustom: React.FC<React.PropsWithChildren<MyComponentProps>> = ({
  onClick,
  variant,
  className,
  children,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={ButtonVariants(variant || "").variant}
      className={
        "  font-public_sans text-base normal-case " +
        ButtonVariants(variant || "").className +
        className
      }
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {children}
    </Button>
  );
};

export default ButtonCustom;
