import React, { ReactNode } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setModalOpen } from "../store/features";

type MyComponentProps = {
  modal_body: ReactNode;
};

const Modal: React.FC<React.PropsWithChildren<MyComponentProps>> = ({
  children,
  modal_body,
}) => {
  const open = useSelector((state: RootState) => state.modalOpen.value);
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(setModalOpen());

  return (
    <>
      <div onClick={handleOpen}>{children}</div>
      <Dialog
        className="rounded-none overflow-y-auto max-h-[100vh]"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        open={open}
        handler={handleOpen}
      >
        <DialogHeader
          className=" bg-main_color-100 px-2 py-1 flex justify-end"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Button
            className="p-1"
            variant="text"
            onClick={handleOpen}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <IoClose className=" w-6 h-6" />
          </Button>
        </DialogHeader>
        <DialogBody
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className=" "
        >
          {modal_body}
        </DialogBody>
      </Dialog>
    </>
  );
};

export default Modal;
