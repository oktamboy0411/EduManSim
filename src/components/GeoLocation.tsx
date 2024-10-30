import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

function GeoLocation() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <Accordion
      open={open === 1}
      animate={CUSTOM_ANIMATION}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      className=" w-full "
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
        className=" px-3 py-[10px] flex items-center justify-between border-0 w-full "
      >
        <div className="flex gap-2 items-center">
          <GrMapLocation className="w-5 h-5 text-main_color-500" />
          <span className=" font-public_sans font-medium text-sm text-main_color-500">
            Termiz
          </span>
        </div>
      </AccordionHeader>
      <AccordionBody>
        <p>map</p>
        <p>map</p>
      </AccordionBody>
    </Accordion>
  );
}

export default GeoLocation;
