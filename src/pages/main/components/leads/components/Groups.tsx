import {
  FromWhere,
  GroupList,
  GroupPerson,
  Sections,
} from "../../../../../components/groups";
import avatarImg from "../../../../../../public/images/Avatar.png";
import { useDispatch } from "react-redux";
import { setModalOpen, setModalType } from "../../../../../store/features";
import { MODAL_LIST_DATA } from "../../../../../modals";

const fromWhereData = [
  { id: "1", title: "telegram", counter: 30 },
  { id: "2", title: "Walked by", counter: 12 },
  { id: "3", title: "Friends", counter: 3 },
];

const sectionsData = [
  {
    id: "1",
    title: "Elementary",
    counter: 30,
    children: [],
  },
  {
    id: "2",
    title: "Beginner",
    counter: 15,
    children: [],
  },
  {
    id: "3",
    title: "Matematika",
    counter: 26,
    children: [],
  },
  {
    id: "4",
    title: "Informatika",
    counter: 4,
    children: [],
  },
];

function Groups() {
  const dispatch = useDispatch();

  const fromWhereClick = () => {
    dispatch(setModalType({ value: MODAL_LIST_DATA.AddFromWhere }));
    dispatch(setModalOpen());
  };

  const sectionsClick = () => {
    dispatch(setModalType({ value: MODAL_LIST_DATA.AddNewSections }));
    dispatch(setModalOpen());
  };

  return (
    <div className="grid grid-cols-8 gap-5">
      <GroupList
        className=" col-span-3"
        nameText="From where"
        onClick={fromWhereClick}
      >
        {fromWhereData.map((item) => (
          <FromWhere key={item.id} data={item} />
        ))}
      </GroupList>
      <GroupList
        className=" col-span-3"
        nameText="Sections"
        onClick={sectionsClick}
      >
        {sectionsData.map(({ id, title, counter }) => (
          <Sections key={id} title={title} counter={counter}>
            <GroupPerson
              fullName="Shamsiddin Shoraximov"
              phoneNumber="99 875 23 34"
              avatar={avatarImg}
            />
          </Sections>
        ))}
      </GroupList>
    </div>
  );
}

export default Groups;
