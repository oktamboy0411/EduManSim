import { useState } from "react";
import { ButtonCustom, TextAreaCustom } from "../../components/common";

const templates = [
  "Bugun farzandingiz darsga kelmadi",
  "Iltimos kurs uchun to’lovni vaqtida to’lang!",
  "Lorem ipsum dolor.",
];

function SendSms() {
  const [value, setValue] = useState<string>();

  return (
    <div className="flex flex-col gap-7">
      <h2 className=" font-public_sans font-bold text-3xl text-main_color-600">
        Send SMS
      </h2>
      <TextAreaCustom
        value={value}
        getValue={setValue}
        placeholder="Enter Message"
        rows={4}
      />
      <ButtonCustom className=" w-full ">Send</ButtonCustom>
      <div className="flex flex-col gap-2">
        <h2 className=" font-public_sans font-bold text-3xl text-main_color-600">
          SMS Templates
        </h2>
        {templates.map((item) => (
          <ButtonCustom
            variant="outline"
            className="px-4 py-3 w-full text-start "
            onClick={() => setValue(item)}
            key={item}
          >
            {item || ""}
          </ButtonCustom>
        ))}
      </div>
    </div>
  );
}

export default SendSms;
