import React, { useContext} from "react";
import ActiveCheckboxIcon from "../UI/Icons/ActiveCheckboxIcon";
import PassiveCheckboxIcon from "../UI/Icons/PassivecheckboxIcon";
import TodoContext from "@/context/todo-context";
import dynamic from "next/dynamic";


const ThreePointsModal = dynamic(() => {
  return import('@/components/UI/Modal/ThreePointsModal')
}, { ssr: false})


const TodoItem = ({todo}) => {
  const {addCheck, takeIdOfItem} = useContext(TodoContext)
  
  return (
    <li className="flex items-center justify-between">
      <label className="flex gap-4" onClick={() => addCheck(todo.id)}>
        {!todo.isChecked && <PassiveCheckboxIcon />}
        {todo.isChecked && <ActiveCheckboxIcon />}
        {todo.title}
        
      </label>
      <div onClick={() => takeIdOfItem(todo.id)}>
        <ThreePointsModal />
      </div>
    </li>
  );
};

export default TodoItem;
