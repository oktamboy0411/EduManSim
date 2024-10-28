import { Button } from "@material-tailwind/react";
import { variant } from "@material-tailwind/react/types/components/button";
import { ReactNode } from "react";

interface variantType {
  className: string;
  variant: variant;
}

function VARIANTS(text: string) {
  const res: variantType = { className: "", variant: "filled" };
  switch (text) {
    case "outline":
      res.className =
        " rounded-xl font-medium text-main_color-500 border-main_color-500 border-2 py-[19px] px-16 ";
      res.variant = "outlined";
      break;
    default:
      res.className =
        " rounded-lg bg-main_color-500 font-normal px-10 py-[10px] ";
      res.variant = "filled";
      break;
  }
  return res;
}

function ButtonCustom({
  text,
  onClick,
  variant,
  className,
}: {
  text: ReactNode;
  variant?: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Button
      onClick={onClick}
      variant={VARIANTS(variant || "").variant}
      className={
        "  font-public_sans text-base normal-case " +
        VARIANTS(variant || "").className +
        className
      }
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {text}
    </Button>
  );
}

export default ButtonCustom;
