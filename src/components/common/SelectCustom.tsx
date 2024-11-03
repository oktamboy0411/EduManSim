import { Option, Select } from "@material-tailwind/react";
import { useState } from "react";

// function VARIANTS(text:string){
//     switch(text){
//         case " ":
//             break;
//         default: 
//     }
// }

function SelectCustom() {
  const [value, setValue] = useState("");
  return (
    <Select
      value={value}
      onChange={(val) => setValue(val || "")}
      size="lg"
      color="blue"
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <Option>salom</Option>
      <Option>hayr</Option>
      <Option>salom</Option>
      <Option>hayr</Option>
    </Select>
  );
}

export default SelectCustom;
