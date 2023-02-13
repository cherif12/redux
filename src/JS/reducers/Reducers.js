import { list } from "../../Component/data";
import { ADD, DELETE, EDIT, CHECK, FILTER } from "../actionTypes/actionTypes";

const initstate = {
  list: list,
  status: "all",
};

export const TodoReducer = (state = initstate, action) => {
  switch (action.type) {
    case DELETE:
      return {
        ...state,
        list: state.list.filter((e) => e.id != action.payload),
      };

    case EDIT:
      return {
        ...state,
        list: state.list.map((e) =>
          e.id == action.payload.id
            ? { ...e, description: action.payload.title }
            : e
        ),
      };
    case ADD:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: Math.random(),
            description: action.payload,
            isDone: false,
          },
        ],
      };
    case CHECK:
      return {
        ...state,
        list: state.list.map((e) =>
          e.id == action.payload.id
            ? { ...e, isDone: !action.payload.isDone }
            : e
        ),
      };
    default:
      return state;
  }
};
