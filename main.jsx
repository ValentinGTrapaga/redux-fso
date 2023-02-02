import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

import { configureStore } from '@reduxjs/toolkit'
import { noteReducer } from './reducers/noteReducer'

const store = configureStore({ reducer: noteReducer })

store.dispatch({
  type: 'NEW_NOTE',
  payload: {
    content: 'the app state is in redux store',
    important: true,
    id: 1
  }
})

store.dispatch({
  type: 'NEW_NOTE',
  payload: {
    content: 'state changes are made with actions',
    important: false,
    id: 2
  }
})

store.dispatch({
  type: 'TOGGLE_IMPORTANCE',
  payload: {
    id: 2
  }
})

const App = () => {
  return (
    <div>
      <ul>
        {store.getState().map((note) => (
          <li key={note.id}>
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
