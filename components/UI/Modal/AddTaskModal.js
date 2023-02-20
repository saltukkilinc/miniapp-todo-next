import Sheet from "react-modal-sheet";
import { useState } from "react";
import AddTaskLeftIcon from "../Icons/AddTaskLeftIcon";
import AddTaskrightIcon from "../Icons/AddTaskrightIcon";
import NewTodo from "../../Todos/NewTodo";

const AddTaskModal = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        <div className="h-[54px] w-[311px] bg-[#21A7F9] text-white flex justify-between items-center pl-[27px] pr-[20px] text-[18px] ">
          <div className="flex space-x-5">
            <AddTaskLeftIcon />
            <p>Add a task</p>
          </div>
          <AddTaskrightIcon />
        </div>
      </button>
      <Sheet isOpen={isOpen} onClose={() => setOpen(false)} snapPoints={[600]}>
        <Sheet.Container>
          <Sheet.Content> 
            <NewTodo onCloseModal={setOpen}/>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop onClick={() => setOpen(false)} />
      </Sheet>
    </>
  );
};

export default AddTaskModal;

