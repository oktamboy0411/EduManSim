import { useNavigate } from "react-router-dom";
import { ButtonCustom } from "../../../components";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[880px] flex flex-col justify-between items-center homePageBg">
      <div className=" mt-36 flex flex-col items-center gap-7">
        <h2 className=" font-public_sans text-5xl text-center text-white">
          A simple management system <br />
          for education
        </h2>
        <ButtonCustom
          className=" px-36 font-medium"
          onClick={() => navigate("/request_demo")}
        >
          Request a demo
        </ButtonCustom>
      </div>
      <div className="w-full flex flex-col items-center gap-4 mb-5">
        <span className=" inline-block h-1 w-5/6 bg-line_color"></span>
        <p className=" font-public_sans text-xl font-normal text-white">
          © 2024 edumansim.uz All rights reserved
        </p>
      </div>
    </div>
  );
}

export default HomePage;
