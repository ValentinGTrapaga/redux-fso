import { createSlice } from '@reduxjs/toolkit'
import { getAll, createNew } from './../services/notes'

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    appendNote(state, action) {
      return [...state, action.payload]
    },
    toggleImportanceOf(state, action) {
      const id = action.payload
      console.log(JSON.parse(JSON.stringify(state)))

      return state.map((note) => {
        if (note.id === id) {
          return { ...note, important: !note.important }
        }

        return note
      })
    },
    setNotes(state, action) {
      return action.payload
    }
  }
})

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await getAll()
    dispatch(setNotes(notes))
  }
}

export const createNote = (content) => {
  return async (dispatch) => {
    const newNote = await createNew(content)
    dispatch(appendNote(newNote))
  }
}

export const { toggleImportanceOf, setNotes, appendNote } = noteSlice.actions
export default noteSlice.reducer
