import { Outlet } from "react-router-dom";
import photo from "/images/login.jpg";

function Login() {
  return (
    <div className="grid grid-cols-7 p-7 gap-7 bg-bg_light">
      <div className=" col-span-3 p-10 bg-white rounded-3xl">
        <Outlet />
      </div>
      <img
        className=" col-span-4 h-[890px] object-cover w-full rounded-3xl"
        src={photo}
      />
    </div>
  );
}

export default Login;
