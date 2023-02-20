import React, {useState} from "react";
import ModalIcon from "../UI/Icons/ModalIcon";
import ModalCloseIcon from "../UI/Icons/ModalCloseIcon";
import PinIcon from "../UI/Icons/PinIcon";
import PassiveRadioIcon from "../UI/Icons/PassiveRadioIcon";
import { useContext } from "react";
import TodoContext from "@/context/todo-context";
import ActiveRadioIcon from "../UI/Icons/ActiveRadioIcon";

const NewTodo = ({ onCloseModal }) => {
  const [todo, setTodo] = useState({title: '', isPinned: false})

  const {addTodo, todos} = useContext(TodoContext)

  // to take input value
  const changeHandler = (e) => {
    setTodo(prevState => {
      return {...prevState, title: e.target.value}
    });
  }
  // to submit form with enter
  const submitHandler = (e) => {
    e.preventDefault();
    if(todo.title.trim().length === 0) {
      return
    }
    addTodo(todo)
    setTodo({title: '', isPinned: false})
  }
  // to submit with save button
  const clickHandler = () => {
    if(todo.title.trim().length === 0) {
      return 
    }
    
    addTodo(todo)
    setTodo({title: '', isPinned: false})
  }

  // to add pin state
  const pinRadioHandler = () => {
    setTodo(prevState =>{
      return {...prevState, isPinned: !todo.isPinned}
    })
  }


  
  return (
    <>
      <div className="flex items-center justify-center py-[17px] space-x-[93px]">
        <ModalIcon />
        <ModalCloseIcon onCloseModal={onCloseModal} />
      </div>
      <hr className="border-[1.5px] border-[#E5E5E5]" />
      <div className="flex flex-col justify-between h-[500px]">
        <div className="px-[32px]">
          <form className="flex justify-center py-[32px]" onSubmit={submitHandler}>
            <input
              onChange={changeHandler}
              type="text"
              value={todo.title}
              name='todoInput'
              placeholder="Task description"
              className=" border border-[#999C9F] px-[15px] py-[16px] w-[311px] h-[52px]"
            />
          </form>
          <div className="flex justify-between">
            <div className="flex items-center space-x-[10px]">
              <PinIcon />
              <p>Pin on the top</p>
            </div>
            <div onClick={pinRadioHandler}>
              {!todo.isPinned && <PassiveRadioIcon />}
              {todo.isPinned && <ActiveRadioIcon />}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <button className="w-[311px] h-[54px] bg-[#21A7F999] rounded-[4px] text-[white]" onClick={clickHandler}>
            Save
          </button>
          <button
            className="w-[58px] h-[22px] text-[#21A7F9] mt-[32px]"
            onClick={() => onCloseModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default NewTodo;
