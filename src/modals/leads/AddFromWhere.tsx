import {
  ButtonCustom,
  InputCustom,
  LabelCustom,
} from "../../components/common";

function AddFromWhere() {
  return (
    <div className="flex flex-col gap-7">
      <h2 className=" font-public_sans font-bold text-2xl text-main_color-600">
        Add from where
      </h2>
      <div>
        <LabelCustom variant="blue" text={"From where name"} className="mb-1" />
        <InputCustom variant="blue" placeholder="Enter name" />
      </div>
      <ButtonCustom className="w-full">Create from where</ButtonCustom>
    </div>
  );
}

export default AddFromWhere;
