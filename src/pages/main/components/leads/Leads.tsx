import { ButtonCustom, GroupButton } from "../../../../components/common";
import { GrAppsRounded, GrList } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import Groups from "./components/Groups";
import Lists from "./components/Lists";
import { useDispatch } from "react-redux";
import { setModalOpen, setModalType } from "../../../../store/features";
import { MODAL_LIST_DATA } from "../../../../modals";

function Leads() {
  const [active, setActive] = useState("2");
  const dispatch = useDispatch();

  const data = [
    {
      id: "1",
      text: <GrList className=" w-6 h-6" />,
      onClick: () => {},
    },
    {
      id: "2",
      text: <GrAppsRounded className=" w-6 h-6" />,
      onClick: () => {},
    },
  ];

  const handleClick = () => {
    dispatch(setModalType({ value: MODAL_LIST_DATA.AddNewLead }));
    dispatch(setModalOpen());
  };

  return (
    <div className="p-10">
      <div className="mb-10 flex items-center justify-between">
        <GroupButton
          getActive={setActive}
          active={active}
          className=" px-5"
          data={data}
        />
        <ButtonCustom className="flex items-center gap-2" onClick={handleClick}>
          <FaPlus className="w-4 h-4" /> <span>Add lead</span>
        </ButtonCustom>
      </div>
      {active == "2" ? <Groups /> : <Lists />}
    </div>
  );
}

export default Leads;
