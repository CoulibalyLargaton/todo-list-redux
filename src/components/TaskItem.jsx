import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, toggleTask } from '../features/todo/todoSlice'

export default function TaskItem(props) {
  const { task } = props
  const dispatch = useDispatch()

  return (
    <li>
      <input
        type="checkbox"
        id={`task-${task.id}`}
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <label htmlFor={`task-${task.id}`}>{task.title}</label>
      <button onClick={() => dispatch(deleteTask(task.id))}>X</button>
    </li>
  )
}
