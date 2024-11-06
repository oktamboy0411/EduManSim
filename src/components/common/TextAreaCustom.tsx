import { useEffect, useState } from "react";

function TextAreaCustom({
  getValue,
  placeholder,
  value,
  rows,
}: {
  getValue?: React.Dispatch<React.SetStateAction<string | undefined>>;
  placeholder?: string;
  value?: string;
  rows?: number;
}) {
  const [valueItem, setValueItem] = useState<string>(value || "");

  const handleClick = (item: string) => {
    setValueItem(item);
    if (getValue) getValue(item);
  };

  useEffect(() => {
    setValueItem(value || "");
  }, [value]);

  return (
    <textarea
      value={valueItem}
      onChange={(e) => handleClick(e.target.value)}
      placeholder={placeholder}
      className=" rounded-lg outline-none px-4 py-2 w-full bg-main_color-100 border-[1px] border-main_color-200 font-public_sans text-lg text-main_color-600 placeholder:text-main_color-200 resize-none"
      rows={rows}
    />
  );
}

export default TextAreaCustom;
