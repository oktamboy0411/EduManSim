import { useNavigate } from "react-router-dom";
import { ButtonCustom, ChangeLanguage } from "../components";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-11 py-4 bg-white">
      <h1
        onClick={() => navigate("/")}
        className=" font-public_sans font-bold text-3xl text-main_color-600 cursor-pointer "
      >
        EduManSim
      </h1>
      <div className="flex items-center gap-2">
        <a
          className=" font-public_sans font-normal text-base mr-6"
          href="tel:+998904174756"
        >
          (90) 417-47-56
        </a>
        <ChangeLanguage />
        <ButtonCustom onClick={() => navigate("/login")}>Log in</ButtonCustom>
      </div>
    </div>
  );
}

export default Header;
