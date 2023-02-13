import { ADD, CHECK, DELETE, EDIT, FILTER } from "../actionTypes/actionTypes";

  

  export const addtodo = (description) => {
    return {
      type: ADD,
      payload: description
    };
  };
  
  export const filtertodo = (text) => {
    return {
      type: FILTER,
      payload: text,
    };
  };
  
 
  export const checktodo = (id,isDone) => {
    return {
      type: CHECK,
      payload: {id, isDone}
    };
  };


  export const edittodo = (id, title) => {
    return {
      type: EDIT,
      payload: {id, title }
    };
  };
  
  export const deletetodo = (id) => {
    return {
      type: DELETE,
      payload: id
    };
  };