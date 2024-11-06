import {
  ButtonCustom,
  InputCustom,
  LabelCustom,
} from "../../components/common";

function AddNewSections() {
  return (
    <div className="flex flex-col gap-7">
      <h2 className=" font-public_sans font-bold text-2xl text-main_color-600">
        Add section
      </h2>
      <div>
        <LabelCustom variant="blue" text={"Section name"} className="mb-1" />
        <InputCustom variant="blue" placeholder="Enter section name" />
      </div>
      <ButtonCustom className="w-full">Create section</ButtonCustom>
    </div>
  );
}

export default AddNewSections;
