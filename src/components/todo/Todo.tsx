import TodoForm from './TodoForm'
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'

const Todo = () => {
   return (
      <div className="max-w-[600px] flex flex-col gap-y-14 mx-auto min-h-screen mt-14">
         <TodoHeader />
         <TodoList />
         <TodoForm />
      </div>
   )
}

export default Todo
