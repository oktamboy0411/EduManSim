import { Button } from "@material-tailwind/react";
import { FaPlus } from "react-icons/fa6";

type MyComponentProps = {
  nameText: string;
  className?: string;
  onClick?: () => void;
};

const GroupList: React.FC<React.PropsWithChildren<MyComponentProps>> = ({
  className,
  children,
  nameText,
  onClick,
}) => {
  return (
    <div className={" rounded-2xl p-5 bg-white " + className}>
      <h2 className=" font-public_sans font-bold text-2xl text-main_color-500 mb-5 ">
        {nameText}
      </h2>
      <Button
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        variant={"outlined"}
        className=" rounded-xl border-line_color outline-line_color mb-5 w-full flex items-center justify-center"
        onClick={onClick}
      >
        <FaPlus className="w-5 h-5" />
      </Button>
      <div className="flex flex-col w-full gap-2">{children}</div>
    </div>
  );
};

export default GroupList;
