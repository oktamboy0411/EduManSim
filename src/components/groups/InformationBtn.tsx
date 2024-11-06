import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { IoInformationCircleOutline } from "react-icons/io5";

export interface InformationBtnType {
  id: string;
  type: string;
  title: string;
}

function InformationBtn({ data }: { data: InformationBtnType[] }) {
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
            <IoInformationCircleOutline className="w-4 h-4 text-main_color-500" />
          </Button>
        </MenuHandler>
        <MenuList
          className="flex flex-col gap-1"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {data.map(({ id, type, title }) => (
            <MenuItem
              key={id}
              className="flex items-center justify-between gap-10 py-2 pl-2 pr-8"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <h2 className="font-public_sans font-bold text-sm text-main_color-500">
                {title}
              </h2>
              <h3 className=" font-public_sans text-xs">{type}</h3>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
}

export default InformationBtn;
