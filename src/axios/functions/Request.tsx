/* eslint-disable react-refresh/only-export-components */
import { Instance } from "..";
import { requestsState } from "../../store/features";

function Request() {
  return <div>Request</div>;
}

export const addRequestData = async (event: requestsState) => {
  try {
    const response = await Instance.post<requestsState>("/requests", event);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export default Request;
