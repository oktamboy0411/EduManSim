import { useNavigate } from "react-router-dom";
import { ButtonCustom, InputCustom, LabelCustom } from "../../../../components";

function Application() {
  const navigate = useNavigate();

  return (
    <div className=" bg-white p-10 rounded-2xl flex flex-col gap-7 items-center">
      <h2 className=" font-public_sans font-bold text-3xl text-main_color-500">
        Fill out an aplication
      </h2>
      <div className="w-full">
        <LabelCustom className="mb-3" text="Name" redStar={true} />
        <InputCustom placeholder="Enter name" variant="" />
      </div>
      <div className="w-full">
        <LabelCustom className="mb-3" text="Surname" redStar={true} />
        <InputCustom placeholder="Enter surname" variant="" />
      </div>
      <div className="w-full">
        <LabelCustom className="mb-3" text="Phone number" redStar={true} />
        <InputCustom placeholder="+998" variant="" />
      </div>
      <div className="w-full">
        <LabelCustom className="mb-3" text="Email" redStar={true} />
        <InputCustom placeholder="Enter email" variant="" />
      </div>
      <div className="w-full">
        <LabelCustom className="mb-3" text="Company name" redStar={true} />
        <InputCustom placeholder="Enter company name" variant="" />
      </div>

      <ButtonCustom className="w-full" text="Send" />
      <hr className="h-[2px] bg-main_color-500 w-full" />
      <div className="flex items-center justify-between w-full">
        <p className=" font-public_sans font-bold text-base text-main_color-500">
          Are you already registered?
        </p>
        <ButtonCustom
          onClick={() => navigate("/login")}
          variant="outline"
          text="Log in"
        />
      </div>
    </div>
  );
}

export default Application;
