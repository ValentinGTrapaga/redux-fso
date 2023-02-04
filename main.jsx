import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

import { Provider } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'
import noteReducer from './reducers/noteReducer'
import { filterReducer } from './reducers/filterReducer'

import { App } from './App'

const store = configureStore({
  reducer: { notes: noteReducer, filter: filterReducer }
})

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
