import { AddToGroup } from "./common";
import { AddFromWhere, AddNewLead, AddNewSections, SendSms } from "./leads";
import { EditProfile } from "./profile";

export const MODAL_LIST_DATA = {
  EditProfile: "EditProfile",
  AddFromWhere: "AddFromWhere",
  AddNewSections: "AddNewSections",
  AddNewLead: "AddNewLead",
  AddToGroup: "AddToGroup",
  SendSms: "SendSms",
};

const MODAL_LIST = ({ dataName }: { dataName: string }) => {
  switch (dataName) {
    case MODAL_LIST_DATA.EditProfile:
      return <EditProfile />;
    case MODAL_LIST_DATA.AddFromWhere:
      return <AddFromWhere />;
    case MODAL_LIST_DATA.AddNewSections:
      return <AddNewSections />;
    case MODAL_LIST_DATA.AddNewLead:
      return <AddNewLead />;
    case MODAL_LIST_DATA.AddToGroup:
      return <AddToGroup />;
    case MODAL_LIST_DATA.SendSms:
      return <SendSms />;
    default:
      return <></>;
  }
};

export default MODAL_LIST;
