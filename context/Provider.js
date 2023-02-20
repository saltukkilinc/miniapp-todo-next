import React, { useReducer, useEffect } from "react";
import TodoContext from "./todo-context";
import reducerFn from "./reducerFn";

const initialState = {
  todos: [],
  id: null
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  // Taking data from local storage
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("todos"))) {
      dispatch({
        type: "LOCAL",
        payload: JSON.parse(localStorage.getItem("todos")),
      });
    } 
  }, []);

  // Sending data to local storage (state !== initialState is important)
  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem("todos", JSON.stringify(state.todos));
    }
  }, [state.todos]);


  // Adding todo Items
  const addTodo = (todo) => {
    dispatch({ type: "ADD", payload: todo });
  };

  // Add Check
  const addCheck = (id) => {
    dispatch({type: 'ISCHECKED', payload: id})
  }

  // Take Id of todo Item
  const takeIdOfItem = (id) => {
    dispatch({type: 'ID', payload: id})
  } 
  
  // deleteHandler
  const deleteHandler = () => {
    dispatch({type: 'DELETE'})
  }

  // pinHandler
  const pinHandler = () => {
    dispatch({type: 'PIN'})
  }

  // updateHandler
  const updateHandler = (updatedTodo) => {
    dispatch({type: 'UPDATE', payload: updatedTodo})
  }
 

  const contextValue = {
    todos: state.todos,
    id: state.id,
    addTodo,
    addCheck,
    takeIdOfItem,
    deleteHandler,
    pinHandler,
    updateHandler
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export default Provider;
