import { useEffect, useState } from "react";
import {
  ButtonCustom,
  InputCustom,
  LabelCustom,
  SelectCustom,
} from "../../components/common";

const fromWhereData = [
  {
    label: "matematika",
    value: "matematika",
  },
  {
    label: "ona tili",
    value: "ona_tili",
  },
  {
    label: "inglis",
    value: "english",
  },
];

function AddNewLead() {
  const [value, setValue] = useState<string | string[]>("");

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="flex flex-col gap-7">
      <h2 className=" text-center font-public_sans font-bold text-2xl text-main_color-600">
        Add new lead
      </h2>
      <div>
        <LabelCustom text={"Lead name"} className="mb-1" />
        <InputCustom placeholder="Enter name" />
      </div>
      <div>
        <LabelCustom text={"Lead surname"} className="mb-1" />
        <InputCustom placeholder="Enter surname" />
      </div>
      <div>
        <LabelCustom text={"Phone number"} className="mb-1" />
        <InputCustom value="998" phoneNumber />
      </div>
      <div>
        <LabelCustom text={"From where"} className="mb-1" />
        <SelectCustom data={fromWhereData} getValue={setValue} />
      </div>
      <div>
        <LabelCustom text={"Section"} className="mb-1" />
        <SelectCustom data={fromWhereData} />
      </div>
      <ButtonCustom className="w-full">Create lead</ButtonCustom>
    </div>
  );
}

export default AddNewLead;
