import { Avatar } from "@material-tailwind/react";
import { MoreBtnType, MoreButton } from "../common";
import InformationBtn, { InformationBtnType } from "./InformationBtn";

import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineSms } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setModalOpen, setModalType } from "../../store/features";
import { MODAL_LIST_DATA } from "../../modals";

const informationData: InformationBtnType[] = [
  {
    id: "1",
    type: "Full Name",
    title: "Shoraximov Shamsiddin",
  },
  {
    id: "2",
    type: "Phone number",
    title: "99 999 99 99",
  },
  {
    id: "3",
    type: "Updated",
    title: "01.01.2024",
  },
];

function GroupPerson({
  fullName,
  phoneNumber,
  avatar,
}: {
  fullName: string;
  phoneNumber: string;
  avatar: string;
}) {
  const dispatch = useDispatch();

  const moreData: MoreBtnType[] = [
    {
      id: "1",
      icon: CiEdit,
      text: "Edit",
      onClick: () => {},
    },
    {
      id: "2",
      icon: RiDeleteBin5Line,
      text: "Delete",
      onClick: () => {},
    },
    {
      id: "4",
      icon: MdOutlineSms,
      text: "Sms",
      onClick: () => {
        dispatch(setModalType({ value: MODAL_LIST_DATA.SendSms }));
        dispatch(setModalOpen());
      },
    },
    {
      id: "3",
      icon: FaPlus,
      text: "Add to Group",
      onClick: () => {
        dispatch(setModalType({ value: MODAL_LIST_DATA.AddToGroup }));
        dispatch(setModalOpen());
      },
    },
  ];

  return (
    <div className="flex items-center gap-2 p-2 rounded-xl bg-main_color-100">
      <Avatar
        src={avatar}
        className=" w-7 h-7"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
      <div className="flex items-center justify-between w-full">
        <div>
          <h2 className=" font-public_sans text-sm text-main_color-600">
            {fullName}
          </h2>
          <h3 className=" font-public_sans text-xs text-main_color-400">
            {phoneNumber}
          </h3>
        </div>
        <div className="flex items-center">
          <InformationBtn data={informationData} />
          <MoreButton className=" !w-4 !h-4 " data={moreData} />
        </div>
      </div>
    </div>
  );
}

export default GroupPerson;
