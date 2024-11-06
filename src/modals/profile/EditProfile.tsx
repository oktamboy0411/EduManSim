import { useDispatch } from "react-redux";
import {
  ButtonCustom,
  InputCustom,
  LabelCustom,
} from "../../components/common";
import { setModalOpen } from "../../store/features";

function EditProfile() {
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(setModalOpen());

  return (
    <div className=" flex flex-col gap-7">
      <h2 className=" font-public_sans font-bold text-3xl text-main_color-500 text-center">
        Edit Profile
      </h2>
      <div>
        <LabelCustom className=" mb-3 " text="Name" redStar={true} />
        <InputCustom placeholder="Enter name" />
      </div>
      <div>
        <LabelCustom className=" mb-3 " text="Surname" redStar={true} />
        <InputCustom placeholder="Enter surname" />
      </div>
      <div>
        <LabelCustom className=" mb-3 " text="Job Title" redStar={true} />
        <InputCustom placeholder="Enter job title" />
      </div>
      <div>
        <LabelCustom
          className=" mb-3 "
          text="Telegram username"
          redStar={true}
        />
        <InputCustom placeholder="Enter username" />
      </div>
      <div>
        <LabelCustom className=" mb-3 " text="Phone number" redStar={true} />
        <InputCustom phoneNumber value="+998" />
      </div>
      <ButtonCustom onClick={handleOpen} className="w-full">
        Send
      </ButtonCustom>
    </div>
  );
}

export default EditProfile;
