import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MoreBtnType, MoreButton } from "../common";

const items: MoreBtnType[] = [
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
];

function FromWhere({
  data,
}: {
  data: { id: string; title: string; counter: number };
}) {
  return (
    <div className="flex items-center justify-between border-2 border-line_color py-2 rounded-xl">
      <div className="pl-4">
        <h3 className=" font-public_sans font-normal text-sm">{data.title}</h3>
        <h2 className=" font-public_sans font-bold text-2xl text-main_color-500">
          {data.counter}
        </h2>
      </div>
      <MoreButton data={items} />
    </div>
  );
}

export default FromWhere;
