/* actions.ts */

import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction<string>('ADD_TODO');
