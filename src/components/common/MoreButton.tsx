import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { IoMdMore } from "react-icons/io";
import { IconType } from "react-icons";

export interface MoreBtnType {
  id: string;
  icon: IconType;
  text: string;
  onClick: () => void;
}

function MoreButton({
  data,
  className,
}: {
  data: MoreBtnType[];
  className?: string;
}) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Menu>
        <MenuHandler>
          <Button
            variant="text"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="p-2"
          >
            <IoMdMore className={" w-6 h-6 text-main_color-500 " + className} />
          </Button>
        </MenuHandler>
        <MenuList
          className="flex flex-col gap-1"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {data.map(({ id, icon: Icon, text, onClick }) => (
            <MenuItem
              key={id}
              className="flex items-center gap-2 py-2 pl-2 pr-8"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onClick={onClick}
            >
              <Icon className=" w-4 h-4 text-main_color-500" />
              <span className="font-public_sans font-medium text-sm text-main_color-500">
                {text}
              </span>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
}

export default MoreButton;
