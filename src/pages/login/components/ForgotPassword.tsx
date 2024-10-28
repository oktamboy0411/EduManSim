import { Button } from "@material-tailwind/react";
import {
  ButtonCustom,
  ChangeLanguage,
  InputCustom,
  LabelCustom,
  LogoType,
} from "../../../components";
import { IoIosArrowBack } from "react-icons/io";

function ForgotPassword() {
  return (
    <>
      <div className="flex items-center justify-between w-full mb-20">
        <LogoType />
        <ChangeLanguage className=" border-0 " />
      </div>
      <div className="w-full flex items-start justify-center flex-col gap-7">
        <h2 className=" font-public_sans font-bold text-3xl text-main_color-500">
          Forgot password
        </h2>
        <div className=" w-full ">
          <LabelCustom className="mb-3" text="Email" variant="blue" />
          <InputCustom variant="blue" placeholder="Enter email address" />
        </div>
        <ButtonCustom className=" w-full " text="Send" />
        <hr className="w-full h-[2px] bg-main_color-500" />
        <Button
          className="flex items-center gap-3"
          variant="text"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <IoIosArrowBack className=" w-6 h-6 text-main_color-500 " />
          <span className=" font-public_sans font-bold text-sm text-main_color-500">
            Back
          </span>
        </Button>
      </div>
    </>
  );
}

export default ForgotPassword;
