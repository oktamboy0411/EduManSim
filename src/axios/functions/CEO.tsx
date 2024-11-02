/* eslint-disable react-refresh/only-export-components */
import { useDispatch } from "react-redux";
import { Instance } from "..";
import { CEOState, patchCEOdata } from "../../store/features";

const updateDataCEO = async (updatedData: CEOState) => {
  try {
    const response = await Instance.put(`/CEO`, updatedData);
    console.log("Yangilangan ma'lumot:", response.data);
    return true;
  } catch (error) {
    console.error("Xatolik:", error);
    return false;
  }
};

function CEOGetFunction() {
  const dispatch = useDispatch();
  async function getData() {
    try {
      const response = await Instance.get<CEOState>(`/CEO`);
      console.log("Ma'lumot:", response.data);
      dispatch(patchCEOdata(response.data));
    } catch (error) {
      console.error("Xato yuz berdi:", error);
      throw error;
    }
  }
  getData();
  return <></>;
}

export { updateDataCEO };
export default CEOGetFunction;
