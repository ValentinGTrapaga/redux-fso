import React, { useEffect } from 'react'

import { getAll } from './services/notes'
import { setNotes } from './reducers/noteReducer'

import { NewNote } from './NewNote'
import { Notes } from './Notes'
import { VisibilityFilter } from './Filter'
import { useDispatch } from 'react-redux'

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    getAll().then((notes) => dispatch(setNotes(notes)))
  }, [])

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}
