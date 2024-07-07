import React from 'react'
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'

export default function TaskList(props) {
  const tasks = useSelector((state) => state.todo)

  return (
    <ul>
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} />
      ))}
    </ul>
  )
}
