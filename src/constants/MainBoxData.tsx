import { TbUsersPlus } from "react-icons/tb";
import { RxLayers } from "react-icons/rx";
import { PiStudentBold } from "react-icons/pi";
import { RiUserStarLine } from "react-icons/ri";
import { AiOutlineDollar } from "react-icons/ai";
import { IconType } from "react-icons";

interface MainBoxDataType {
  id: string;
  icon: IconType;
  text: string;
  link: string;
}

const MainBoxData: MainBoxDataType[] = [
  {
    id: "1",
    icon: TbUsersPlus,
    text: "Leads",
    link: "/main/leads",
  },
  {
    id: "2",
    icon: RiUserStarLine,
    text: "Teachers",
    link: "/main/leads",
  },
  {
    id: "3",
    icon: RxLayers,
    text: "Groups",
    link: "/main/leads",
  },
  {
    id: "4",
    icon: PiStudentBold,
    text: "Students",
    link: "/main/leads",
  },
  {
    id: "5",
    icon: AiOutlineDollar,
    text: "Budget",
    link: "/main/leads",
  },
];

export default MainBoxData;
