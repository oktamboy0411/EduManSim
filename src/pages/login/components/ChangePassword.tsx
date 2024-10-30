import {
  ButtonCustom,
  ChangeLanguage,
  InputCustom,
  LabelCustom,
  LogoType,
} from "../../../components";

function ChangePassword() {
  return (
    <>
      <div className="flex items-center justify-between w-full mb-20">
        <LogoType />
        <ChangeLanguage className=" border-0 " />
      </div>
      <div className=" flex w-full items-start flex-col gap-7">
        <div>
          <h2 className="font-public_sans font-bold text-3xl text-main_color-500 mb-1">
            Change Password
          </h2>
          <p className="font-public_sans text-sm text-main_color-500">
            Please enter a new password for personal security
          </p>
        </div>
        <div className=" w-full ">
          <LabelCustom text="New password" variant="blue" className="mb-3" />
          <InputCustom
            placeholder="Enter new password"
            password
            variant="blue"
          />
        </div>
        <div className=" w-full ">
          <LabelCustom
            text="Repeat new password"
            variant="blue"
            className="mb-3"
          />
          <InputCustom
            placeholder="Repeat new password"
            variant="blue"
            password
          />
        </div>
        <ButtonCustom className=" w-full ">Next</ButtonCustom>
      </div>
    </>
  );
}

export default ChangePassword;
