import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import ButtonCustom from "./ButtonCustom";
import { MainBoxDataAccordion } from "../../constants";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

function MainBoxAccordion() {
  const [open, setOpen] = useState(0);
  const navigate = useNavigate();

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <Accordion
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      open={open === 1}
      animate={CUSTOM_ANIMATION}
      icon={
        <IoIosArrowDown
          className={
            " w-4 h-4 text-main_color-500 " + (open === 1 ? " rotate-180 " : "")
          }
        />
      }
    >
      <AccordionHeader
        onClick={() => handleOpen(1)}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        className=" px-3 py-[10px] border-0 flex justify-between items-center"
      >
        <div className=" flex items-center gap-2">
          <FiSettings className="w-5 h-5 text-main_color-500" />
          <span className=" font-public_sans font-medium text-sm text-main_color-500">
            Settings
          </span>
        </div>
      </AccordionHeader>
      <AccordionBody>
        {MainBoxDataAccordion.map((item) => (
          <ButtonCustom
            className=" ml-5 border-l-2 rounded-ss-none rounded-es-3xl"
            key={item.id}
            variant="text"
            onClick={() => navigate(item.link)}
          >
            {item.text}
          </ButtonCustom>
        ))}
      </AccordionBody>
    </Accordion>
  );
}

export default MainBoxAccordion;
