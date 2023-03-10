import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf } from './reducers/noteReducer'

export const Notes = () => {
  const dispatch = useDispatch()
  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id))
  }

  const notes = useSelector(({ filter, notes }) => {
    if (filter === 'ALL') {
      return notes
    }
    return filter === 'IMPORTANT'
      ? notes.filter((note) => note.important)
      : notes.filter((note) => !note.important)
  })

  return (
    <ul>
      {notes.map((note) => (
        <li
          key={note.id}
          onClick={() => toggleImportance(note.id)}>
          {note.content} <strong>{note.important ? 'important' : ''}</strong>
        </li>
      ))}
    </ul>
  )
}
