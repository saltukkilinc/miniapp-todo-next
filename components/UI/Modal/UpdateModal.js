import Sheet from "react-modal-sheet";
import { useState } from "react";
import UpdateIcon from "../Icons/UpdateIcon";
import UpdateTodo from "@/components/Todos/UpdateTodo";

const UpdateModal = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="h-[72px] w-full flex justify-center items-center border-b-[1.5px]"
      >
        <UpdateIcon />
      </button>
      <Sheet isOpen={isOpen} onClose={() => setOpen(false)} snapPoints={[500]}>
        <Sheet.Container>
          <Sheet.Content>
            <UpdateTodo onCloseModal= {setOpen}/>
          </Sheet.Content>
        </Sheet.Container>
          
        <Sheet.Backdrop onClick={() => setOpen(false)} />
      </Sheet>
    </>
  );
};

export default UpdateModal;
