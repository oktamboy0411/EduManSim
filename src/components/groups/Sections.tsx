import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { MoreBtnType, MoreButton } from "../common";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

type MyComponentProps = {
  title: string;
  counter: number;
};

const items: MoreBtnType[] = [
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
  {
    id: "3",
    icon: FaPlus,
    text: "Create Group",
    onClick: () => {},
  },
];

const Sections: React.FC<React.PropsWithChildren<MyComponentProps>> = ({
  title,
  counter,
  children,
}) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <Accordion
      open={open === 1}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      className=" py-2 pl-4 border-2 border-line_color rounded-xl "
    >
      <AccordionHeader
        className=" border-none p-0 "
        onClick={() => handleOpen(1)}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className=" flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <h2 className=" font-public_sans text-lg">{title}</h2>
            <h3 className=" font-public_sans font-bold text-sm text-main_color-400 bg-main_color-100 rounded-full p-1 ">
              {counter}
            </h3>
          </div>
          <div className="flex items-center gap-0">
            <IoIosArrowDown
              className={
                " w-5 h-5 mr-2 text-main_color-500 " +
                (open === 1 ? " rotate-180 " : "")
              }
            />
            <MoreButton data={items} />
          </div>
        </div>
      </AccordionHeader>
      <AccordionBody>
        <div className="pr-4">{children}</div>
      </AccordionBody>
    </Accordion>
  );
};

export default Sections;
