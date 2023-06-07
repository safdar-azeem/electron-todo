export interface ITodo {
   id: number
   title: string
}

export interface TodoSliceState {
   todos: ITodo[]
   editTodo: ITodo | null
}
