import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

import { configureStore } from '@reduxjs/toolkit'
import {
  noteReducer,
  createNote,
  toggleImportanceOf
} from './reducers/noteReducer'

const store = configureStore({ reducer: noteReducer })

const addNote = (evt) => {
  evt.preventDefault()
  const content = evt.target.note.value
  evt.target.note.value = ''
  store.dispatch(createNote(content))
}

const toggleImportance = (id) => {
  store.dispatch(toggleImportanceOf(id))
}

const App = () => {
  return (
    <div>
      <form onSubmit={addNote}>
        <input name='note' />
        <button type='submit'>add</button>
      </form>
      <ul>
        {store.getState().map((note) => (
          <li
            key={note.id}
            onClick={() => toggleImportance(note.id)}>
            {note.content} <strong>{note.important ? 'important' : ''}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()

store.subscribe(renderApp)
