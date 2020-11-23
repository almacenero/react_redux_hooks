const ADD_TODO = "add_todo";

export const add_todo = (name) => ({
  type: ADD_TODO,
  payload: { name: name },
});

const initialState = {
  todo: [],
};

const newTodo = (name) => {
  return { _id: Date.now(), name: name, complete: false };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: state.todo.concat(newTodo(action.payload.name)),
      };
    default:
      return state;
  }
};
