import { useNavigate } from "react-router-dom";
import {
  ButtonCustom,
  ChangeLanguage,
  InputCustom,
  LabelCustom,
} from "../../../components/common";

function SignIn() {
  const navigate = useNavigate();

  return (
    <>
      <div className=" w-full flex justify-end mb-32">
        <ChangeLanguage />
      </div>
      <div className="flex items-center flex-col gap-7">
        <h2 className=" font-public_sans font-bold text-3xl text-main_color-500 ">
          Sign in
        </h2>
        <div className=" w-full ">
          <LabelCustom className=" mb-3 " text="Phone number" redStar={true} />
          <InputCustom phoneNumber value="+998" />
        </div>
        <div className=" w-full ">
          <LabelCustom className=" mb-3 " text="Password" redStar={true} />
          <InputCustom placeholder="Enter password" password />
        </div>
        <ButtonCustom className=" w-full ">Next</ButtonCustom>
        <hr className=" w-full h-[2px] bg-main_color-500" />
        <h3 className=" font-public_sans font-bold text-base w-full">
          Don't have an account? |{" "}
          <span
            onClick={() => navigate("/request_demo")}
            className=" text-main_color-500 cursor-pointer"
          >
            Fill out an application
          </span>
        </h3>
      </div>
    </>
  );
}

export default SignIn;
