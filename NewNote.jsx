import React from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from './reducers/noteReducer'

export const NewNote = () => {
  const dispatch = useDispatch()

  const addNote = async (evt) => {
    evt.preventDefault()
    const content = evt.target.note.value
    evt.target.note.value = ''
    dispatch(createNote(content))
  }

  return (
    <form onSubmit={addNote}>
      <input name='note' />
      <button type='submit'>add</button>
    </form>
  )
}
