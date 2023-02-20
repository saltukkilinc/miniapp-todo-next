import Logo from "../components/UI/Logo";
import PinIcon from "../components/UI/Icons/PinIcon";
import TodoItem from "../components/Todos/TodoItem";
import dynamic from "next/dynamic";
import TodoContext from "@/context/todo-context";
import { useContext } from "react";

const AddTaskModal = dynamic(
  () => import("@/components/UI/Modal/AddTaskModal"),
  {
    ssr: false,
  }
);

export default function Home() {
  const { todos } = useContext(TodoContext);

  return (
    <main className="w-[375px] h-[812px] bg-gradient-to-r from-[#85A1BA] to-[#194591] font-inter">
      <Logo />
      <section className="w-[343px] h-[650px] bg-[#FFFFFF] mx-auto mt-[30px] rounded-[8px] overflow-hidden">
        <h3 className="w-[149px] h-[22px]  text-[#194591] text-[18px] font-semibold leading-[22px] text-center tracking-[-1.5%] mt-[16px] mx-auto">
          To Do List
        </h3>
        <hr className="mt-3 w-[159px] mx-auto border-[#FF7964] border-[3px]" />
        <hr />
        <article className="px-[16px] pt-[25px] h-[578px] flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-3">
              <PinIcon />
              <p className="text-[#FF7964]  text-[14px] leading-[20px]">
                Pin on the top
              </p>
            </div>
            <ul className="mt-[24px] space-y-[30px]">
              {todos?.map(
                (todo) =>
                  todo.isPinned && <TodoItem key={todo.id} todo={todo} />
              )}
            </ul>
            <hr className="mt-[32px] mb-[24px]" />
            <ul className="space-y-[30px]">
              {todos?.map(
                (todo) =>
                  !todo.isPinned && <TodoItem key={todo.id} todo={todo} />
              )}
            </ul>
          </div>

          <AddTaskModal />
        </article>
      </section>
    </main>
  );
}
