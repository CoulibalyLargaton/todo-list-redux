import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/todo/todoSlice'

export default function TaskFooter(props) {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text) {
      dispatch(addTask(text))
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Entrer une tache"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  )
}
