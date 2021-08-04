import {
    ADD_TASK,
    DELETE_TASK,
    DONE_TASK,
    EDIT_TASK,
  } from "../constantes/ActionTypes";
   export const addTask = (payload) => {
    return {
      type: ADD_TASK,
      payload
    };
  };
  
  export const deleteTask = (id) => {
    return {
      type: DELETE_TASK,
      payload: id,
    };
  };
  export const doneTask = (id) => {
    return {
      type: DONE_TASK,
      payload: id,
    };
  };
  export const editTask = (id, newTask) => {
    return {
      type: EDIT_TASK,
      payload: { id, newTask },
    };
  };