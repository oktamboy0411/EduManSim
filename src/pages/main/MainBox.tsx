import { Outlet, useNavigate } from "react-router-dom";
import {
  ButtonCustom,
  GeoLocation,
  Header,
  LogoType,
  MainBoxAccordion,
} from "../../components/common";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MainBoxData } from "../../constants";
import { Avatar } from "@material-tailwind/react";
import photo from "../../../public/images/Avatar.png";
import { Modal } from "../../modals";

function MainBox() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-11">
      <Modal />
      <div className=" col-span-2 border-r-2 border-line_color rounded-e-xl p-6">
        <LogoType className=" w-full mb-6 " />
        <GeoLocation />
        <hr className=" h-[2px] w-full bg-main_color-100 my-6" />
        <div className=" flex flex-col gap-2">
          {MainBoxData.map((item) => (
            <ButtonCustom
              onClick={() => navigate(item.link)}
              key={item.id}
              variant="text"
            >
              <item.icon className=" w-5 h-5 " />
              <span>{item.text}</span>
            </ButtonCustom>
          ))}
        </div>
        <hr className=" h-[2px] w-full bg-main_color-100 my-6" />
        <ButtonCustom onClick={() => navigate("/main/")} variant="text">
          <IoMdNotificationsOutline className=" w-5 h-5 " />
          <span>Notifications</span>
        </ButtonCustom>
        <MainBoxAccordion />
        <button
          onClick={() => navigate("/main")}
          className=" w-full flex items-center justify-start bg-main_color-100 rounded-lg p-1 gap-4 mt-56"
        >
          <Avatar
            className="w-9 h-9"
            src={photo}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
          <h3 className="font-public_sans font-medium text-sm text-main_color-500">
            Andrew Smith
          </h3>
        </button>
      </div>
      <div className=" col-span-9 bg-bg_light">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default MainBox;
