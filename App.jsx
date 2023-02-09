import React, { useEffect } from 'react'

import { initializeNotes } from './reducers/noteReducer'

import { NewNote } from './NewNote'
import { Notes } from './Notes'
import { VisibilityFilter } from './Filter'
import { useDispatch } from 'react-redux'

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeNotes())
  }, [])

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}
