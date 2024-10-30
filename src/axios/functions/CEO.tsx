import { Instance } from "..";

interface CEOdatatype {
  name?: string;
  surname?: string;
  phone_number?: string;
  email?: string;
  company_name?: string;
  password?: string;
  img?: string;
  job_title?: string;
  telegram_username?: string;
}

const updateDataCEO = async (updatedData: CEOdatatype) => {
  try {
    const response = await Instance.put(`/CEO`, updatedData);
    console.log("Yangilangan ma'lumot:", response.data);
  } catch (error) {
    console.error("Xatolik:", error);
  }
};

export type { CEOdatatype };
export { updateDataCEO };
