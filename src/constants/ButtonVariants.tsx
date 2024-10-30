import { variant } from "@material-tailwind/react/types/components/button";

interface variantType {
  className: string;
  variant: variant;
}

function ButtonVariants(text: string) {
  const res: variantType = { className: "", variant: "filled" };
  switch (text) {
    case "outline":
      res.className =
        " rounded-xl font-medium text-main_color-500 border-main_color-500 border-2 py-[19px] px-16 ";
      res.variant = "outlined";
      break;
    case "text":
      res.className =
        " rounded-xl font-medium text-main_color-500 py-[10px] px-3 w-full flex items-center justify-start gap-2 ";
      res.variant = "text";
      break;
    default:
      res.className =
        " rounded-lg bg-main_color-500 font-normal px-10 py-[10px] ";
      res.variant = "filled";
      break;
  }
  return res;
}

export default ButtonVariants;
