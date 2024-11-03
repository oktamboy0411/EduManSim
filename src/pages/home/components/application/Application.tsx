import { useNavigate } from "react-router-dom";
import { ButtonCustom, InputCustom, LabelCustom } from "../../../../components/common";
import { useState } from "react";
import { CEOState, patchCEOdata } from "../../../../store/features";
import { useDispatch } from "react-redux";

function Application() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");

  const handleClick = () => {
    const data: CEOState = {
      name,
      surname,
      phone_number: phoneNumber,
      email,
      company_name: companyName,
    };
    dispatch(patchCEOdata(data));
  };

  return (
    <div className=" bg-white p-10 rounded-2xl flex flex-col gap-7 items-center">
      <h2 className=" font-public_sans font-bold text-3xl text-main_color-500">
        Fill out an aplication
      </h2>
      <div className="w-full">
        <LabelCustom className="mb-3" text="Name" redStar={true} />
        <InputCustom placeholder="Enter name" onChange={setName} />
      </div>
      <div className="w-full">
        <LabelCustom className="mb-3" text="Surname" redStar={true} />
        <InputCustom placeholder="Enter surname" onChange={setSurname} />
      </div>
      <div className="w-full">
        <LabelCustom className="mb-3" text="Phone number" redStar={true} />
        <InputCustom phoneNumber value="+998" onChange={setPhoneNumber} />
      </div>
      <div className="w-full">
        <LabelCustom className="mb-3" text="Email" redStar={true} />
        <InputCustom placeholder="Enter email" onChange={setEmail} />
      </div>
      <div className="w-full">
        <LabelCustom className="mb-3" text="Company name" redStar={true} />
        <InputCustom
          placeholder="Enter company name"
          onChange={setCompanyName}
        />
      </div>

      <ButtonCustom onClick={handleClick} className="w-full">
        Send
      </ButtonCustom>
      <hr className="h-[2px] bg-main_color-500 w-full" />
      <div className="flex items-center justify-between w-full">
        <p className=" font-public_sans font-bold text-base text-main_color-500">
          Are you already registered?
        </p>
        <ButtonCustom onClick={() => navigate("/login")} variant="outline">
          Log in
        </ButtonCustom>
      </div>
    </div>
  );
}

export default Application;
