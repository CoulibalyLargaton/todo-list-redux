import React from 'react'
import { useSelector } from 'react-redux'

export default function TaskHeader(props) {
  const tasks = useSelector((state) => state.todo)
  const undoneTasks = tasks.filter((t) => !t.completed).length

  return <p>Taches à faire : {undoneTasks}</p>
}
