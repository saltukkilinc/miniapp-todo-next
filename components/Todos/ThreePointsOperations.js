import React, { useContext } from "react";
import TodoContext from "@/context/todo-context";
import PassivePinIcon from "../UI/Icons/PassivePinIcon";
import DeleteIcon from "../UI/Icons/DeleteIcon";
import dynamic from "next/dynamic";

const UpdateModal = dynamic(
  () => {
    return import("@/components/UI/Modal/UpdateModal");
  },
  { ssr: false }
);

const ThreePointsOperations = () => {
  const { deleteHandler, pinHandler } = useContext(TodoContext);
  return (
    <div>
      <div
        className="h-[72px] flex justify-center items-center border-b-[1.5px]"
        onClick={pinHandler}
      >
        <PassivePinIcon />
      </div>
      <div>
        <UpdateModal />
      </div>

      <div
        className="h-[72px] flex justify-center items-center border-b-[1.5px]"
        onClick={deleteHandler}
      >
        <DeleteIcon />
      </div>
    </div>
  );
};

export default ThreePointsOperations;
