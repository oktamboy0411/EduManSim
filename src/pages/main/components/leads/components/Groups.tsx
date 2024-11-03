import { FromWhere, GroupList, Sections } from "../../../../../components/groups";

const fromWhereData = [
  { id: "1", title: "telegram", counter: 30 },
  { id: "2", title: "Walked by", counter: 12 },
  { id: "3", title: "Friends", counter: 3 },
];

function Groups() {
  return (
    <div className="grid grid-cols-8 gap-5">
      <GroupList className=" col-span-3" nameText="From where">
        {fromWhereData.map((item) => (
          <FromWhere key={item.id} data={item} />
        ))}
      </GroupList>
      <GroupList className=" col-span-3" nameText="Sections">
        <Sections ></Sections>
      </GroupList>
    </div>
  );
}

export default Groups;
