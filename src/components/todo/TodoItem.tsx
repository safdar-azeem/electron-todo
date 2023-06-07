import { useAppDispatch } from '@/hooks/store'
import { removeTodo, setEditTodo } from '@/store/slices/todoSlice'
import Button from '../ui/Button'

interface TodoItemProps {
   index: number
   title: string
   id: number
}

const TodoItem = ({ index, id, title }: TodoItemProps) => {
   const dispatch = useAppDispatch()
   const handleRemoveTodo = () => dispatch(removeTodo(id))
   const handleEditTodo = () => dispatch(setEditTodo({ id, title }))

   return (
      <div>
         <div className="py-3 border-b border-gray-500 flex items-center justify-between">
            <p>
               {index}. {title}
            </p>
            <div className="button-group">
               <Button icon="material-symbols:edit" rounded="full" size="sm" onClick={handleEditTodo} />
               <Button icon="tabler:trash-filled" rounded="full" size="sm" onClick={handleRemoveTodo} />
            </div>
         </div>
      </div>
   )
}

export default TodoItem
