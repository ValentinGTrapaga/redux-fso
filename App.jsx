import React from 'react'

import { NewNote } from './NewNote'
import { Notes } from './Notes'
import { VisibilityFilter } from './Filter'

export const App = () => {
  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}
