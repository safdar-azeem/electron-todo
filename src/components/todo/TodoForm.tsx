import { useAppDispatch, useAppSelector } from '@/hooks/store'
import { addTodo, updateTodo } from '@/store/slices/todoSlice'
import { useEffect, useState } from 'react'
import Button from '../ui/Button'
import Input from '../ui/Input'

const TodoForm = () => {
   const [todo, setTodo] = useState('')
   const [error, setError] = useState('')

   const dispatch = useAppDispatch()
   const { editTodo } = useAppSelector((state) => state.todo)

   const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!todo.trim()) return setError('Please enter a todo')

      if (!editTodo) {
         dispatch(addTodo(todo))
      } else {
         dispatch(
            updateTodo({
               id: editTodo.id,
               title: todo,
            })
         )
      }
      setTodo('')
      setError('')
   }

   useEffect(() => {
      if (editTodo) setTodo(editTodo.title)
   }, [editTodo])

   return (
      <form onSubmit={handleSubmit}>
         <Input placeholder="Add New Todo" value={todo} onChange={handleTodoChange} error={error}>
            <Button type="submit" text="Add" variant="primary" size="md" />
         </Input>
      </form>
   )
}

export default TodoForm
