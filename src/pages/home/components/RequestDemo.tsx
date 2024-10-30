import { ButtonCustom } from "../../../components";
import { MdPhone, MdEmail } from "react-icons/md";
import { Application } from "./application";

function RequestDemo() {
  return (
    <div className=" grid grid-cols-2 items-center gap-16 bg-bg_light w-full px-20 py-10">
      <Application />
      <div className=" flex flex-col items-start justify-center">
        <h2 className=" font-public_sans font-bold text-3xl text-main_color-500 mb-4">
          Request demo
        </h2>
        <p className=" font-public_sans text-lg ">
          If you wand to know ore about Options opportunities. fill out the
          application and enjoy 14 days for free
        </p>
        <hr className="h-[2px] bg-main_color-500 w-full my-10" />
        <p className=" mb-5 font-public_sans font-medium text-xl text-main_color-500">
          Contact us if you have any questions
        </p>
        <div className=" flex items-center justify-start gap-5 mb-3">
          <div className="w-11 h-11 rounded-md bg-line_color flex items-center justify-center">
            <MdPhone className=" text-white w-6 h-6" />
          </div>
          <a
            className=" font-public_sans font-normal text-lg"
            href="tel:+998904174756"
          >
            (90) 417-47-56
          </a>
        </div>
        <div className=" flex items-center justify-start gap-5 mb-10">
          <div className="w-11 h-11 rounded-md bg-line_color flex items-center justify-center">
            <MdEmail className=" text-white w-6 h-6" />
          </div>
          <a
            className=" font-public_sans font-normal text-lg"
            href="mailto:info@edumansim.uz"
          >
            info@edumansim.uz
          </a>
        </div>
        <ButtonCustom className="w-96">Request a demo</ButtonCustom>
      </div>
    </div>
  );
}

export default RequestDemo;
