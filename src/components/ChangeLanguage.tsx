import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { IoGlobeOutline } from "react-icons/io5";
import { useState } from "react";
interface lang {
  id: string;
  name: string;
  value: string;
}

const languages: lang[] = [
  {
    id: "1",
    name: "Eng",
    value: "eng",
  },
  {
    id: "2",
    name: "Rus",
    value: "rus",
  },
  {
    id: "3",
    name: "Uzb",
    value: "uzb",
  },
];

function ChangeLanguage({ className }: { className?: string }) {
  const [selected, setSelected] = useState<lang>(languages[0]);

  return (
    <Menu>
      <MenuHandler>
        <Button
          variant={"text"}
          className={
            " border-2 rounded-lg outline-main_color-500 border-main_color-500 px-4 py-2 flex items-center gap-1 normal-case " +
            className
          }
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <IoGlobeOutline className=" w-6 h-6 text-main_color-500 " />
          <p className=" text-main_color-500 font-public_sans font-normal text-base">
            {selected?.name}
          </p>
        </Button>
      </MenuHandler>
      <MenuList
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {languages.map((item) => (
          <MenuItem
            className="flex items-center gap-1"
            onClick={() => setSelected(item)}
            key={item.id}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <IoGlobeOutline className=" w-6 h-6 text-main_color-500" />
            <p className=" text-main_color-500 font-public_sans font-normal text-base">
              {item.name}
            </p>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default ChangeLanguage;
