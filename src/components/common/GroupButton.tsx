import { Button } from "@material-tailwind/react";
import { ReactNode, useState } from "react";

interface dataType {
  id: string;
  text: ReactNode;
  onClick: () => void;
}

function GroupButton({
  data,
  className,
  active,
  getActive,
}: {
  data: dataType[];
  className?: string;
  active: string;
  getActive?: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [activeValue, setActiveValue] = useState<string>(active);

  return (
    <div className=" rounded-md border-2 inline-block border-main_color-600">
      {data.map((item) => (
        <Button
          key={item.id}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          variant={activeValue === item.id ? "filled" : "text"}
          className={
            " rounded-none font-public_sans font-medium text-sm normal-case py-3 px-16 " +
            (activeValue === item.id
              ? " bg-main_color-600 text-white "
              : " text-main_color-600 bg-main_color-100") +
            className
          }
          onClick={() => {
            setActiveValue(item.id);
            if (getActive) getActive(item.id);
            item.onClick();
          }}
        >
          {item.text}
        </Button>
      ))}
    </div>
  );
}

export default GroupButton;
