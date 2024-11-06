import {
  ButtonCustom,
  LabelCustom,
  SelectCustom,
  SelectDate,
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

function AddToGroup() {
  return (
    <div className="flex flex-col gap-7">
      <h2 className=" font-public_sans font-bold text-2xl text-main_color-600">
        Add to group
      </h2>
      <div>
        <LabelCustom variant="blue" text={"Select group"} className="mb-1" />
        <SelectCustom placeholder="Select group to add" data={fromWhereData} />
      </div>
      <div>
        <LabelCustom variant="blue" text={"Date form"} className="mb-1" />
        <SelectDate />
      </div>
      <ButtonCustom className="w-full">Add to group</ButtonCustom>
    </div>
  );
}

export default AddToGroup;
