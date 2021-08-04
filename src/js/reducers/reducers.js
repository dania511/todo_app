import {
    ADD_TASK,
    DELETE_TASK,
    DONE_TASK,
    EDIT_TASK,
  } from "../constantes/ActionTypes";

//initial state
  const initialState = {
    todos: [],
  };
  //create reducer
  const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) { //return sera selon le type de l'action 
      case ADD_TASK:   return {...state,todos:[...state.todos,  payload ]}
      case DONE_TASK:   return {...state,todos:state.todos.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el)}
      case DELETE_TASK: return {...state,todos:state.todos.filter((el) => el.id !== payload)};
      case EDIT_TASK:return {...state,todos: state.todos.map((el)=>el.id === payload.id ? { ...el, text: payload.newTask } : el)};
      default:
        return state;
    }
  };
  
  export default todoReducer;