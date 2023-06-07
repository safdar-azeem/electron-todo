import { ITodo, TodoSliceState } from '@/types/todo.type'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const initialState: TodoSliceState = {
   todos: [],
   editTodo: null,
}

export const todoSlice = createSlice({
   name: 'todo',
   initialState,
   reducers: {
      addTodo: (state, action: PayloadAction<string>) => {
         const newTodo = {
            id: Date.now(),
            title: action.payload,
         }
         state.todos.push(newTodo)
      },
      removeTodo: (state, action: PayloadAction<number>) => {
         state.todos = state.todos.filter((todo) => todo.id !== action.payload)
      },
      setEditTodo: (state, action: PayloadAction<ITodo>) => {
         state.editTodo = action.payload
      },
      updateTodo: (state, action: PayloadAction<ITodo>) => {
         state.todos = state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo))
         state.editTodo = null
      },
   },
})

export const { addTodo, removeTodo, updateTodo, setEditTodo } = todoSlice.actions

export default todoSlice.reducer
