import { Avatar } from "@material-tailwind/react";
import { ButtonCustom } from "../../../../components/common";
import { GrEdit } from "react-icons/gr";
import photo from "../../../../../public/images/Avatar.png";
import { Modal } from "../../../../modals";
import { EditProfile } from "../../../../modals/profile";

function Profile() {
  return (
    <div className="p-10">
      <div className=" p-[6px] rounded-[14px] w-[340px] bg-white">
        <div className=" bg-line_color rounded-lg px-5 py-7 flex items-center justify-end relative">
          <Avatar
            src={photo}
            className="border-4 border-white absolute w-24 h-24 -bottom-7 left-5 "
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
          <Modal modal_body={<EditProfile />}>
            <ButtonCustom className="flex items-center gap-2 px-4">
              <GrEdit />
              <span>Edit Profile</span>
            </ButtonCustom>
          </Modal>
        </div>
        <div className="mt-10 mx-5 mb-4">
          <h2 className=" font-public_sans font-bold text-lg mb-1">
            Andrew Smith
          </h2>
          <ButtonCustom className=" px-[10px] py-1 mb-6">CEO</ButtonCustom>
          <div className="flex items-center justify-between mb-3">
            <p className=" font-public_sans text-sm">Telegram:</p>
            <a
              className=" font-public_sans font-bold text-sm text-main_color-500"
              href=""
            >
              @andrewsmith
            </a>
          </div>
          <div className="flex items-center justify-between">
            <p className=" font-public_sans text-sm">Phone:</p>
            <a
              className=" font-public_sans font-bold text-sm text-main_color-500"
              href=""
            >
              99 772-45-58
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
