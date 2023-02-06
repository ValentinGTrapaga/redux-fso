import { createSlice } from '@reduxjs/toolkit'

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    createNote(state, action) {
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
    appendNote(state, action) {
      return [...state, action.payload]
    },
    setNotes(state, action) {
      return action.payload
    }
  }
})

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

export const { createNote, toggleImportanceOf, appendNote, setNotes } =
  noteSlice.actions
export default noteSlice.reducer
