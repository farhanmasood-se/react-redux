/* reducers.ts */

import { createReducer } from '@reduxjs/toolkit';
import { addTodo } from './actions';

interface TodoState {
  todos: string[];
}

const initialState: TodoState = {
  todos: [],
};

const todoReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (state, action) => {
    state.todos.push(action.payload);
  });
});

export default todoReducer;
