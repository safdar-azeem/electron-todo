import { useAppSelector } from '@/hooks/store'
import { ITodo } from '@/types/todo.type'
import TodoItem from './TodoItem'

const TodoList = () => {
   const { todos } = useAppSelector((state) => state.todo)

   return (
      <div>
         {todos.length > 0 ? (
            todos.map((todo: ITodo, index: number) => <TodoItem {...todo} index={index + 1} />)
         ) : (
            <p className="text-center text-fs-1">Add a todo to get started</p>
         )}
      </div>
   )
}

export default TodoList
