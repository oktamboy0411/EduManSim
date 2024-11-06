import { useRef, useState } from "react";
import { IoCalendarClearOutline } from "react-icons/io5";

const VARIANTS = (variant: string) => {
  switch (variant) {
    case "blue":
      return {
        input: " text-main_color-500 ",
        div: " border-main_color-200 ",
        icon: " text-main_color-500 ",
      };
    default:
      return {
        input: "",
        div: "",
        icon: "",
      };
  }
};

function SelectDate({
  getValue,
  variant,
}: {
  getValue?: React.Dispatch<React.SetStateAction<string>>;
  variant?: string;
}) {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    if (getValue) getValue(e.target.value);
  };

  const handleIconClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  return (
    <div
      className={
        "flex items-center gap-3 border-2 border-line_color rounded-xl px-4 py-3 " +
        VARIANTS(variant || "").div
      }
    >
      <IoCalendarClearOutline
        className={" w-6 h-6 " + VARIANTS(variant || "").icon}
        onClick={handleIconClick}
      />
      <input
        type="date"
        ref={dateInputRef}
        value={selectedDate}
        onChange={handleDateChange}
        placeholder="Select data"
        className={
          "no-icon-input w-full outline-none border-none font-public_sans font-medium text-base" +
          VARIANTS(variant || "").input
        }
      />
    </div>
  );
}

export default SelectDate;
