import { IoMdMore } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { IconType } from "react-icons";
import { RiDeleteBin5Line } from "react-icons/ri";

interface itemsType {
  id: string;
  icon: IconType;
  text: string;
  onClick: () => void;
}

const items: itemsType[] = [
  {
    id: "1",
    icon: CiEdit,
    text: "Edit",
    onClick: () => {},
  },
  {
    id: "2",
    icon: RiDeleteBin5Line,
    text: "Delete",
    onClick: () => {},
  },
];

function FromWhere({
  data,
}: {
  data: { id: string; title: string; counter: number };
}) {
  return (
    <div className="flex items-center justify-between border-2 border-line_color py-2 rounded-xl">
      <div className="pl-4">
        <h3 className=" font-public_sans font-normal text-sm">{data.title}</h3>
        <h2 className=" font-public_sans font-bold text-2xl text-main_color-500">
          {data.counter}
        </h2>
      </div>
      <Menu>
        <MenuHandler>
          <Button
            variant="text"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="p-2"
          >
            <IoMdMore className="w-6 h-6 text-main_color-500" />
          </Button>
        </MenuHandler>
        <MenuList
          className="flex flex-col gap-2"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {items.map(({ id, icon: Icon, text, onClick }) => (
            <MenuItem
              key={id}
              className="flex items-center gap-2 py-2 pl-2 pr-8"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onClick={onClick}
            >
              <Icon className=" w-4 h-4 text-main_color-500" />
              <span className="font-public_sans font-medium text-sm text-main_color-500">{text}</span>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
}

export default FromWhere;
