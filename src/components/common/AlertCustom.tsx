import { Alert } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

const CUSTOM_ANIMATION = {
  mount: { scale: 1, translateY: 0 },
  unmount: { scale: 0, translateY: 100 },
};

function AlertCustom() {
  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 3000); // 3 sekunddan so'ng o'zgaradi

    return () => clearTimeout(timer); // Tozalash funksiyasi (komponent o'chirilganda)
  }, [open]);

  return (
    <Alert
      open={open}
      animate={CUSTOM_ANIMATION}
      icon={<FaCircleCheck className="h-6 w-6" />}
      className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946] fixed w-96 bottom-3 right-1"
    >
      A simple alert for showing message.
    </Alert>
  );
}

export default AlertCustom;
