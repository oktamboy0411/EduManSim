/* eslint-disable react-refresh/only-export-components */
export { default as modalOpenSlice, setModalOpen } from "./modalOpenSlice";
export { default as CEOSlice, patchCEOdata } from "./CEOSlice";
export { default as requestsSlice, addRequestsData } from "./requestsSlice";
export { default as modalTypeSlice, setModalType } from "./modalTypeSlice";

export type { CEOState } from "./CEOSlice";
export type { modalOpenState } from "./modalOpenSlice";
export type { requestsState } from "./requestsSlice";
export type { modalTypeState } from "./modalTypeSlice";
